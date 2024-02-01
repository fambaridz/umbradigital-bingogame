import React from 'react';
import Card from '../components/Card';
import Caller from '../components/Caller';
import './Game.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div className="Game">
      <div className="CardCallerRow">
        <Card />
        <Caller />
      </div>
      <div className="ButtonContainer">
        <Link to="/">
          <Button className="returnButton" variant="secondary">Return</Button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
