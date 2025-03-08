const teacherModel = require("../models/Teacher");
const jwtUtils = require("../utils/jwtUtils");

const registerTeacher = (req, res) => {
  const teacherData = req.body;
  teacherModel.registerTeacher(teacherData, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error registering teacher", error: err });
    }
    res.status(201).json({ message: "Teacher registered successfully", id: result.insertId });
  });
};

const loginTeacher = (req, res) => {
  const { email, password } = req.body;
  teacherModel.loginTeacher(email, (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const teacher = result[0];
    if (teacher.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwtUtils.generateToken({ id: teacher.id, role: "teacher" });
    res.status(200).json({ message: "Login successful", token });
  });
};

const getAllStudents = (req, res) => {
  teacherModel.getAllStudents((err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching students", error: err });
    }
    res.status(200).json(result);
  });
};

module.exports = {
  registerTeacher,
  loginTeacher,
  getAllStudents,
};