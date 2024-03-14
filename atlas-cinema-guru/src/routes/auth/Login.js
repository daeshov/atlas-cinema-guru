import React, { useState } from 'react';
import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setUsername, setPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="login-input">
      <h2>Sign in with your account</h2>
      <form>
        <Input
          type="text"
          placeholder="Username"
          className="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={faUser}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle={true}
          isPasswordVisible={isPasswordVisible}
          togglePassword={togglePasswordVisibility}
          icon={faUser}
        />
        <Button
          className='signin-bttn' 
          type="submit"
          icon={faKey}
        />
      </form>
    </div>
  );
};

export default Login;
