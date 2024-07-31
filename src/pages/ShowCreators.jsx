import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import ContentCreatorCard from '../components/ContentCreatorCards';
import { Link } from 'react-router-dom';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*');
      setCreators(data);
    };

    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Content Creators</h1>
      <div className="creator-list">
        {creators.map(creator => (
          <ContentCreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
      <Link to="/add">Add New Creator</Link>
    </div>
  );
};

export default ShowCreators;
