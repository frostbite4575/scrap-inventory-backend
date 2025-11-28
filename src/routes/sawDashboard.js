const express = require('express');
const router = express.Router();
const SawMaterial = require('../models/SawMaterial');

// GET dashboard statistics for saw materials
router.get('/stats', async (req, res) => {
  try {
    // Get summary counts by status
    const summary = await SawMaterial.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Transform to easier format
    const summaryObj = {
      totalAvailable: 0,
      totalReserved: 0,
      totalUsed: 0,
      total: 0
    };

    summary.forEach(item => {
      summaryObj.total += item.count;
      if (item._id === 'available') summaryObj.totalAvailable = item.count;
      if (item._id === 'reserved') summaryObj.totalReserved = item.count;
      if (item._id === 'used') summaryObj.totalUsed = item.count;
    });

    // Get counts by material type
    const byType = await SawMaterial.aggregate([
      {
        $match: { status: { $in: ['available', 'reserved'] } }
      },
      {
        $group: {
          _id: '$materialType',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    // Get counts by material grade
    const byGrade = await SawMaterial.aggregate([
      {
        $match: { status: { $in: ['available', 'reserved'] } }
      },
      {
        $group: {
          _id: '$materialGrade',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    // Get recent activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const addedLast7Days = await SawMaterial.countDocuments({
      dateAdded: { $gte: sevenDaysAgo }
    });

    const usedLast7Days = await SawMaterial.countDocuments({
      usedDate: { $gte: sevenDaysAgo }
    });

    res.json({
      summary: summaryObj,
      byType,
      byGrade,
      recentActivity: {
        addedLast7Days,
        usedLast7Days
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
