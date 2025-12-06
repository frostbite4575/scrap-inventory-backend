/**
 * Plate Material Catalog for Plasma Table
 *
 * This catalog contains all available plate materials in the shop.
 * Organized by thickness and grade.
 */

const plateCatalog = {
  'plate': [
    // 14 gauge (0.0747")
    {
      id: 'plate-14g-50',
      size: '14ga',
      description: '14 Gauge A572 Grade 50',
      thickness: 0.0747,
      grade: 'A572-50'
    },

    // 12 gauge (0.1046")
    {
      id: 'plate-12g-50',
      size: '12ga',
      description: '12 Gauge A572 Grade 50',
      thickness: 0.1046,
      grade: 'A572-50'
    },
    {
      id: 'plate-12g-65',
      size: '12ga',
      description: '12 Gauge A572 Grade 65',
      thickness: 0.1046,
      grade: 'A572-65'
    },

    // 11 gauge (0.1196")
    {
      id: 'plate-11g-50',
      size: '11ga',
      description: '11 Gauge A572 Grade 50',
      thickness: 0.1196,
      grade: 'A572-50'
    },

    // 10 gauge (0.1345")
    {
      id: 'plate-10g-50',
      size: '10ga',
      description: '10 Gauge A572 Grade 50',
      thickness: 0.1345,
      grade: 'A572-50'
    },
    {
      id: 'plate-10g-80',
      size: '10ga',
      description: '10 Gauge A572 Grade 80',
      thickness: 0.1345,
      grade: 'A572-80'
    },

    // 9 gauge (0.1495")
    {
      id: 'plate-9g-50',
      size: '9ga',
      description: '9 Gauge A572 Grade 50',
      thickness: 0.1495,
      grade: 'A572-50'
    },

    // 1/8" (0.125")
    {
      id: 'plate-1-8-ckpl',
      size: '1/8"',
      description: '1/8" Checkered Plate/Diamond Plate',
      thickness: 0.125,
      grade: 'A36',
      notes: 'CKPL - Checkered/Diamond Plate'
    },
    {
      id: 'plate-1-8-ar450',
      size: '1/8"',
      description: '1/8" AR450 Abrasion Resistant',
      thickness: 0.125,
      grade: 'AR450'
    },

    // 3/16" (0.1875")
    {
      id: 'plate-3-16-80',
      size: '3/16"',
      description: '3/16" A572 Grade 80',
      thickness: 0.1875,
      grade: 'A572-80'
    },
    {
      id: 'plate-3-16-ar400',
      size: '3/16"',
      description: '3/16" AR400 Abrasion Resistant',
      thickness: 0.1875,
      grade: 'AR400'
    },
    {
      id: 'plate-3-16-ar450',
      size: '3/16"',
      description: '3/16" AR450 Abrasion Resistant',
      thickness: 0.1875,
      grade: 'AR450'
    },

    // 1/4" (0.25")
    {
      id: 'plate-1-4-50',
      size: '1/4"',
      description: '1/4" A572 Grade 50',
      thickness: 0.25,
      grade: 'A572-50'
    },
    {
      id: 'plate-1-4-80',
      size: '1/4"',
      description: '1/4" A572 Grade 80',
      thickness: 0.25,
      grade: 'A572-80'
    },
    {
      id: 'plate-1-4-100',
      size: '1/4"',
      description: '1/4" A572 Grade 100',
      thickness: 0.25,
      grade: 'A572-100'
    },
    {
      id: 'plate-1-4-ar400',
      size: '1/4"',
      description: '1/4" AR400 Abrasion Resistant',
      thickness: 0.25,
      grade: 'AR400'
    },
    {
      id: 'plate-1-4-ar450',
      size: '1/4"',
      description: '1/4" AR450 Abrasion Resistant',
      thickness: 0.25,
      grade: 'AR450'
    },

    // 5/16" (0.3125")
    {
      id: 'plate-5-16-50',
      size: '5/16"',
      description: '5/16" A572 Grade 50',
      thickness: 0.3125,
      grade: 'A572-50'
    },
    {
      id: 'plate-5-16-80',
      size: '5/16"',
      description: '5/16" A572 Grade 80',
      thickness: 0.3125,
      grade: 'A572-80'
    },
    {
      id: 'plate-5-16-100',
      size: '5/16"',
      description: '5/16" A572 Grade 100',
      thickness: 0.3125,
      grade: 'A572-100'
    },
    {
      id: 'plate-5-16-ar450',
      size: '5/16"',
      description: '5/16" AR450 Abrasion Resistant',
      thickness: 0.3125,
      grade: 'AR450'
    },

    // 3/8" (0.375")
    {
      id: 'plate-3-8-50',
      size: '3/8"',
      description: '3/8" A572 Grade 50',
      thickness: 0.375,
      grade: 'A572-50'
    },
    {
      id: 'plate-3-8-100',
      size: '3/8"',
      description: '3/8" A572 Grade 100',
      thickness: 0.375,
      grade: 'A572-100'
    },

    // 1/2" (0.5")
    {
      id: 'plate-1-2-50',
      size: '1/2"',
      description: '1/2" A572 Grade 50',
      thickness: 0.5,
      grade: 'A572-50'
    },
    {
      id: 'plate-1-2-100qt',
      size: '1/2"',
      description: '1/2" Grade 100 Quenched & Tempered',
      thickness: 0.5,
      grade: 'QT-100'
    },

    // 5/8" (0.625")
    {
      id: 'plate-5-8-50',
      size: '5/8"',
      description: '5/8" A572 Grade 50',
      thickness: 0.625,
      grade: 'A572-50'
    },

    // 3/4" (0.75")
    {
      id: 'plate-3-4-50',
      size: '3/4"',
      description: '3/4" A572 Grade 50',
      thickness: 0.75,
      grade: 'A572-50'
    },
    {
      id: 'plate-3-4-100',
      size: '3/4"',
      description: '3/4" A572 Grade 100',
      thickness: 0.75,
      grade: 'A572-100'
    },
    {
      id: 'plate-3-4-expanded',
      size: '3/4"',
      description: '3/4" x 9\' Expanded Metal',
      thickness: 0.75,
      grade: 'Expanded',
      notes: 'Expanded Metal - 9\' width'
    },

    // 1" (1.0")
    {
      id: 'plate-1-50',
      size: '1"',
      description: '1" A572 Grade 50',
      thickness: 1.0,
      grade: 'A572-50'
    },
    {
      id: 'plate-1-100',
      size: '1"',
      description: '1" A572 Grade 100',
      thickness: 1.0,
      grade: 'A572-100'
    },

    // 4mm (0.1575")
    {
      id: 'plate-4mm-ar450',
      size: '4mm',
      description: '4mm AR450 Abrasion Resistant',
      thickness: 0.1575,
      grade: 'AR450',
      notes: 'Metric thickness'
    }
  ]
};

/**
 * Get all materials for a specific material type
 * @param {string} type - Material type (e.g., 'plate')
 * @returns {Array} Array of materials for the given type
 */
function getMaterialsByType(type) {
  return plateCatalog[type] || [];
}

/**
 * Get a specific material by its ID
 * @param {string} materialId - The material ID
 * @returns {Object|null} The material object or null if not found
 */
function getMaterialById(materialId) {
  for (const type in plateCatalog) {
    const material = plateCatalog[type].find(m => m.id === materialId);
    if (material) {
      return material;
    }
  }
  return null;
}

/**
 * Get all available material types
 * @returns {Array} Array of material type names
 */
function getMaterialTypes() {
  return Object.keys(plateCatalog);
}

module.exports = {
  plateCatalog,
  getMaterialsByType,
  getMaterialById,
  getMaterialTypes
};
