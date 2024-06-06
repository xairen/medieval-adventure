import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Loading.css';

function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      navigate('/results', { state: { details: location.state.details } });
    }, 3000); // Simulate loading time
  }, [navigate, location.state.details]);

  return (
    <div className="loading">
      <div className="bonfire">
        <img src="../../assets/bonfire.gif" alt="Bonfire" />
      </div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
