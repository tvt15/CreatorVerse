import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const ContentCreatorCard = ({ creator }) => {
  return (
    <div className="creator">
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="creator-image"/>}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
      <Link to={`/view/${creator.id}`}>View</Link>
    </div>
  );
};

export default ContentCreatorCard;
