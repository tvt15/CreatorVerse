import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  return (
    <div className="view-creator-container">
      {creator ? (
        <div className="creator-profile">
          <div className="creator-header">
            {creator.imageURL && (
              <img src={creator.imageURL} alt={creator.name} className="creator-image" />
            )}
            <h1 className="creator-name">{creator.name}</h1>
          </div>
          <div className="creator-content">
            <p className="creator-description">{creator.description}</p>
            <a href={creator.url} target="_blank" rel="noopener noreferrer" className="creator-link">
              Visit Creator's Page
            </a>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default ViewCreator;