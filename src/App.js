import './App.css';
import Button from './components/Button';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <h1>Bingo Game</h1>
      <div className="BingoCardContainer">
        <div className="Row">
          <Header symbol="B"/>
          <Header symbol="I"/>
          <Header symbol="N"/>
          <Header symbol="G"/>
          <Header symbol="O"/>
        </div>
        <div className="Row">
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
        </div>
        <div className="Row">
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
        </div>
        <div className="Row">
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
        </div>
        <div className="Row">
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
        </div>
        <div className="Row">
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
          <Button symbol="1"/>
        </div>
      </div>
    </div>
  );
}

export default App;