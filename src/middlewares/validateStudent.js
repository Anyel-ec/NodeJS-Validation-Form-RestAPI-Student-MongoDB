const validateEcuadorianID = require('../utils/validateEcuadorianID');

function validateStudent(req, res, next) {
  const { nombre, apellido, curso, fecha_nacimiento, cedula, celular, acepta_terminos } = req.body;
  const errors = [];

  // Validar nombre
  if (typeof nombre !== 'string' || nombre.length < 3 || nombre.length > 100) {
    errors.push('El nombre debe tener entre 3 y 100 caracteres.');
  }

  // Validar apellido
  if (typeof apellido !== 'string' || apellido.length < 3 || apellido.length > 100) {
    errors.push('El apellido debe tener entre 3 y 100 caracteres.');
  }

  // Validar curso
  if (typeof curso !== 'string' || curso.length < 3 || curso.length > 100) {
    errors.push('El curso debe tener entre 3 y 100 caracteres.');
  }

  // Validar fecha de nacimiento
  const birthDate = new Date(fecha_nacimiento);
  if (isNaN(birthDate) || birthDate >= new Date()) {
    errors.push('La fecha de nacimiento debe ser válida y anterior a la fecha actual.');
  }

  // Validar cédula
  if (!validateEcuadorianID(cedula)) {
    errors.push('La cédula no es válida.');
  }

  // Validar celular
  if (!/^\d{10}$/.test(celular)) {
    errors.push('El celular debe tener 10 dígitos.');
  }

  // Validar aceptación de términos
  if (typeof acepta_terminos !== 'boolean') {
    errors.push('Debe aceptar los términos.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}

module.exports = validateStudent;
