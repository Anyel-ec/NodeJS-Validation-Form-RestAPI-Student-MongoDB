// src/routes/studentRoutes.js
const express = require('express');
const { createStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/StudentController');
const validateStudent = require('../middlewares/validateStudent');

const router = express.Router();

router.post('/', validateStudent, createStudent);
router.get('/', getStudents);
router.put('/:id', validateStudent, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
