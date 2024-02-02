// AuthenticatedRouteChecker.js

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticatedRouteChecker = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/profile');
    }
  }, [isAuthenticated, history]);

  return null; // This component does not render anything
};

export default AuthenticatedRouteChecker;
