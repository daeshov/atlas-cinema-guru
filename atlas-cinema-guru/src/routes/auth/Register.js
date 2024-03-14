import React from 'react';
import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { faUser, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setUsername, setPassword }) => {
  const handleRegister = () => {
    // Implement your registration logic here
  };

  return (
    <div className="register-input">
      <h2>Create a new account</h2>
      <form>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          setValue={setUsername}
          icon={faUser}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          setValue={setPassword}
          icon={faLock}
          showPasswordToggle={true}
        />
        <Button
          className='signup-bttn'
          type="button" onClick={handleRegister}
          icon={faPlus}
        />
      </form>
    </div>
  );
};

export default Register;
