import React from "react";
import "../styles/styles.css";

const Button = ({ text, onClick, type = "button", className = "button" }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
