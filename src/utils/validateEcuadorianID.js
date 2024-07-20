// src/utils/validateEcuadorianID.js
function validateEcuadorianID(id) {
    if (id.length !== 10) return false;
    const digits = id.split('').map(Number);
    const province = digits[0] * 10 + digits[1];
    if (province < 1 || province > 24) return false;
    if (digits[2] > 6) return false;
  
    const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const sum = digits.slice(0, 9).reduce((acc, digit, idx) => {
      let result = digit * coefficients[idx];
      if (result > 9) result -= 9;
      return acc + result;
    }, 0);
    const verifier = sum % 10 === 0 ? 0 : 10 - (sum % 10);
    return verifier === digits[9];
  }
  
  module.exports = validateEcuadorianID;