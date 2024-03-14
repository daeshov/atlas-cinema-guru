import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar />
        <div className="dashboard-content">
          <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />

          {/* Routes for different paths */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />

            {/* Redirect all other paths to /home */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>

          {/* Other content of the Dashboard */}
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
