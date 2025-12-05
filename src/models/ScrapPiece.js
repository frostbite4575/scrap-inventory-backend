const mongoose = require('mongoose');

const scrapPieceSchema = new mongoose.Schema({
  catalogMaterialId: {
    type: String,
    required: [true, 'Catalog material ID is required'],
    trim: true
  },
  length: {
    type: Number,
    required: [true, 'Length is required'],
    min: [0, 'Length must be positive']
  },
  width: {
    type: Number,
    required: [true, 'Width is required'],
    min: [0, 'Width must be positive']
  },
  thickness: {
    type: Number,
    required: [true, 'Thickness is required'],
    min: [0, 'Thickness must be positive']
  },
  materialGrade: {
    type: String,
    required: [true, 'Material grade is required'],
    enum: {
      values: ['A36', 'A572-50', 'A572-65', 'A572-80', 'A572-100', 'AR400', 'AR450', 'QT-100', 'Expanded', '304SS', '316SS', '5052-H32', '6061-T6'],
      message: '{VALUE} is not a valid material grade'
    }
  },
  location: { 
    type: String,
    trim: true
  },
  dateAdded: { 
    type: Date, 
    default: Date.now 
  },
  addedBy: { 
    type: String,
    required: true
  },
  notes: { 
    type: String,
    trim: true
  },
  status: { 
    type: String, 
    enum: ['available', 'reserved', 'used'],
    default: 'available'
  },
  reservedFor: {
    type: String,
    trim: true
  },
  reservationId: {
    type: String,
    trim: true,
    sparse: true,
    unique: true
  },
  reservedDate: {
    type: Date
  },
  usedDate: {
    type: Date
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual property for area calculation
scrapPieceSchema.virtual('area').get(function() {
  return this.length * this.width;
});

// Indexes for faster searching
scrapPieceSchema.index({ materialGrade: 1, status: 1 });
scrapPieceSchema.index({ thickness: 1 });
scrapPieceSchema.index({ status: 1 });
scrapPieceSchema.index({ reservationId: 1 });

module.exports = mongoose.model('ScrapPiece', scrapPieceSchema);