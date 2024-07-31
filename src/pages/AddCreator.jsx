import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('creators')
      .insert([formData]);
    navigate('/');
  };

  return (
    <div>
      <h1>Add New Creator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          URL:
          <input type="url" name="url" value={formData.url} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Image URL (optional):
          <input type="url" name="imageURL" value={formData.imageURL} onChange={handleChange} />
        </label>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;
