const mongoose = require('mongoose');

const sawMaterialSchema = new mongoose.Schema({
  // Reference to the material catalog entry
  catalogMaterialId: {
    type: String,
    required: [true, 'Catalog material ID is required'],
    trim: true
  },

  // Material type determines which dimension fields are used
  materialType: {
    type: String,
    required: [true, 'Material type is required'],
    enum: {
      values: ['angle', 'tube', 'square-stock', 'round-stock', 'dom', 'pipe', 'i-beam', 'channel', 'flat-bar'],
      message: '{VALUE} is not a valid material type'
    }
  },

  // Length of the piece (common to all types)
  length: {
    type: Number,
    required: [true, 'Length is required'],
    min: [0, 'Length must be positive']
  },

  // Dimension fields - used differently based on materialType
  // Angle: dim1 = leg1, dim2 = leg2, dim3 = wall thickness
  // Tube: dim1 = width, dim2 = height, dim3 = wall thickness
  // Square Stock: dim1 = width, dim2 = height (solid, no dim3)
  // Round Stock: dim1 = diameter (solid, no dim2/dim3)
  // DOM: dim1 = outside diameter, dim2 = wall thickness
  // Pipe: dim1 = inside diameter (standard pipe sizes)
  // I-Beam: dim1 = depth, dim2 = weight per foot
  // Channel: dim1 = depth, dim2 = weight per foot

  dim1: {
    type: Number,
    required: true,
    min: [0, 'Dimension must be positive']
  },
  dim2: {
    type: Number,
    min: [0, 'Dimension must be positive']
  },
  dim3: {
    type: Number,
    min: [0, 'Dimension must be positive']
  },

  // Optional dimension labels for display (e.g., "2x2x1/4" for angle)
  dimensionDisplay: {
    type: String,
    trim: true
  },

  materialGrade: {
    type: String,
    required: [true, 'Material grade is required'],
    // Common steel grades - can expand this list
    enum: {
      values: ['A36', 'A572-50', '304SS', '316SS', '5052-H32', '6061-T6', 'A500', 'A513'],
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

// Virtual property to get formatted dimensions based on material type
sawMaterialSchema.virtual('formattedDimensions').get(function() {
  if (this.dimensionDisplay) {
    return this.dimensionDisplay;
  }

  switch(this.materialType) {
    case 'angle':
      return `${this.dim1}x${this.dim2}x${this.dim3}`;
    case 'tube':
      return `${this.dim1}x${this.dim2}x${this.dim3}`;
    case 'square-stock':
      return `${this.dim1}x${this.dim2}`;
    case 'round-stock':
      return `${this.dim1}"`;
    case 'dom':
      return `${this.dim1}" OD x ${this.dim2} w`;
    case 'pipe':
      return `${this.dim1}" ID`;
    case 'i-beam':
      return `${this.dim1}@${this.dim2}`;
    case 'channel':
      return `${this.dim1}@${this.dim2}`;
    case 'flat-bar':
      return `${this.dim1}x${this.dim2}`;
    default:
      return 'N/A';
  }
});

// Indexes for faster searching
sawMaterialSchema.index({ catalogMaterialId: 1, status: 1 });
sawMaterialSchema.index({ materialType: 1, status: 1 });
sawMaterialSchema.index({ materialGrade: 1, status: 1 });
sawMaterialSchema.index({ status: 1 });
sawMaterialSchema.index({ location: 1 });

module.exports = mongoose.model('SawMaterial', sawMaterialSchema);
