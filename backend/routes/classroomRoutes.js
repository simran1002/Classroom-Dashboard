const express = require('express');
const { createClassroom, assignTeacherToClassroom, assignStudentsToClassroom, createTimetable } = require('../controllers/classroomController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createClassroom);

router.route('/assign-teacher')
  .post(protect, assignTeacherToClassroom);

router.route('/assign-students')
  .post(protect, assignStudentsToClassroom);

router.route('/timetable')
  .post(protect, createTimetable);

module.exports = router;
