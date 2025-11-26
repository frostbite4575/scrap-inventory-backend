const express = require('express');
const router = express.Router();
const ScrapPiece = require('../models/ScrapPiece');

// GET dashboard statistics
router.get('/stats', async (req, res) => {
  try {
    // Total pieces by status
    const totalAvailable = await ScrapPiece.countDocuments({ status: 'available' });
    const totalReserved = await ScrapPiece.countDocuments({ status: 'reserved' });
    const totalUsed = await ScrapPiece.countDocuments({ status: 'used' });

    // Pieces by material grade (available only)
    const byGrade = await ScrapPiece.aggregate([
      { $match: { status: 'available' } },
      { 
        $group: { 
          _id: '$materialGrade', 
          count: { $sum: 1 },
          totalArea: { $sum: { $multiply: ['$length', '$width'] } }
        } 
      },
      { $sort: { count: -1 } }
    ]);

    // Recent additions (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentAdditions = await ScrapPiece.countDocuments({
      dateAdded: { $gte: sevenDaysAgo }
    });

    // Recent usage (last 7 days)
    const recentUsage = await ScrapPiece.countDocuments({
      usedDate: { $gte: sevenDaysAgo }
    });

    // Most common thickness
    const byThickness = await ScrapPiece.aggregate([
      { $match: { status: 'available' } },
      { 
        $group: { 
          _id: '$thickness', 
          count: { $sum: 1 }
        } 
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      summary: {
        totalAvailable,
        totalReserved,
        totalUsed,
        total: totalAvailable + totalReserved + totalUsed
      },
      byGrade,
      byThickness,
      recentActivity: {
        addedLast7Days: recentAdditions,
        usedLast7Days: recentUsage
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET recent scrap pieces
router.get('/recent', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    
    const recentPieces = await ScrapPiece.find({ status: 'available' })
      .sort({ dateAdded: -1 })
      .limit(limit);

    res.json({
      count: recentPieces.length,
      data: recentPieces
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
