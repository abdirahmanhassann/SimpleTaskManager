import React from 'react'

import { useState } from 'react';
import { useAuth } from '../authentication';
 // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login, logout } = useAuth();
  
  const handleLogin = () => {
    login(); // Call this function to log in the user
  };

  const handleLogout = () => {
    logout(); // Call this function to log out the user
  };



  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
