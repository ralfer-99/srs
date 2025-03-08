const db = require("../config/db");

const registerStudent = (studentData, callback) => {
  const { firstName, lastName, email, age, password } = studentData;
  const query = "INSERT INTO students (firstName, lastName, email, age, password) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [firstName, lastName, email, age, password], callback);
};

const loginStudent = (email, callback) => {
  const query = "SELECT * FROM students WHERE email = ?";
  db.query(query, [email], callback);
};

const getStudentProfile = (id, callback) => {
  const query = "SELECT * FROM students WHERE id = ?";
  db.query(query, [id], callback);
};

const updateStudentProfile = (id, studentData, callback) => {
  const { firstName, lastName, email, age } = studentData;
  const query = "UPDATE students SET firstName = ?, lastName = ?, email = ?, age = ? WHERE id = ?";
  db.query(query, [firstName, lastName, email, age, id], callback);
};

module.exports = {
  registerStudent,
  loginStudent,
  getStudentProfile,
  updateStudentProfile,
};