import React, { useState } from "react";
import "../styles/styles.css";

const StudentProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    marks: {
      Mathematics: "",
      Physics: "",
      Chemistry: "",
      Biology: "",
      English: "",
      History: "",
      Geography: "",
      ComputerScience: "",
      Economics: "",
    },
  });

  const handleInputChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMarksChange = (subject, value) => {
    setStudentData({
      ...studentData,
      marks: {
        ...studentData.marks,
        [subject]: value,
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-card">
          <div className="profile-picture">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="profile-pic" />
            ) : (
              <div className="placeholder-pic">Upload Image</div>
            )}
            <input type="file" className="file-input" onChange={handleFileChange} />
          </div>

          <div className="profile-form">
            <input type="text" name="firstName" placeholder="First Name" value={studentData.firstName} onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={studentData.lastName} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={studentData.email} onChange={handleInputChange} />
            <input type="number" name="age" placeholder="Age" value={studentData.age} onChange={handleInputChange} />
          </div>

          <button className="update-btn">Update Profile</button>
        </div>
      </div>

      <div className="profile-right">
        <div className="marks-card">
          <h3 className="subtitle">Last Term Marks</h3>
          <div className="marks-grid">
            {Object.keys(studentData.marks).map((subject) => (
              <div key={subject} className="subject-mark">
                <label className="subject-name">{subject}</label>
                <input
                  type="number"
                  placeholder="Enter marks"
                  value={studentData.marks[subject]}
                  onChange={(e) => handleMarksChange(subject, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;