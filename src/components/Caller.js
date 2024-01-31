import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Caller.css";

class Caller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [],
      currentIndex: 0,
      displayedNumbers: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchAllCalls();
    }, 10000);
  }

  fetchAllCalls = () => {
    fetch('http://localhost:8000/caller.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ calls: data });
      })
      .catch(error => console.error("Error fetching calls:", error));
  };

  handleNextNumber = () => {
    const { calls, currentIndex, displayedNumbers } = this.state;

    if (currentIndex < calls.length) {
      const nextCall = calls[currentIndex];

      if (!displayedNumbers.includes(`${nextCall.letter}${nextCall.number}`)) {
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          displayedNumbers: [...prevState.displayedNumbers, `${nextCall.letter}${nextCall.number}`],
        }));
      }
    }
  };

  render() {
    const { calls, currentIndex } = this.state;
    const remainingNumbers = calls.length - currentIndex;

    return (
      <div className="CallerContainer">
        <h2>Number Caller</h2>
        {currentIndex < calls.length && (
          <div className="numberContainer">
            <div>
              {calls[currentIndex].letter}{calls[currentIndex].number}
            </div>
            <h5>Numbers Remaining: {remainingNumbers}</h5>
            <Button onClick={this.handleNextNumber} variant="light">Next Number</Button>
          </div>
        )}
      </div>
    );
  }
}

export default Caller;
