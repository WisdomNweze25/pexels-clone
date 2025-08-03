import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('photo');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('type', type);
    const token = localStorage.getItem('token');
    await axios.post(`${process.env.REACT_APP_API_URL}/media/upload`, formData, {
      headers: { Authorization: token }
    });
    alert('Uploaded!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Title' onChange={e => setTitle(e.target.value)} />
      <select onChange={e => setType(e.target.value)}>
        <option value='photo'>Photo</option>
        <option value='video'>Video</option>
        <option value='gif'>GIF</option>
      </select>
      <input type='file' onChange={e => setFile(e.target.files[0])} />
      <button type='submit'>Upload</button>
    </form>
  );
};

export default Upload;