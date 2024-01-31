import React, { useState } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartGame = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/play');
    }, 1400);
  };

  return (
    <div className="Home">
      <img src="bingo logo.png" alt="Bingo Game" />
      <Button className="startButton" variant="primary" onClick={handleStartGame} disabled={loading}>
        {loading ? 'Loading...' : 'Start Game'}
      </Button>
    </div>
  );
};

export default Home;
