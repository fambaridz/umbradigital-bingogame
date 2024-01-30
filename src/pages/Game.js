import React from 'react';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div className="Game">
      <Card />
      <Link to="/">
        <button className="btn btn-secondary mt-3">Go Back</button>
      </Link>
    </div>
  );
};

export default Game;
