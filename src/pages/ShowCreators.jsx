// src/pages/ShowCreators.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select();
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <>
    <div className = "content-creators">
      <h2>Content Creators</h2>
      </div>
      <div className="grid">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <article key={creator.id} className="creator-card">
              <div className="creator-image-container">
                <img src={creator.imageURL} alt={creator.name} className="creator-image" />
              </div>
              <div className="creator-info">
                <div>
                  <h3>{creator.name}</h3>
                  <p>{creator.description}</p>
                </div>
                <div className="creator-buttons">
                  <Link to={`/view/${creator.id}`} className="secondary">View</Link>
                  <Link to={`/edit/${creator.id}`} className="secondary">Edit</Link>
                </div>
              </div>
            </article>  
          ))
        ) : (
          <p>No creators found.</p>
        )}
      </div>
    </>
  );
};

export default ShowCreators;