import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("studentToken", "dummyToken");
      navigate("/student-profile"); 
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Student Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/student-signup" style={{ color: "red" }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;