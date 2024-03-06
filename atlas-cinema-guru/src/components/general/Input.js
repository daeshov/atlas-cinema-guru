import React from 'react';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {icon && icon}
      <label>{label}</label>
      <input type={type} value={value} onChange={handleInput} {...inputAttributes} />
    </div>
  );
};

export default Input;
