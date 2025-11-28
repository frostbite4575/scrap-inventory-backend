const express = require('express');
const router = express.Router();
const SawMaterial = require('../models/SawMaterial');
const { authenticate } = require('../middleware/auth');

// For now, we'll skip authentication to make testing easier
// Later we can uncomment the authenticate middleware

// GET all saw materials (with filtering)
router.get('/', async (req, res) => {
  try {
    const {
      materialType,
      minLength,
      maxLength,
      materialGrade,
      status,
      location,
      dim1,
      dim2,
      dim3
    } = req.query;

    // Build filter object
    let filter = {};

    if (materialType) filter.materialType = materialType;
    if (minLength) filter.length = { ...filter.length, $gte: parseFloat(minLength) };
    if (maxLength) filter.length = { ...filter.length, $lte: parseFloat(maxLength) };
    if (materialGrade) filter.materialGrade = materialGrade;
    if (status) filter.status = status;
    if (location) filter.location = new RegExp(location, 'i'); // Case-insensitive search
    if (dim1) filter.dim1 = parseFloat(dim1);
    if (dim2) filter.dim2 = parseFloat(dim2);
    if (dim3) filter.dim3 = parseFloat(dim3);

    const sawMaterials = await SawMaterial.find(filter)
      .sort({ dateAdded: -1 }); // Newest first

    res.json({
      count: sawMaterials.length,
      data: sawMaterials
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single saw material by ID
router.get('/:id', async (req, res) => {
  try {
    const sawMaterial = await SawMaterial.findById(req.params.id);

    if (!sawMaterial) {
      return res.status(404).json({ message: 'Saw material not found' });
    }

    res.json(sawMaterial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new saw material
router.post('/', async (req, res) => {
  try {
    const sawMaterial = new SawMaterial({
      materialType: req.body.materialType,
      length: req.body.length,
      dim1: req.body.dim1,
      dim2: req.body.dim2,
      dim3: req.body.dim3,
      dimensionDisplay: req.body.dimensionDisplay,
      materialGrade: req.body.materialGrade,
      location: req.body.location,
      addedBy: req.body.addedBy || 'Unknown', // In production, get from req.user
      notes: req.body.notes
    });

    const newSawMaterial = await sawMaterial.save();
    res.status(201).json(newSawMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update saw material
router.put('/:id', async (req, res) => {
  try {
    const sawMaterial = await SawMaterial.findById(req.params.id);

    if (!sawMaterial) {
      return res.status(404).json({ message: 'Saw material not found' });
    }

    // Update fields if provided
    if (req.body.materialType !== undefined) sawMaterial.materialType = req.body.materialType;
    if (req.body.length !== undefined) sawMaterial.length = req.body.length;
    if (req.body.dim1 !== undefined) sawMaterial.dim1 = req.body.dim1;
    if (req.body.dim2 !== undefined) sawMaterial.dim2 = req.body.dim2;
    if (req.body.dim3 !== undefined) sawMaterial.dim3 = req.body.dim3;
    if (req.body.dimensionDisplay !== undefined) sawMaterial.dimensionDisplay = req.body.dimensionDisplay;
    if (req.body.materialGrade !== undefined) sawMaterial.materialGrade = req.body.materialGrade;
    if (req.body.location !== undefined) sawMaterial.location = req.body.location;
    if (req.body.notes !== undefined) sawMaterial.notes = req.body.notes;

    const updatedSawMaterial = await sawMaterial.save();
    res.json(updatedSawMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST reserve a saw material for a job
router.post('/:id/reserve', async (req, res) => {
  try {
    const sawMaterial = await SawMaterial.findById(req.params.id);

    if (!sawMaterial) {
      return res.status(404).json({ message: 'Saw material not found' });
    }

    if (sawMaterial.status !== 'available') {
      return res.status(400).json({
        message: `Cannot reserve - material is already ${sawMaterial.status}`
      });
    }

    sawMaterial.status = 'reserved';
    sawMaterial.reservedFor = req.body.jobNumber || req.body.reservedFor;
    sawMaterial.reservedDate = new Date();

    const updatedSawMaterial = await sawMaterial.save();
    res.json(updatedSawMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST unreserve a saw material
router.post('/:id/unreserve', async (req, res) => {
  try {
    const sawMaterial = await SawMaterial.findById(req.params.id);

    if (!sawMaterial) {
      return res.status(404).json({ message: 'Saw material not found' });
    }

    if (sawMaterial.status !== 'reserved') {
      return res.status(400).json({
        message: 'Material is not currently reserved'
      });
    }

    sawMaterial.status = 'available';
    sawMaterial.reservedFor = null;
    sawMaterial.reservedDate = null;

    const updatedSawMaterial = await sawMaterial.save();
    res.json(updatedSawMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE mark saw material as used (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const sawMaterial = await SawMaterial.findById(req.params.id);

    if (!sawMaterial) {
      return res.status(404).json({ message: 'Saw material not found' });
    }

    // Mark as used instead of deleting
    sawMaterial.status = 'used';
    sawMaterial.usedDate = new Date();

    await sawMaterial.save();
    res.json({ message: 'Saw material marked as used', data: sawMaterial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET available material types
router.get('/meta/types', (req, res) => {
  res.json({
    types: [
      { value: 'angle', label: 'Angle', dimensions: ['leg1', 'leg2', 'wall'] },
      { value: 'tube', label: 'Tube (Rectangular)', dimensions: ['width', 'height', 'wall'] },
      { value: 'square-stock', label: 'Square Stock', dimensions: ['width', 'height'] },
      { value: 'round-stock', label: 'Round Stock', dimensions: ['diameter'] },
      { value: 'dom', label: 'D.O.M.', dimensions: ['OD', 'wall'] },
      { value: 'pipe', label: 'Pipe', dimensions: ['ID'] },
      { value: 'i-beam', label: 'I-Beam', dimensions: ['depth', 'weight/ft'] },
      { value: 'channel', label: 'Channel', dimensions: ['depth', 'weight/ft'] }
    ]
  });
});

// GET available material grades
router.get('/meta/grades', (req, res) => {
  res.json({
    grades: ['A36', 'A572-50', '304SS', '316SS', '5052-H32', '6061-T6', 'A500', 'A513']
  });
});

module.exports = router;
