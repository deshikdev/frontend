// src/components/Header.js
import React from 'react';

const Header = ({ onLogout, onProfile, onCreatePost, onSettings }) => {
  return (
    <nav>
      <ul>
        <li onClick={onProfile}>Profile</li>
        <li onClick={onCreatePost}>Create Post</li>
        <li onClick={onSettings}>Settings</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Header;
