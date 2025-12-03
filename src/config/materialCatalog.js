// Material Catalog - Defines all available materials in the shop
// This prevents data entry errors and standardizes material specifications

const materialCatalog = {
  // I-Beams available in shop
  'i-beam': [
    {
      id: 'i-beam-1',
      size: '4@3.20',
      description: 'I-Beam 4" @ 3.20 lbs/ft test',
      depth: 4,
      weightPerFoot: 3.20,
      grade: 'A36'
    },
    {
      id: 'i-beam-2',
      size: '16@26',
      description: 'I-Beam 16" @ 26 lbs/ft',
      depth: 16,
      weightPerFoot: 26,
      grade: 'A36'
    },
    {
      id: 'i-beam-3',
      size: '8@15.00',
      description: 'I-Beam 8" @ 15.00 lbs/ft',
      depth: 8,
      weightPerFoot: 15.00,
      grade: 'A36'
    },
    {
      id: 'i-beam-4',
      size: '8@21',
      description: 'I-Beam 8" @ 21 lbs/ft',
      depth: 8,
      weightPerFoot: 21,
      grade: 'A36'
    },
    {
      id: 'i-beam-5',
      size: '5.9"D x 3.94"W x 0.170"TH',
      description: 'I-Beam 5.9" depth x 3.94" width x 0.170" thickness',
      depth: 5.9,
      width: 3.94,
      thickness: 0.170,
      grade: 'A36'
    }
  ],

  // Angles available in shop
  'angle': [
    {
      id: 'angle-1',
      size: '1x1x1/8',
      description: 'Angle 1" x 1" x 1/8"',
      leg1: 1,
      leg2: 1,
      thickness: 0.125,
      grade: 'A36'
    },
    {
      id: 'angle-2',
      size: '1x1x1/4',
      description: 'Angle 1" x 1" x 1/4"',
      leg1: 1,
      leg2: 1,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'angle-3',
      size: '1-1/2x1-1/2x1/8',
      description: 'Angle 1-1/2" x 1-1/2" x 1/8"',
      leg1: 1.5,
      leg2: 1.5,
      thickness: 0.125,
      grade: 'A36'
    },
    {
      id: 'angle-4',
      size: '1-1/2x1-1/2x3/16',
      description: 'Angle 1-1/2" x 1-1/2" x 3/16"',
      leg1: 1.5,
      leg2: 1.5,
      thickness: 0.1875,
      grade: 'A36'
    },
    {
      id: 'angle-5',
      size: '1-1/2x1-1/2x1/4',
      description: 'Angle 1-1/2" x 1-1/2" x 1/4"',
      leg1: 1.5,
      leg2: 1.5,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'angle-6',
      size: '2x2x1/8',
      description: 'Angle 2" x 2" x 1/8"',
      leg1: 2,
      leg2: 2,
      thickness: 0.125,
      grade: 'A36'
    },
    {
      id: 'angle-7',
      size: '2x2x3/16',
      description: 'Angle 2" x 2" x 3/16"',
      leg1: 2,
      leg2: 2,
      thickness: 0.1875,
      grade: 'A36'
    },
    {
      id: 'angle-8',
      size: '2x2x1/4',
      description: 'Angle 2" x 2" x 1/4"',
      leg1: 2,
      leg2: 2,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'angle-9',
      size: '2x2x3/8',
      description: 'Angle 2" x 2" x 3/8"',
      leg1: 2,
      leg2: 2,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'angle-10',
      size: '2-1/2x2-1/2x3/16',
      description: 'Angle 2-1/2" x 2-1/2" x 3/16"',
      leg1: 2.5,
      leg2: 2.5,
      thickness: 0.1875,
      grade: 'A36'
    },
    {
      id: 'angle-11',
      size: '2-1/2x2-1/2x1/4',
      description: 'Angle 2-1/2" x 2-1/2" x 1/4"',
      leg1: 2.5,
      leg2: 2.5,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'angle-12',
      size: '3x3x1/4',
      description: 'Angle 3" x 3" x 1/4"',
      leg1: 3,
      leg2: 3,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'angle-13',
      size: '4x4x1/4',
      description: 'Angle 4" x 4" x 1/4"',
      leg1: 4,
      leg2: 4,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'angle-14',
      size: '3x2x3/16',
      description: 'Angle 3" x 2" x 3/16"',
      leg1: 3,
      leg2: 2,
      thickness: 0.1875,
      grade: 'A36'
    },
    {
      id: 'angle-15',
      size: '3x2x1/4',
      description: 'Angle 3" x 2" x 1/4"',
      leg1: 3,
      leg2: 2,
      thickness: 0.25,
      grade: 'A36'
    }
  ],

  // Flat bar available in shop
  'flat-bar': [
    {
      id: 'flat-1',
      size: '2x3/16',
      description: 'Flat Bar 2" x 3/16"',
      width: 2,
      thickness: 0.1875,
      grade: 'A36'
    },
    {
      id: 'flat-2',
      size: '2-1/2x3/8',
      description: 'Flat Bar 2-1/2" x 3/8"',
      width: 2.5,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'flat-3',
      size: '1-1/4x1/4',
      description: 'Flat Bar 1-1/4" x 1/4"',
      width: 1.25,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'flat-4',
      size: '1x1/4',
      description: 'Flat Bar 1" x 1/4"',
      width: 1,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'flat-5',
      size: '1-1/2x1/4',
      description: 'Flat Bar 1-1/2" x 1/4"',
      width: 1.5,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'flat-6',
      size: '2x1/4',
      description: 'Flat Bar 2" x 1/4"',
      width: 2,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'flat-7',
      size: '4x1/4',
      description: 'Flat Bar 4" x 1/4"',
      width: 4,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'flat-8',
      size: '6x1/4',
      description: 'Flat Bar 6" x 1/4"',
      width: 6,
      thickness: 0.25,
      grade: 'A36'
    },
    {
      id: 'flat-9',
      size: '8x3/8',
      description: 'Flat Bar 8" x 3/8"',
      width: 8,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'flat-10',
      size: '1-1/2x3/8',
      description: 'Flat Bar 1-1/2" x 3/8"',
      width: 1.5,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'flat-11',
      size: '3x3/8',
      description: 'Flat Bar 3" x 3/8"',
      width: 3,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'flat-12',
      size: '4x3/8',
      description: 'Flat Bar 4" x 3/8"',
      width: 4,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'flat-13',
      size: '5x3/8',
      description: 'Flat Bar 5" x 3/8"',
      width: 5,
      thickness: 0.375,
      grade: 'A36'
    },
    {
      id: 'flat-14',
      size: '4x1/2',
      description: 'Flat Bar 4" x 1/2"',
      width: 4,
      thickness: 0.5,
      grade: 'A36'
    },
    {
      id: 'flat-15',
      size: '5x1/2',
      description: 'Flat Bar 5" x 1/2"',
      width: 5,
      thickness: 0.5,
      grade: 'A36'
    },
    {
      id: 'flat-16',
      size: '2x1',
      description: 'Flat Bar 2" x 1"',
      width: 2,
      thickness: 1,
      grade: 'A36'
    },
    {
      id: 'flat-17',
      size: '4x1',
      description: 'Flat Bar 4" x 1"',
      width: 4,
      thickness: 1,
      grade: 'A36'
    }
  ],

  // Tubes available in shop (Rectangular Tubing)
  'tube': [
    {
      id: 'tube-1',
      size: '6x4x3/16',
      description: 'Tube 6" x 4" x 3/16" wall',
      width: 6,
      height: 4,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-2',
      size: '10x4x1/4',
      description: 'Tube 10" x 4" x 1/4" wall',
      width: 10,
      height: 4,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-3',
      size: '3x2x1/8',
      description: 'Tube 3" x 2" x 1/8" wall',
      width: 3,
      height: 2,
      wallThickness: 0.125,
      grade: 'A500'
    },
    {
      id: 'tube-4',
      size: '3x2x3/16',
      description: 'Tube 3" x 2" x 3/16" wall',
      width: 3,
      height: 2,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-5',
      size: '3-1/2x2-1/2x3/16',
      description: 'Tube 3-1/2" x 2-1/2" x 3/16" wall',
      width: 3.5,
      height: 2.5,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-6',
      size: '4x2x1/8',
      description: 'Tube 4" x 2" x 1/8" wall',
      width: 4,
      height: 2,
      wallThickness: 0.125,
      grade: 'A500'
    },
    {
      id: 'tube-7',
      size: '4x2x3/16',
      description: 'Tube 4" x 2" x 3/16" wall',
      width: 4,
      height: 2,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-8',
      size: '4x2x1/4',
      description: 'Tube 4" x 2" x 1/4" wall',
      width: 4,
      height: 2,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-9',
      size: '4x3x3/16',
      description: 'Tube 4" x 3" x 3/16" wall',
      width: 4,
      height: 3,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-10',
      size: '4x3x1/4',
      description: 'Tube 4" x 3" x 1/4" wall',
      width: 4,
      height: 3,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-11',
      size: '5x4x1/4',
      description: 'Tube 5" x 4" x 1/4" wall',
      width: 5,
      height: 4,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-12',
      size: '5x3x3/16',
      description: 'Tube 5" x 3" x 3/16" wall',
      width: 5,
      height: 3,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-13',
      size: '5x3x1/4',
      description: 'Tube 5" x 3" x 1/4" wall',
      width: 5,
      height: 3,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-14',
      size: '6x3x1/4',
      description: 'Tube 6" x 3" x 1/4" wall',
      width: 6,
      height: 3,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-15',
      size: '6x4x3/16',
      description: 'Tube 6" x 4" x 3/16" wall',
      width: 6,
      height: 4,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-16',
      size: '6x4x1/4',
      description: 'Tube 6" x 4" x 1/4" wall',
      width: 6,
      height: 4,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-17',
      size: '7x5x3/16',
      description: 'Tube 7" x 5" x 3/16" wall',
      width: 7,
      height: 5,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-18',
      size: '8x4x3/16',
      description: 'Tube 8" x 4" x 3/16" wall',
      width: 8,
      height: 4,
      wallThickness: 0.1875,
      grade: 'A500'
    },
    {
      id: 'tube-19',
      size: '8x3-1/2x0.191',
      description: 'Tube 8" x 3-1/2" x 0.191" wall',
      width: 8,
      height: 3.5,
      wallThickness: 0.191,
      grade: 'A500'
    },
    {
      id: 'tube-20',
      size: '8x4x1/4',
      description: 'Tube 8" x 4" x 1/4" wall',
      width: 8,
      height: 4,
      wallThickness: 0.25,
      grade: 'A500'
    },
    {
      id: 'tube-21',
      size: '10x4x5/16',
      description: 'Tube 10" x 4" x 5/16" wall',
      width: 10,
      height: 4,
      wallThickness: 0.3125,
      grade: 'A500'
    }
  ],

  // Square stock available in shop
  'square-stock': [
    {
      id: 'sq-1',
      size: '1x1',
      description: 'Square Stock 1" x 1"',
      width: 1,
      height: 1,
      grade: 'A36'
    },
    {
      id: 'sq-2',
      size: '2x2',
      description: 'Square Stock 2" x 2"',
      width: 2,
      height: 2,
      grade: 'A36'
    }
    // Add more square stock as needed
  ],

  // Round stock available in shop
  'round-stock': [
    {
      id: 'round-1',
      size: '1/2"',
      description: 'Round Stock 1/2" diameter',
      diameter: 0.5,
      grade: 'A36'
    },
    {
      id: 'round-2',
      size: '3/4"',
      description: 'Round Stock 3/4" diameter',
      diameter: 0.75,
      grade: 'A36'
    },
    {
      id: 'round-3',
      size: '1"',
      description: 'Round Stock 1" diameter',
      diameter: 1,
      grade: 'A36'
    }
    // Add more round stock as needed
  ],

  // DOM tubing available in shop
  'dom': [
    {
      id: 'dom-1',
      size: '1.5" OD x 0.120" wall',
      description: 'DOM 1.5" OD x 0.120" wall',
      outerDiameter: 1.5,
      wallThickness: 0.120,
      grade: 'A513'
    },
    {
      id: 'dom-2',
      size: '2" OD x 0.120" wall',
      description: 'DOM 2" OD x 0.120" wall',
      outerDiameter: 2,
      wallThickness: 0.120,
      grade: 'A513'
    }
    // Add more DOM as needed
  ],

  // Pipe available in shop
  'pipe': [
    {
      id: 'pipe-1',
      size: '1/2" Schedule 40',
      description: 'Pipe 1/2" Schedule 40',
      nominalSize: 0.5,
      schedule: 40,
      grade: 'A53'
    },
    {
      id: 'pipe-2',
      size: '3/4" Schedule 40',
      description: 'Pipe 3/4" Schedule 40',
      nominalSize: 0.75,
      schedule: 40,
      grade: 'A53'
    }
    // Add more pipe as needed
  ],

  // Channels available in shop
  'channel': [
    {
      id: 'channel-1',
      size: '6@8.2',
      description: 'Channel 6" @ 8.2 lbs/ft',
      depth: 6,
      weightPerFoot: 8.2,
      grade: 'A36'
    },
    {
      id: 'channel-2',
      size: '8@11.5',
      description: 'Channel 8" @ 11.5 lbs/ft',
      depth: 8,
      weightPerFoot: 11.5,
      grade: 'A36'
    }
    // Add more channels as needed
  ]
};

// Helper function to get all materials for a specific type
const getMaterialsByType = (type) => {
  return materialCatalog[type] || [];
};

// Helper function to get a specific material by ID
const getMaterialById = (materialId) => {
  for (const type in materialCatalog) {
    const material = materialCatalog[type].find(m => m.id === materialId);
    if (material) {
      return { ...material, type };
    }
  }
  return null;
};

// Get all material types
const getMaterialTypes = () => {
  return Object.keys(materialCatalog);
};

module.exports = {
  materialCatalog,
  getMaterialsByType,
  getMaterialById,
  getMaterialTypes
};
