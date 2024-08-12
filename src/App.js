import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [bannerData, setBannerData] = useState(null);

  const fetchBannerData = async () => {
    try {
      const result = await axios.get('https://take-backend-2.onrender.com/api/banner');
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

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
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

  const mainContentStyle = {
    flex: '1',
    padding: '20px',
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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

  const formButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const welcomeSectionStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const overviewSectionStyle = {
    marginBottom: '40px',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
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

      <main style={mainContentStyle}>
        <section style={welcomeSectionStyle}>
          <h1 style={headingStyle}>Welcome to the Admin Dashboard</h1>
          <p style={paragraphStyle}>
            Manage banners efficiently with our easy-to-use dashboard. You can add, edit, or remove banners that are displayed to your users in real-time.
          </p>
        </section>

        <section style={overviewSectionStyle}>
          <h2 style={headingStyle}>Dashboard Overview</h2>
          <p style={paragraphStyle}>
            This dashboard allows you to create dynamic banners with a description, timer, and link. The banners will automatically appear on the main page based on your inputs.
          </p>
        </section>

        {bannerData && (
          <Banner
            description={bannerData.description}
            timer={bannerData.timer}
            link={bannerData.link}
          />
        )}

        <div style={{ textAlign: 'center' }}>
          <h2 style={headingStyle}>Manage Banners</h2>
        </div>
        <div style={formContainerStyle}>
          <AdminDashboard setBannerData={setBannerData} fetchBannerData={fetchBannerData} />
        </div>
      </main>
    </div>
  );
}

export default App;
