import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Input({ label, type, className, value, setValue, icon, inputAttributes, togglePassword, isPasswordVisible, showPasswordToggle }) {
const handleInput = (e) => {
    setValue(e.target.value);
  };
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;


  return (
    <div className={`input-container ${className || ''}`}>
       <div className="label-icon-wrapper">
        {icon && <FontAwesomeIcon icon={icon} className="icon-default" />}
        {label && <label>{label}</label>}
      </div>
      <div className="input-wrapper">
        <input
          type={inputType}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
        {showPasswordToggle && type === 'password' && (
          <FontAwesomeIcon
            icon={isPasswordVisible ? faEye : faEyeSlash}
            onClick={togglePassword}
            className="toggle-password-icon"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
