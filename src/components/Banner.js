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

  const bannerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    display: 'inline-block',
    textAlign: 'center',
    margin: '20px auto',
    width: '60%',
  };

  return (
    <div style={bannerStyle}>
      <h3>{description}</h3>
      <p>Time left: {timeLeft} seconds</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Link</a>
    </div>
  );
};

export default Banner;
