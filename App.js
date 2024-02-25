import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveTab('profile');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab(null);
  };

  const handleShowTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <header>
        <h2>Welcome to Social Media App</h2>
        {isLoggedIn && (
          <div className="header-options">
            <span onClick={() => handleShowTab('profile')}>Profile</span>
            <span onClick={() => handleShowTab('createpost')}>Create Post</span>
            <span onClick={() => handleLogout()}>Logout</span>
            <span onClick={() => handleShowTab('settings')}>Settings</span>
          </div>
        )}
      </header>

      <div className="main-content">
        {activeTab === null ? (
          <div className="landing-page">
            <h2>Welcome to Social Media App</h2>
            <p>Choose an option below:</p>
            <button onClick={() => handleShowTab('register')}>Register</button>
            <button onClick={() => handleShowTab('login')}>Login</button>
          </div>
        ) : (
          <div className="app-content">
            {isLoggedIn ? (
              <>
                {activeTab === 'profile' && <Profile onLogout={handleLogout} />}
                {activeTab === 'createpost' && <CreatePost />}
                {/* Add other components for different tabs as needed */}
              </>
            ) : (
              <div className="popup">
                <div className="popup-content">
                  {activeTab === 'register' && <Register onLogin={handleLogin} />}
                  {activeTab === 'login' && <Login onLogin={handleLogin} />}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;