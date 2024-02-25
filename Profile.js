// src/components/Profile.js
import React, { useState } from 'react';
import './Profile.css'; // Import the Profile.css file for styling
import emptyProfileImage from '../images/emptyprof.png';

const Profile = ({ onLogout, username }) => {
  const [bio, setBio] = useState('This is the pre-existing bio.'); // Set the initial bio
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(emptyProfileImage);

  const handleUpdateProfile = () => {
    // Implement profile update logic here
    console.log('Updating profile with new bio and image:', bio, profileImage);
    // Assume update is successful
    setIsEditing(false); // After updating, set isEditing to false
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-photo-container">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          {isEditing && (
            <label htmlFor="profileImage" className="edit-profile-icon">
              📷
            </label>
          )}
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <h2>My Profile</h2>
        <p>Username: {username}</p> {/* Display the username */}
      </div>

      <header>
        {isEditing && (
          <div className="edit-options">
            <span onClick={handleUpdateProfile}>Save</span>
            <span onClick={() => setIsEditing(false)}>Cancel</span>
          </div>
        )}
        {!isEditing && <span onClick={() => setIsEditing(true)}>Edit</span>}
        
      </header>

      <div className="bio-container">
        {isEditing ? (
          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
        ) : (
          <p className="bio-text">{bio}</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
