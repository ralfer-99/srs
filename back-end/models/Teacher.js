const db = require("../config/db");

const registerTeacher = (teacherData, callback) => {
  const { firstName, lastName, email, password } = teacherData;
  const query = "INSERT INTO teachers (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
  db.query(query, [firstName, lastName, email, password], callback);
};

const loginTeacher = (email, callback) => {
  const query = "SELECT * FROM teachers WHERE email = ?";
  db.query(query, [email], callback);
};

const getAllStudents = (callback) => {
  const query = "SELECT * FROM students";
  db.query(query, callback);
};

module.exports = {
  registerTeacher,
  loginTeacher,
  getAllStudents,
};