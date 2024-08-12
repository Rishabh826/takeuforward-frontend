import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [bannerData, setBannerData] = useState(null);

  const fetchBannerData = async () => {
    try {
      const result = await axios.get('https://take-backend.onrender.com/api/banner');
      setBannerData(result.data);
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  return (
    <div>
      <nav style={{ backgroundColor: '#343a40', padding: '10px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }} href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-VMhRzpkQoBeeIjjRw8mXPwMerTckBzW0FuJ_PJ02lvhVZ6ooI423PrmE5WFWYygN9E&usqp=CAU"
              alt="Logo"
              style={{ width: '30px', height: '24px', marginRight: '10px' }}
            />
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Take U Forward</span>
          </a>
        </div>
      </nav>

      <main style={{ flex: '1', padding: '20px' }}>
        {bannerData && (
          <Banner
            description={bannerData.description}
            timer={bannerData.timer}
            link={bannerData.link}
          />
        )}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <AdminDashboard setBannerData={setBannerData} fetchBannerData={fetchBannerData} />
        </div>
      </main>
    </div>
  );
}

export default App;
