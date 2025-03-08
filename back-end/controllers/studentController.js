const studentModel = require("../models/Student");
const jwtUtils = require("../utils/jwtUtils");

const registerStudent = (req, res) => {
  const studentData = req.body;
  studentModel.registerStudent(studentData, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error registering student", error: err });
    }
    res.status(201).json({ message: "Student registered successfully", id: result.insertId });
  });
};

const loginStudent = (req, res) => {
  const { email, password } = req.body;
  studentModel.loginStudent(email, (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const student = result[0];
    if (student.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwtUtils.generateToken({ id: student.id, role: "student" });
    res.status(200).json({ message: "Login successful", token });
  });
};

const getStudentProfile = (req, res) => {
  const studentId = req.user.id;
  studentModel.getStudentProfile(studentId, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(result[0]);
  });
};

const updateStudentProfile = (req, res) => {
  const studentId = req.user.id;
  const studentData = req.body;
  studentModel.updateStudentProfile(studentId, studentData, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error updating profile", error: err });
    }
    res.status(200).json({ message: "Profile updated successfully" });
  });
};

module.exports = {
  registerStudent,
  loginStudent,
  getStudentProfile,
  updateStudentProfile,
};