// src/models/student.js
class Student {
  constructor({ nombre, apellido, curso, fecha_nacimiento, cedula, edad, celular, direccion, acepta_terminos }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
    this.fecha_nacimiento = fecha_nacimiento;
    this.cedula = cedula;
    this.edad = edad;
    this.celular = celular;
    this.direccion = direccion;
    this.acepta_terminos = acepta_terminos;
  }
}

module.exports = Student;
