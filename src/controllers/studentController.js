// src/controllers/studentController.js
const { getDB } = require('../config/db');
const Student = require('../models/student');
const { ObjectId } = require('mongodb');

exports.getStudents = async (req, res) => {
  try {
    const db = getDB();
    const students = await db.collection('students').find().toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.createStudent = async (req, res) => {
  const { nombre, apellido, curso, fecha_nacimiento, cedula, edad, celular, direccion, acepta_terminos } = req.body;
  try {
    const db = getDB();
    const student = new Student({ nombre, apellido, curso, fecha_nacimiento, cedula, edad, celular, direccion, acepta_terminos });
    await db.collection('students').insertOne(student);
    res.status(201).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, curso, fecha_nacimiento, cedula, edad, celular, direccion, acepta_terminos } = req.body;
  try {
    const db = getDB();
    const updatedStudent = await db.collection('students').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { nombre, apellido, curso, fecha_nacimiento, cedula, edad, celular, direccion, acepta_terminos } },
      { returnOriginal: false }
    );
    res.json(updatedStudent.value);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDB();
    await db.collection('students').deleteOne({ _id: new ObjectId(id) });
    res.json({ msg: 'Student deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
