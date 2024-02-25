import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';  // Import axios for making HTTP requests

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const { username, password } = credentials;

    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in both username and password.');
      return;
    }

    try {
      // Make a request to your backend login endpoint
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      
      console.log('Login successful:', response.data);
      
      // Assume login is successful, call the onLogin callback
      onLogin(username);
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error (show message, etc.)
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
