import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (_switch) {
        // Log in
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        });

        const { token } = response.data;
        localStorage.setItem('accessToken', token);
        setUserUsername(username);
        setIsLoggedIn(true);
      } else {
        // Register
        const response = await axios.post('/api/auth/register', {
          username,
          password,
        });

        const { token } = response.data;
        localStorage.setItem('accessToken', token);
        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
  <form className='form' onSubmit={handleSubmit}>
    <div className="authentication">
      <div className="auth-buttons">
      <button 
        type='button'
        label="signin"
        className={_switch ? "light-red" : "dark-red"}
        onClick={() => setSwitch(true)}>Sign In</button>
      <button 
        label="signup"
        className={_switch ? "dark-red" : "light-red"}
        onClick={() => setSwitch(false)}>Sign Up</button>
      </div>


      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </div>
  </form>
  );
};

export default Authentication;
