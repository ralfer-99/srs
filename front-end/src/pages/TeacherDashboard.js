import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/student/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((err) => console.error("Error deleting student:", err));
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📚 Teacher Dashboard</h2>

      <div className="dashboard-header">
        <button className="add-student-btn" onClick={() => navigate("/student-profile")}>
          Go to Student Profile
        </button>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3 className="student-name">{student.name}</h3>
            <p className="student-detail"><strong>Email:</strong> {student.email}</p>
            <p className="student-detail"><strong>Age:</strong> {student.age}</p>
            <div className="action-buttons">
              <button className="edit-btn">✏️ Update</button>
              <button className="delete-btn" onClick={() => handleDelete(student.id)}>🗑 Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;