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
      dataFetched: false,
      clickedButtons: [],
    };
  }

  componentDidMount() {
    if (!this.state.dataFetched) {
      this.fetchBingoCardData();
    }
  }

  createEmptyBingoCard() {
    return Array.from({ length: this.rows }, () => Array.from({ length: this.cols }, () => 'FREE'));
  }

  fetchBingoCardData() {
    fetch('http://localhost:8000/bingoCard.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Received data from backend:', data);

        if ('id' in data && 'numbers' in data) {
          this.setState({ bingoCard: data.numbers, dataFetched: true });
        } else {
          console.error('Invalid data format received from backend.');
        }
      })
      .catch(error => console.error('Error fetching data from backend:', error));
  }

  handleButtonClick(rowIndex, colIndex) {
    const clickedButtons = [...this.state.clickedButtons];
    const buttonKey = `${rowIndex}-${colIndex}`;

    if (clickedButtons.includes(buttonKey)) {
      // Button is already clicked, remove it from the clickedButtons array
      clickedButtons.splice(clickedButtons.indexOf(buttonKey), 1);
    } else {
      // Button is not clicked, add it to the clickedButtons array
      clickedButtons.push(buttonKey);
    }

    this.setState({ clickedButtons });
  }

  isButtonClicked(rowIndex, colIndex) {
    return this.state.clickedButtons.includes(`${rowIndex}-${colIndex}`);
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
                className={`BingoCardButton ${this.isButtonClicked(rowIndex, colIndex) ? 'clicked' : ''}`}
                variant={row[symbol] === 'FREE' ? 'success' : 'dark'}
                key={`${rowIndex}-${colIndex}`}
                onClick={() => this.handleButtonClick(rowIndex, colIndex)}
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
