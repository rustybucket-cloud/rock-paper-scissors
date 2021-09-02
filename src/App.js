import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {
  const [ step, setStep ] = useState('step 1')

  const stepOne = () => {
    setStep("step 1");
  }
  const stepTwo = () => {
    setStep("step 2");
  }

  const stepThree = () => {
    setStep("step 3");
  }

  return (
    <div className="App">
      <Header score="12"/>
      <Game step={step} stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}/>
      <Rules step={step}/>
    </div>
  );
}

export default App;