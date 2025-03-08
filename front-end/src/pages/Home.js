import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="login-box">
          <h2>Login As</h2>
          <div className="buttons">
            <Link to="/student-login" className="button student-btn">Student</Link>
            <Link to="/teacher-login" className="button teacher-btn">Teacher</Link>
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
