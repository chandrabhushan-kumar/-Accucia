const express = require('express');
const router = express.Router();
const StudentController = require('../Controller/Student.js');

router.post('/post', StudentController.insert_student);
router.get('/get', StudentController.get_studentList);
router.delete('/delete/:studid', StudentController.delete_student);
router.get('/get/:stud_id', StudentController.get_oneStudent);




module.exports = router;