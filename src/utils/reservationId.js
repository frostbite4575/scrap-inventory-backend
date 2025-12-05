/**
 * Generate a unique reservation ID
 * Format: RES-YYYYMMDD-XXXX
 * Example: RES-20250105-A3F9
 */
function generateReservationId() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  // Generate 4-character random alphanumeric code
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `RES-${year}${month}${day}-${code}`;
}

module.exports = {
  generateReservationId
};
