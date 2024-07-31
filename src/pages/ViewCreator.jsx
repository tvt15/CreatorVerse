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
    <div>
      {creator ? (
        <>
          <h1>{creator.name}</h1>
          <p>{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
          {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewCreator;
