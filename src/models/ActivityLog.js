const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  action: {
    type: String,
    enum: ['add', 'reserve', 'unreserve', 'mark_used', 'delete'],
    required: true
  },
  entityType: {
    type: String,
    enum: ['scrap', 'saw_material', 'full_sheet'],
    required: true
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  details: {
    type: Object,
    // Store relevant details about the action
    // For add: material specs
    // For reserve: job/nest number, reservation ID
    // For unreserve: previous reservation details
    // For mark_used: final usage details
    // For delete: what was deleted
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
activityLogSchema.index({ userId: 1, timestamp: -1 });
activityLogSchema.index({ entityType: 1, entityId: 1 });
activityLogSchema.index({ timestamp: -1 });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
