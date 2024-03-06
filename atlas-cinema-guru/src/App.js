import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// Placeholder components - replace these with your actual components later
const Dashboard = ({ username }) => <div>Dashboard - Welcome, {username}!</div>;
const Authentication = () => <div>Authentication - User is not logged in</div>;

function App() {
  // State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  // useEffect to run on component mount
  useEffect(() => {
    // Get the value of accessToken item from localStorage
    const accessToken = localStorage.getItem('accessToken');

    // Check if accessToken exists
    if (accessToken) {
      // Send a post request to /api/auth/ with the authorization header set to Bearer <accessToken>
      axios({
        method: 'POST',
        url: 'localhost:8000/api/auth/',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
        .then(response => response.json())
        .then(data => {
          // onSuccess: set the isLoggedIn and the userUsername state
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch(error => {
          // Handle errors or set state accordingly
          console.error('Error during authentication:', error);
          setIsLoggedIn(false);
          setUserUsername('');
        });
    }
  }, []); 

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;