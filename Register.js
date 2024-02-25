import React, { useState } from 'react';
import './Register.css';
import { registerUser } from '../api';

const Register = ({ onLogin }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const { username, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      await registerUser({ username, password });
      onLogin(username);
    } catch (error) {
      console.error('Error registering:', error);
      // Handle registration error (show message, etc.)
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userCredentials.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userCredentials.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={userCredentials.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
