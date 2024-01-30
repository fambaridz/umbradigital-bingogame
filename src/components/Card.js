import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.rows = 5;
    this.cols = 5;
    this.headerSymbol = ["B", "I", "N", "G", "O"];
    this.bingoCard = this.createBingoCard(this.rows, this.cols);
  }

  createBingoCard(rows, cols) {
    return Array.from({ length: this.rows }, (_, rowIndex) =>
        Array.from({ length: this.cols }, (_, colIndex) => rowIndex * cols + colIndex + 1)
    );
  }

  render() {
    return (
      <div className="BingoCardContainer">
        <div className='Row'>
          {this.headerSymbol.map((symbol, index) => (
              <Header key={index} symbol={symbol} />
          ))}
        </div>
          {this.bingoCard.map((row, rowIndex) => (
            <div key={rowIndex} className="Row">
              {row.map(number => (
                <Button className='BingoCardButton' variant="dark" key={number}>{number.toString()}</Button>
              ))}
            </div>
          ))}
      </div>
    );
  }
}