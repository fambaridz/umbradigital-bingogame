import React, { Component } from "react";
import '../pages/Game.css';

class Caller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [],
      currentIndex: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    // Fetch the list of 38 generated numbers from your backend when the component mounts
    this.fetchAllCalls();

    // Set up an interval to check and update currentIndex every 2000 milliseconds (2 seconds)
    this.intervalId = setInterval(this.updateCurrentIndex, 2000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.intervalId);
  }

  fetchAllCalls = () => {
    // Fetch the 38 generated numbers from your backend API
    fetch('http://localhost:8000/caller.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); // Add this line for debugging

        // Update the state with all the calls at once
        this.setState({ calls: data });
      })
      .catch(error => console.error("Error fetching calls:", error));
  };

  updateCurrentIndex = () => {
    const { calls, currentIndex } = this.state;

    if (currentIndex < calls.length) {
      // Update the currentIndex in the state to display the next number
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      // Stop the interval if all numbers have been displayed
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { calls, currentIndex } = this.state;

    console.log("Rendered data:", calls); // Add this line for debugging
    console.log("Current Index:", currentIndex); // Add this line for debugging

    return (
      <div className="CallerContainer">
        <h1>Caller</h1>
        <div>
          {calls.slice(0, currentIndex).map((call, index) => (
            <div key={index}>{call.letter}{call.number}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Caller;
