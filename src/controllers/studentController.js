// src/controllers/studentController.js
const { getDB } = require('../config/db');
const Student = require('../models/student');
const { ObjectId } = require('mongodb');

exports.getStudents = async (req, res) => {
  try {
    const db = getDB(); // connect to the database
    // get all students from the students collection
    const students = await db.collection('students').find().toArray();
    res.json(students);
  } catch (err) {
    // handle errors
    console.error(err);
    // send a 500 response with a message
    res.status(500).send('Server Error');
  }
};

exports.createStudent = async (req, res) => {
  // get the student data from the request body
  const { nombre, apellido, curso, fecha_nacimiento, cedula, 
    edad, celular, direccion, acepta_terminos } = req.body;
  try {
    const db = getDB(); // connect to the database
    const student = new Student({ nombre, apellido, curso, 
      fecha_nacimiento, cedula, edad, celular, direccion, acepta_terminos });
    // insert the student into the students collection
    await db.collection('students').insertOne(student);
    res.status(201).json(student);
  } catch (err) {
    console.error(err);
    // send a 500 response with a message
    res.status(500).send('Server Error');
  }
};

exports.updateStudent = async (req, res) => {
  // get the student id from the request parameters
  const { id } = req.params;
  // get the student data from the request
  const { nombre, apellido, curso, fecha_nacimiento, cedula,
     edad, celular, direccion, acepta_terminos } = req.body;
  try {
    const db = getDB(); // connect to the database
    // update the student in the students collection
    const updatedStudent = await db.collection('students').findOneAndUpdate(
      { _id: new ObjectId(id) }, // find the student by id
      { $set: { nombre, apellido, curso, fecha_nacimiento, 
        cedula, edad, celular, direccion, acepta_terminos } },
      { returnOriginal: false }
    );
    res.json(updatedStudent.value);
  } catch (err) {
    console.error(err); // log the error
    res.status(500).send('Server Error');
  }
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params; // get the student id from the request parameters
  try {
    const db = getDB(); // connect to the database
    // delete the student from the students collection
    await db.collection('students').deleteOne({ _id: new ObjectId(id) });
    res.json({ msg: 'Student deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
