import React, { createContext, useContext, useState } from 'react';

// Create an authentication context
const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially logged out

  const login = () => {

    setIsLoggedIn(true);
  };

  const logout = () => {
    
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
