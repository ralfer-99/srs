import React from "react";
import "../styles/styles.css";

const InputField = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input-field"
    />
  );
};

export default InputField;
