import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {
  const [ step, setStep ] = useState('step 1')

  const stepTwo = () => {
    setStep("step 2");
  }

  return (
    <div className="App">
      <Header score="12"/>
      <Game step={step} stepTwo={stepTwo}/>
      <Rules step={step}/>
    </div>
  );
}

export default App;