const express = require('express');

const { createStudent, getStudents,
        updateStudent, deleteStudent }
        = require('../controllers/StudentController');
// call the validateStudent middleware
const validateStudent = require('../middlewares/validateStudent');

// create a new router
const router = express.Router();

// define the routes to http methods
router.post('/', validateStudent, createStudent); // add  a new student
router.get('/', getStudents); // get all students
router.put('/:id', validateStudent, updateStudent); // update a student
router.delete('/:id', deleteStudent); // delete a student

module.exports = router;
