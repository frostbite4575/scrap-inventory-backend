/**
 * Location Catalog
 *
 * Hierarchical structure for material storage locations:
 * - Area (Plasma, Saw)
 *   - Section (Plasma 1, Plasma 2, Trailer 1)
 *     - Bin (Y-1, Y-2, B-1, B-2, etc.)
 */

const locationCatalog = {
  plasma: {
    name: 'Plasma',
    sections: {
      'plasma-1': {
        name: 'Plasma 1',
        bins: ['Y-1', 'Y-2', 'Y-3', 'Y-4', 'B-1', 'B-2', 'B-3', 'B-4']
      },
      'plasma-2': {
        name: 'Plasma 2',
        bins: ['B-1', 'B-2', 'B-3', 'B-4', 'B-5', 'B-6']
      }
    }
  },
  saw: {
    name: 'Saw',
    sections: {
      'trailer-1': {
        name: 'Trailer 1',
        bins: ['Trailer 1']
      }
    }
  }
};

/**
 * Get all areas
 * @returns {Array} Array of area objects with id and name
 */
function getAreas() {
  return Object.keys(locationCatalog).map(key => ({
    id: key,
    name: locationCatalog[key].name
  }));
}

/**
 * Get sections for a specific area
 * @param {string} areaId - The area ID (e.g., 'plasma')
 * @returns {Array} Array of section objects with id and name
 */
function getSections(areaId) {
  const area = locationCatalog[areaId];
  if (!area || !area.sections) return [];

  return Object.keys(area.sections).map(key => ({
    id: key,
    name: area.sections[key].name
  }));
}

/**
 * Get bins for a specific section
 * @param {string} areaId - The area ID
 * @param {string} sectionId - The section ID
 * @returns {Array} Array of bin names
 */
function getBins(areaId, sectionId) {
  const area = locationCatalog[areaId];
  if (!area || !area.sections) return [];

  const section = area.sections[sectionId];
  if (!section || !section.bins) return [];

  return section.bins;
}

/**
 * Build full location string
 * @param {string} areaId - The area ID
 * @param {string} sectionId - The section ID
 * @param {string} bin - The bin name
 * @returns {string} Full location string (e.g., "Plasma > Plasma 1 > Y-1")
 */
function buildLocationString(areaId, sectionId, bin) {
  const area = locationCatalog[areaId];
  if (!area) return '';

  const section = area.sections[sectionId];
  if (!section) return area.name;

  return `${area.name} > ${section.name} > ${bin}`;
}

/**
 * Validate location
 * @param {string} areaId - The area ID
 * @param {string} sectionId - The section ID
 * @param {string} bin - The bin name
 * @returns {boolean} True if valid location
 */
function validateLocation(areaId, sectionId, bin) {
  const bins = getBins(areaId, sectionId);
  return bins.includes(bin);
}

module.exports = {
  locationCatalog,
  getAreas,
  getSections,
  getBins,
  buildLocationString,
  validateLocation
};
