import React, { useState, useEffect } from 'react';

const Banner = ({ description, timer, link }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  if (timeLeft <= 0) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card bg-dark text-white" style={{ width: '40vw', height: '40vh' }}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzugyPJKNLr6Kp8qnvehHFOHG_mGKvkzqJg&s" 
          className="card-img" 
          alt="Banner" 
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <div className="card-img-overlay">
          <a href={link} className="card-title" style={{ textDecoration: 'none', color: '#fff' }}>
            Card Link
          </a>
          <p className="card-text">{description}</p>
          <p className="card-text">Time Left: {timeLeft}s</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
