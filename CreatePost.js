// src/components/CreatePost.js
import React, { useState } from 'react';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleCreatePost = () => {
    // Implement logic to send content and image to the backend
    console.log('Creating post with content:', content);
    console.log('Uploading image:', image);

    // Reset content and image after creating the post
    setContent('');
    setImage(null);
  };

  return (
    <div>
      <h2>Create Post</h2>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange}></textarea>
      </div>
      <div>
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
      </div>
      {image && (
        <div>
          <p>Selected Image Preview:</p>
          <img src={URL.createObjectURL(image)} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
