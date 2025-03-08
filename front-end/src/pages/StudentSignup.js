import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("studentToken", "dummyToken");
    navigate("/student-login"); 
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Student Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/student-login" style={{ color: "red" }}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default StudentSignup;