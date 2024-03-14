import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    const path = `/${pageName.toLowerCase()}`;
    navigate(path);
  };

  useEffect(() => {
    // Send a get request using axios to /api/activity.
    axios.get('/api/activity')
      .then(response => {
        // On Success: set the activities state to the response data.
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  const renderActivities = () => {
    return activities.slice(0, 10).map((activity, index) => (
      <Activity key={index} activity={activity} />
    ));
  };

  return (
    <nav className={`sidebar ${small ? 'small' : ''}`}>
      <ul className="navigation">
        <li onClick={() => setPage('Home')} className={selected === 'home' ? 'selected' : ''}>
          <i className="fas fa-home"></i>
          Home
        </li>
        <li onClick={() => setPage('Favorites')} className={selected === 'favorites' ? 'selected' : ''}>
          <i className="fas fa-heart"></i>
          Favorites
        </li>
        <li onClick={() => setPage('WatchLater')} className={selected === 'watchlater' ? 'selected' : ''}>
          <i className="fas fa-clock"></i>
          Watch Later
        </li>
      </ul>

      <ul className={`activities ${showActivities ? 'show' : ''}`}>
        {renderActivities()}
      </ul>
    </nav>
  );
};

export default SideBar;
