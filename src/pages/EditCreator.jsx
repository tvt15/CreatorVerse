import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import '../index.css';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setFormData(data);
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('creators')
      .update(formData)
      .eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this creator?');
    if (confirmation) {
      await supabase
        .from('creators')
        .delete()
        .eq('id', id);
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <h1>Edit Creator</h1>
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
        <div className="button-group">
          <button type="submit">Save Changes</button>
          <button type="button" className="delete-button" onClick={handleDelete}>Delete Creator</button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
