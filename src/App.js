import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [bannerData, setBannerData] = useState(null);

  const fetchBannerData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/banner');
      console.log('Banner Data:', result.data); // Log the response
      setBannerData(result.data);
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  const navbarStyle = {
    backgroundColor: '#343a40',
    padding: '10px 0',
  };
  const navbarBrandStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
  };

  const navbarLogoStyle = {
    width: '30px',
    height: '24px',
    marginRight: '10px',
  };

  const navbarTitleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  return (
    <div>
     <nav style={navbarStyle}>
        <div>
          <a style={navbarBrandStyle} href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-VMhRzpkQoBeeIjjRw8mXPwMerTckBzW0FuJ_PJ02lvhVZ6ooI423PrmE5WFWYygN9E&usqp=CAU"
              alt="Logo"
              style={navbarLogoStyle}
            />
            <span style={navbarTitleStyle}>Take U Forward</span>
          </a>
        </div>
      </nav>

      <main >
        {bannerData ? (
          <Banner
            description={bannerData.description}
            timer={bannerData.timer}
            link={bannerData.link}
          />
        ) : (
          <p>No banner to display</p>
        )}

        <h1>Admin Dashboard</h1>

        <div>
          <AdminDashboard setBannerData={setBannerData} fetchBannerData={fetchBannerData} />
        </div>
      </main>
    </div>
  );
}

export default App;
