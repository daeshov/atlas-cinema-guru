import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`select-input-container ${className}`}>
      <label>{label}</label>
      <select value={value} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
