import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = ({ setBannerData, fetchBannerData }) => {
  const [formData, setFormData] = useState({
    description: '',
    timer: 0,
    link: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('https://take-backend-2.onrender.com/api/banner/add', formData);
      console.log('Banner added:', result.data);
      setBannerData(result.data); // Update the state with the new banner data
      fetchBannerData(); // Optionally refetch the data to ensure consistency
    } catch (error) {
      console.error('Error adding banner:', error);
    }
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const formLabelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const formInputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const formButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label style={formLabelStyle}>Banner Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          style={formInputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={formLabelStyle}>Banner Timer (seconds):</label>
        <input
          type="number"
          name="timer"
          value={formData.timer}
          onChange={handleInputChange}
          style={formInputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={formLabelStyle}>Banner Link:</label>
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          style={formInputStyle}
        />
      </div>
      <button type="submit" style={formButtonStyle}>
        ADD Banner
      </button>
    </form>
  );
};

export default AdminDashboard;
