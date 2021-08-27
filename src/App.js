import './App.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Header score="12"/>
      <Game />
      <Rules />
    </div>
  );
}

export default App;