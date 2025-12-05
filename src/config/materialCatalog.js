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
      size: '3/8x3/8',
      description: 'Square Stock 3/8" x 3/8"',
      width: 0.375,
      height: 0.375,
      grade: 'A36'
    },
    {
      id: 'sq-2',
      size: '3/4x3/4',
      description: 'Square Stock 3/4" x 3/4"',
      width: 0.75,
      height: 0.75,
      grade: 'A36'
    }
  ],

  // Round stock available in shop
  'round-stock': [
    {
      id: 'round-1',
      size: '1/4"',
      description: 'Round Stock 1/4" diameter',
      diameter: 0.25,
      grade: 'A36'
    },
    {
      id: 'round-2',
      size: '3/8"',
      description: 'Round Stock 3/8" diameter',
      diameter: 0.375,
      grade: 'A36'
    },
    {
      id: 'round-3',
      size: '1/2"',
      description: 'Round Stock 1/2" diameter',
      diameter: 0.5,
      grade: 'A36'
    },
    {
      id: 'round-4',
      size: '5/8"',
      description: 'Round Stock 5/8" diameter',
      diameter: 0.625,
      grade: 'A36'
    },
    {
      id: 'round-5',
      size: '3/4"',
      description: 'Round Stock 3/4" diameter',
      diameter: 0.75,
      grade: 'A36'
    },
    {
      id: 'round-6',
      size: '7/8"',
      description: 'Round Stock 7/8" diameter',
      diameter: 0.875,
      grade: 'A36'
    },
    {
      id: 'round-7',
      size: '1"',
      description: 'Round Stock 1" diameter',
      diameter: 1,
      grade: 'A36'
    },
    {
      id: 'round-8',
      size: '1-3/16"',
      description: 'Round Stock 1-3/16" diameter',
      diameter: 1.1875,
      grade: 'A36'
    },
    {
      id: 'round-9',
      size: '1-1/4"',
      description: 'Round Stock 1-1/4" diameter',
      diameter: 1.25,
      grade: 'A36'
    },
    {
      id: 'round-10',
      size: '1-7/16"',
      description: 'Round Stock 1-7/16" diameter',
      diameter: 1.4375,
      grade: 'A36'
    },
    {
      id: 'round-11',
      size: '1-1/2"',
      description: 'Round Stock 1-1/2" diameter',
      diameter: 1.5,
      grade: 'A36'
    },
    {
      id: 'round-12',
      size: '1-13/16"',
      description: 'Round Stock 1-13/16" diameter',
      diameter: 1.8125,
      grade: 'A36'
    },
    {
      id: 'round-13',
      size: '2"',
      description: 'Round Stock 2" diameter',
      diameter: 2,
      grade: 'A36'
    }
  ],

  // DOM tubing available in shop
  'dom': [
    {
      id: 'dom-1',
      size: '1-1/4" OD x 0.095" wall',
      description: 'DOM 1-1/4" OD x 0.095" wall',
      outerDiameter: 1.25,
      wallThickness: 0.095,
      grade: 'A513'
    },
    {
      id: 'dom-2',
      size: '1-1/2" OD x 0.25" wall',
      description: 'DOM 1-1/2" OD x 0.25" wall',
      outerDiameter: 1.5,
      wallThickness: 0.25,
      grade: 'A513'
    },
    {
      id: 'dom-3',
      size: '1-3/4" OD x 0.083" wall',
      description: 'DOM 1-3/4" OD x 0.083" wall',
      outerDiameter: 1.75,
      wallThickness: 0.083,
      grade: 'A513'
    },
    {
      id: 'dom-4',
      size: '1-3/4" OD x 1-5/8" ID x 16ga wall',
      description: 'DOM 1-3/4" OD x 1-5/8" ID x 16ga wall',
      outerDiameter: 1.75,
      innerDiameter: 1.625,
      wallThickness: 0.065,
      grade: 'A513'
    },
    {
      id: 'dom-5',
      size: '1-3/4" OD x 0.25" wall',
      description: 'DOM 1-3/4" OD x 0.25" wall',
      outerDiameter: 1.75,
      wallThickness: 0.25,
      grade: 'A513'
    },
    {
      id: 'dom-6',
      size: '1-3/4" OD x 0.5" wall',
      description: 'DOM 1-3/4" OD x 0.5" wall',
      outerDiameter: 1.75,
      wallThickness: 0.5,
      grade: 'A513'
    },
    {
      id: 'dom-7',
      size: '1-7/8" OD x 1-1/8" ID x 3/8" wall',
      description: 'DOM 1-7/8" OD x 1-1/8" ID x 3/8" wall',
      outerDiameter: 1.875,
      innerDiameter: 1.125,
      wallThickness: 0.375,
      grade: 'A513'
    },
    {
      id: 'dom-8',
      size: '2" OD x 0.25" wall',
      description: 'DOM 2" OD x 0.25" wall',
      outerDiameter: 2,
      wallThickness: 0.25,
      grade: 'A513'
    },
    {
      id: 'dom-9',
      size: '2" OD x 1" ID x 1/2" wall',
      description: 'DOM 2" OD x 1" ID x 1/2" wall',
      outerDiameter: 2,
      innerDiameter: 1,
      wallThickness: 0.5,
      grade: 'A513'
    },
    {
      id: 'dom-10',
      size: '2-1/4" OD x 0.375" wall',
      description: 'DOM 2-1/4" OD x 0.375" wall',
      outerDiameter: 2.25,
      wallThickness: 0.375,
      grade: 'A513'
    },
    {
      id: 'dom-11',
      size: '2-1/2" OD x 0.5" wall',
      description: 'DOM 2-1/2" OD x 0.5" wall',
      outerDiameter: 2.5,
      wallThickness: 0.5,
      grade: 'A513'
    },
    {
      id: 'dom-12',
      size: '2-3/4" OD x 0.375" wall',
      description: 'DOM 2-3/4" OD x 0.375" wall',
      outerDiameter: 2.75,
      wallThickness: 0.375,
      grade: 'A513'
    },
    {
      id: 'dom-13',
      size: '3" OD x 0.5" wall',
      description: 'DOM 3" OD x 0.5" wall',
      outerDiameter: 3,
      wallThickness: 0.5,
      grade: 'A513'
    },
    {
      id: 'dom-14',
      size: '5" OD x 2" ID x 1-1/2" wall',
      description: 'DOM 5" OD x 2" ID x 1-1/2" wall',
      outerDiameter: 5,
      innerDiameter: 2,
      wallThickness: 1.5,
      grade: 'A513'
    }
  ],

  // Pipe available in shop
  'pipe': [
    {
      id: 'pipe-1',
      size: '3/4" IPS',
      description: 'Pipe 3/4" IPS',
      nominalSize: 0.75,
      grade: 'A53'
    },
    {
      id: 'pipe-2',
      size: '1" IPS',
      description: 'Pipe 1" IPS',
      nominalSize: 1,
      grade: 'A53'
    },
    {
      id: 'pipe-3',
      size: '1-1/4" IPS',
      description: 'Pipe 1-1/4" IPS',
      nominalSize: 1.25,
      grade: 'A53'
    },
    {
      id: 'pipe-4',
      size: '3" IPS',
      description: 'Pipe 3" IPS',
      nominalSize: 3,
      grade: 'A53'
    },
    {
      id: 'pipe-5',
      size: '3-1/2" IPS',
      description: 'Pipe 3-1/2" IPS',
      nominalSize: 3.5,
      grade: 'A53'
    },
    {
      id: 'pipe-6',
      size: '5" IPS',
      description: 'Pipe 5" IPS',
      nominalSize: 5,
      grade: 'A53'
    }
  ],

  // Channels available in shop
  'channel': [
    {
      id: 'channel-1',
      size: '3@4.10',
      description: 'Channel 3" @ 4.10 lbs/ft',
      depth: 3,
      weightPerFoot: 4.10,
      grade: 'A36'
    },
    {
      id: 'channel-2',
      size: '4@5.40',
      description: 'Channel 4" @ 5.40 lbs/ft',
      depth: 4,
      weightPerFoot: 5.40,
      grade: 'A36'
    },
    {
      id: 'channel-3',
      size: '8@11.5',
      description: 'Channel 8" @ 11.5 lbs/ft',
      depth: 8,
      weightPerFoot: 11.5,
      grade: 'A36'
    },
    {
      id: 'channel-4',
      size: '8@20',
      description: 'Channel 8" @ 20 lbs/ft',
      depth: 8,
      weightPerFoot: 20,
      grade: 'A36'
    },
    {
      id: 'channel-5',
      size: '1x1/2x1/8',
      description: 'Channel 1" x 1/2" x 1/8"',
      depth: 1,
      flange: 0.5,
      web: 0.125,
      grade: 'A36'
    },
    {
      id: 'channel-6',
      size: '1-1/4',
      description: 'Channel 1-1/4"',
      depth: 1.25,
      grade: 'A36'
    },
    {
      id: 'channel-7',
      size: '1-3/8x1-3/8',
      description: 'Channel 1-3/8" x 1-3/8"',
      depth: 1.375,
      flange: 1.375,
      grade: 'A36'
    },
    {
      id: 'channel-8',
      size: '1-3/4x1x3/4',
      description: 'Channel 1-3/4" x 1" x 3/4"',
      depth: 1.75,
      flange: 1,
      web: 0.75,
      grade: 'A36'
    },
    {
      id: 'channel-9',
      size: '2x1x1/8',
      description: 'Channel 2" x 1" x 1/8"',
      depth: 2,
      flange: 1,
      web: 0.125,
      grade: 'A36'
    }
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
