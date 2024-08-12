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
      const result = await axios.post('https://take-backend.onrender.com/api/banner/add', formData);
      setBannerData(result.data); // Update the state with the new banner data
      fetchBannerData(); // Optionally refetch the data to ensure consistency
    } catch (error) {
      console.error('Error adding banner:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '600px', width: '100%' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Banner Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Banner Timer (seconds):
          <input
            type="number"
            name="timer"
            value={formData.timer}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Banner Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>ADD Banner</button>
    </form>
  );
};

export default AdminDashboard;
