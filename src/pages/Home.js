import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <img src="bingo logo.png" alt="Bingo Game" />
      <Link to="/play">
        <button className="btn btn-primary">Start Game</button>
      </Link>
    </div>
  );
};

export default Home;
