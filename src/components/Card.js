import React, { Component } from 'react';
import './Card.css';
import { Button } from 'react-bootstrap';
import Header from './Header';

class Card extends Component {
  constructor(props) {
    super(props);
    this.rows = 5;
    this.cols = 5;
    this.headerSymbol = ["B", "I", "N", "G", "O"];
    this.state = {
      bingoCard: this.createEmptyBingoCard(),
    };
  }

  componentDidMount() {
    this.fetchBingoCardData();
  }

  createEmptyBingoCard() {
    return Array.from({ length: this.rows }, () => Array.from({ length: this.cols }, () => 'FREE'));
  }

  fetchBingoCardData() {
    // Fetch data from your backend API
    fetch('http://localhost:8000/index.php', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Received data from backend:', data);
        this.setState({ bingoCard: data });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="BingoCardContainer">
        <div className='Row'>
          {this.headerSymbol.map((symbol, index) => (
            <Header key={index} symbol={symbol} />
          ))}
        </div>
        {this.state.bingoCard.map((row, rowIndex) => (
          <div key={rowIndex} className="Row">
            {this.headerSymbol.map((symbol, colIndex) => (
              <Button
                className='BingoCardButton'
                variant="dark"
                key={`${rowIndex}-${colIndex}`}
              >
                {row[symbol] === 'FREE' ? 'FREE' : (row[symbol] ? row[symbol].toString() : '')}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  }  
}

export default Card;
