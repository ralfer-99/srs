import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherSignup from "./pages/TeacherSignup";
import StudentProfile from "./pages/StudentProfile";
import TeacherDashboard from "./pages/TeacherDashboard";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-signup" element={<TeacherSignup />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;