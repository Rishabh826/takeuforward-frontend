import React, { useState } from 'react';
import axios from 'axios';
import "../index.css";

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
    const result = await axios.post('http://localhost:5000/api/banner/add', formData);
    setBannerData(result.data); // Update the state with the new banner data
    fetchBannerData(); // Optionally refetch the data to ensure consistency
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label>
          Banner Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Banner Timer (seconds):
          <input
            type="number"
            name="timer"
            value={formData.timer}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Banner Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">ADD Banner</button>
    </form>
  );
};

export default AdminDashboard;
