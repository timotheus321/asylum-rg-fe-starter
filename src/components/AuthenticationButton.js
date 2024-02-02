import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const buttonStyle = {
    backgroundColor: '#404C4A', // Main color
    color: '#E2F0F7', // Text color
    border: 'none',
  };

  return isAuthenticated ? (
    <button
      style={buttonStyle}
      onClick={() => {
        console.log('Logging out'); // Log when attempting to log out
        logout({ returnTo: window.location.origin });
      }}
    >
      Logout
    </button>
  ) : (
    <button
      style={buttonStyle}
      onClick={() => {
        console.log('Logging in'); // Log when attempting to log in
        loginWithRedirect();
      }}
    >
      Login
    </button>
  );
};

export default AuthenticationButton;
