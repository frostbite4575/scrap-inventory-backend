const express = require('express');
const router = express.Router();
const ScrapPiece = require('../models/ScrapPiece');
const ActivityLog = require('../models/ActivityLog');
const { authenticate } = require('../middleware/auth');
const { getMaterialsByType, getMaterialById, getMaterialTypes } = require('../config/plateCatalog');
const { getAreas, getSections, getBins, buildLocationString } = require('../config/locationCatalog');
const { generateReservationId } = require('../utils/reservationId');

// Catalog endpoints - MUST be before /:id route to avoid conflict
router.get('/catalog', (req, res) => {
  const { type } = req.query;

  if (type) {
    const materials = getMaterialsByType(type);
    res.json({ type, materials });
  } else {
    const types = getMaterialTypes();
    res.json({ types });
  }
});

router.get('/catalog/:materialId', (req, res) => {
  const material = getMaterialById(req.params.materialId);

  if (!material) {
    return res.status(404).json({ message: 'Material not found in catalog' });
  }

  res.json(material);
});

// Location endpoints
router.get('/locations/areas', (req, res) => {
  const areas = getAreas();
  res.json({ areas });
});

router.get('/locations/sections/:areaId', (req, res) => {
  const sections = getSections(req.params.areaId);
  res.json({ sections });
});

router.get('/locations/bins/:areaId/:sectionId', (req, res) => {
  const bins = getBins(req.params.areaId, req.params.sectionId);
  res.json({ bins });
});

