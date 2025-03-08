import React from "react";
import backgroundImage from "../assets/register.jpg"; 
import "../styles/styles.css"; 

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        minHeight: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto", 
      }}
    >
      <div className="overlay">{children}</div>
    </div>
  );
};

export default Layout;
