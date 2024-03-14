import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';


// Placeholder components - replace these with your actual components later

function App() {
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
        });
    }
  }, []); 

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername}
        setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication
        setIsLoggedIn={setIsLoggedIn}
        setUserUsername={setUserUsername} />
      )}
    </div>
  );
}

export default App;