// GET all scrap pieces (with filtering)
router.get('/', authenticate, async (req, res) => {
  try {
    const {
      minLength,
      maxLength,
      minWidth,
      maxWidth,
      thickness,
      materialGrade,
      status,
      location,
      reservationId
    } = req.query;

    // Build filter object
    let filter = {};

    if (minLength) filter.length = { ...filter.length, $gte: parseFloat(minLength) };
    if (maxLength) filter.length = { ...filter.length, $lte: parseFloat(maxLength) };
    if (minWidth) filter.width = { ...filter.width, $gte: parseFloat(minWidth) };
    if (maxWidth) filter.width = { ...filter.width, $lte: parseFloat(maxWidth) };
    if (thickness) filter.thickness = parseFloat(thickness);
    if (materialGrade) filter.materialGrade = materialGrade;
    if (status) filter.status = status;
    if (location) filter.location = new RegExp(location, 'i'); // Case-insensitive search
    if (reservationId) filter.reservationId = new RegExp(reservationId, 'i'); // Case-insensitive search

    const scrapPieces = await ScrapPiece.find(filter)
      .sort({ dateAdded: -1 }); // Newest first

    res.json({
      count: scrapPieces.length,
      data: scrapPieces
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single scrap piece by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const scrapPiece = await ScrapPiece.findById(req.params.id);
    
    if (!scrapPiece) {
      return res.status(404).json({ message: 'Scrap piece not found' });
    }

    res.json(scrapPiece);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new scrap piece
router.post('/', authenticate, async (req, res) => {
  try {
    // Validate catalog material exists
    const catalogMaterial = getMaterialById(req.body.catalogMaterialId);
    if (!catalogMaterial) {
      return res.status(400).json({ message: 'Invalid catalog material ID' });
    }

    const scrapPiece = new ScrapPiece({
      catalogMaterialId: req.body.catalogMaterialId,
      length: req.body.length,
      width: req.body.width,
      thickness: req.body.thickness,
      materialGrade: req.body.materialGrade,
      location: req.body.location,
      addedBy: req.user.username,
      notes: req.body.notes
    });

    const newScrapPiece = await scrapPiece.save();

    // Log the activity
    await ActivityLog.create({
      userId: req.user._id,
      username: req.user.username,
      action: 'add',
      entityType: 'scrap',
      entityId: newScrapPiece._id,
      details: {
        length: newScrapPiece.length,
        width: newScrapPiece.width,
        thickness: newScrapPiece.thickness,
        materialGrade: newScrapPiece.materialGrade,
        location: newScrapPiece.location
      }
    });

    res.status(201).json(newScrapPiece);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update scrap piece
router.put('/:id', authenticate, async (req, res) => {
  try {
    const scrapPiece = await ScrapPiece.findById(req.params.id);
    
    if (!scrapPiece) {
      return res.status(404).json({ message: 'Scrap piece not found' });
    }

    // Update fields if provided
    if (req.body.length !== undefined) scrapPiece.length = req.body.length;
    if (req.body.width !== undefined) scrapPiece.width = req.body.width;
    if (req.body.thickness !== undefined) scrapPiece.thickness = req.body.thickness;
    if (req.body.materialGrade !== undefined) scrapPiece.materialGrade = req.body.materialGrade;
    if (req.body.location !== undefined) scrapPiece.location = req.body.location;
    if (req.body.notes !== undefined) scrapPiece.notes = req.body.notes;

    const updatedScrapPiece = await scrapPiece.save();
    res.json(updatedScrapPiece);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST reserve a scrap piece for a job
router.post('/:id/reserve', authenticate, async (req, res) => {
  try {
    const scrapPiece = await ScrapPiece.findById(req.params.id);

    if (!scrapPiece) {
      return res.status(404).json({ message: 'Scrap piece not found' });
    }

    if (scrapPiece.status !== 'available') {
      return res.status(400).json({
        message: `Cannot reserve - piece is already ${scrapPiece.status}`
      });
    }

    // Generate unique reservation ID
    let reservationId;
    let isUnique = false;
    while (!isUnique) {
      reservationId = generateReservationId();
      const existing = await ScrapPiece.findOne({ reservationId });
      if (!existing) isUnique = true;
    }

    const jobNumber = req.body.jobNumber || req.body.reservedFor;
    scrapPiece.status = 'reserved';
    scrapPiece.reservedFor = jobNumber;
    scrapPiece.reservationId = reservationId;
    scrapPiece.reservedDate = new Date();

    const updatedScrapPiece = await scrapPiece.save();

    // Log the activity
    await ActivityLog.create({
      userId: req.user._id,
      username: req.user.username,
      action: 'reserve',
      entityType: 'scrap',
      entityId: updatedScrapPiece._id,
      details: {
        jobNumber,
        reservationId,
        materialGrade: updatedScrapPiece.materialGrade,
        dimensions: `${updatedScrapPiece.length}x${updatedScrapPiece.width}x${updatedScrapPiece.thickness}`
      }
    });

    res.json(updatedScrapPiece);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST unreserve a scrap piece
router.post('/:id/unreserve', authenticate, async (req, res) => {
  try {
    const scrapPiece = await ScrapPiece.findById(req.params.id);

    if (!scrapPiece) {
      return res.status(404).json({ message: 'Scrap piece not found' });
    }

    if (scrapPiece.status !== 'reserved') {
      return res.status(400).json({
        message: 'Piece is not currently reserved'
      });
    }

    const previousReservation = {
      reservedFor: scrapPiece.reservedFor,
      reservationId: scrapPiece.reservationId,
      reservedDate: scrapPiece.reservedDate
    };

    scrapPiece.status = 'available';
    scrapPiece.reservedFor = null;
    scrapPiece.reservationId = null;
    scrapPiece.reservedDate = null;

    const updatedScrapPiece = await scrapPiece.save();

    // Log the activity
    await ActivityLog.create({
      userId: req.user._id,
      username: req.user.username,
      action: 'unreserve',
      entityType: 'scrap',
      entityId: updatedScrapPiece._id,
      details: {
        previousReservation,
        materialGrade: updatedScrapPiece.materialGrade,
        dimensions: `${updatedScrapPiece.length}x${updatedScrapPiece.width}x${updatedScrapPiece.thickness}`
      }
    });

    res.json(updatedScrapPiece);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE mark scrap piece as used (soft delete)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const scrapPiece = await ScrapPiece.findById(req.params.id);

    if (!scrapPiece) {
      return res.status(404).json({ message: 'Scrap piece not found' });
    }

    const previousStatus = scrapPiece.status;
    const reservationInfo = scrapPiece.status === 'reserved' ? {
      reservedFor: scrapPiece.reservedFor,
      reservationId: scrapPiece.reservationId
    } : null;

    // Mark as used instead of deleting
    scrapPiece.status = 'used';
    scrapPiece.usedDate = new Date();

    await scrapPiece.save();

    // Log the activity
    await ActivityLog.create({
      userId: req.user._id,
      username: req.user.username,
      action: 'mark_used',
      entityType: 'scrap',
      entityId: scrapPiece._id,
      details: {
        previousStatus,
        reservationInfo,
        materialGrade: scrapPiece.materialGrade,
        dimensions: `${scrapPiece.length}x${scrapPiece.width}x${scrapPiece.thickness}`
      }
    });

    res.json({ message: 'Scrap piece marked as used', data: scrapPiece });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET available material grades
router.get('/meta/grades', (req, res) => {
  res.json({
    grades: ['A36', 'A572-50', '304SS', '316SS', '5052-H32', '6061-T6']
  });
});

module.exports = router;
