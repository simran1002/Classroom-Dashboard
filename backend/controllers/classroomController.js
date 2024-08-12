const Classroom = require('../models/Classroom');
const User = require('../models/User');

// Principal Only
const createClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;

  const classroom = await Classroom.create({ name, startTime, endTime, days });
  res.status(201).json(classroom);
};

// Principal Only
const assignTeacherToClassroom = async (req, res) => {
  const { classroomId, teacherId } = req.body;

  const classroom = await Classroom.findById(classroomId);
  const teacher = await User.findById(teacherId);

  if (classroom && teacher && teacher.role === 'teacher') {
    classroom.teacher = teacher._id;
    await classroom.save();
    res.json(classroom);
  } else {
    res.status(404).json({ message: 'Classroom or Teacher not found' });
  }
};

// Principal or Teacher
const assignStudentsToClassroom = async (req, res) => {
  const { classroomId, studentIds } = req.body;

  const classroom = await Classroom.findById(classroomId);

  if (classroom) {
    const students = await User.find({ _id: { $in: studentIds }, role: 'student' });
    classroom.students.push(...students.map(student => student._id));
    await classroom.save();
    res.json(classroom);
  } else {
    res.status(404).json({ message: 'Classroom not found' });
  }
};

// Teacher Only
const createTimetable = async (req, res) => {
  const { classroomId, timetable } = req.body;

  const classroom = await Classroom.findById(classroomId);

  if (classroom) {
    timetable.forEach(period => {
      if (period.startTime >= classroom.startTime && period.endTime <= classroom.endTime) {
        classroom.timetable.push(period);
      } else {
        res.status(400).json({ message: 'Period time outside of classroom hours' });
      }
    });
    await classroom.save();
    res.json(classroom);
  } else {
    res.status(404).json({ message: 'Classroom not found' });
  }
};

module.exports = { createClassroom, assignTeacherToClassroom, assignStudentsToClassroom, createTimetable };
