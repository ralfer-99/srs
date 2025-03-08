import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("teacherToken", "dummyToken");
      navigate("/teacher-dashboard"); 
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Teacher Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/teacher-signup" style={{ color: "red" }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default TeacherLogin;