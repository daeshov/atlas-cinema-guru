import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
  return (
    <li className="activity-item">
      <p>{activity}</p>
      {/* Add other elements as needed based on design */}
    </li>
  );
};

export default Activity;
