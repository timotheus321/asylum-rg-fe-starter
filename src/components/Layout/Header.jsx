// HeaderContent.js
import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from '../AuthenticationButton'; // Ensure the path is correct
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: primary_accent_color,
        padding: '0 20px',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: '#E2F0F7', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', marginRight: '20px' }}>
          Graphs
        </Link>
        {isAuthenticated && (
          <Link to="/profile" style={{ color: '#E2F0F7', marginRight: '20px' }}>
            Profile
          </Link>
        )}
        <AuthenticationButton />
      </div>
    </div>
  );
}

export { HeaderContent };
