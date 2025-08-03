import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/media`).then(res => setMedia(res.data));
  }, []);

  return (
    <div>
      <h1>Pexels Clone</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {media.map(item => (
          <div key={item._id}>
            {item.type === 'photo' && <img src={item.url} width='200' alt='' />}
            {item.type === 'video' && <video src={item.url} width='200' controls />}
            {item.type === 'gif' && <img src={item.url} width='200' alt='' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;