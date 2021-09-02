import React, { useState } from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import Option from './Option';

function Game(props) {
    const [ userChoice, setUserChoice ] = useState('');
    const [ choiceImg, setChoiceImg ] = useState(null);
    const [ house, setHouse ] = useState(null);
    const [ houseImg, setHouseImg ] = useState(null);

    const handleClick = ({currentTarget}) => {
        const choice = currentTarget.dataset.option;
        setUserChoice(choice);
        if (choice === 'rock') {
            setChoiceImg(rock);
        }
        else if (choice === 'scissors') {
            setChoiceImg(scissors);
        }
        else if (choice === 'paper') {
            setChoiceImg(paper);
        }
        props.stepTwo();
        houseChoice();
    }

    const houseChoice = () => {
        const choiceNumber = Math.floor(Math.random());
        if (choiceNumber === 0) {
            setHouse('rock');
            setHouseImg(rock);
        }
        else if (choiceNumber === 1) {
            setHouse('paper');
            setHouseImg(paper);
        }
        if (choiceNumber === 2) {
            setHouse('scissors');
            setHouseImg(scissors);
        }
    }

    if (props.step === 'step 1') {
        return (
            <div className="game">
                <Option step="one" onClick={handleClick} name="paper" img={paper}/>
                <Option step="one" onClick={handleClick} name="rock" img={rock}/>
                <Option step="one" onClick={handleClick} name="scissors" img={scissors}/>
            </div>
        );
    }
    if (props.step === 'step 2') {
        return (
            <div className="choices">
                <div className="step2">
                    <p>You Picked</p>
                    <Option step="two" name={userChoice} img={choiceImg}/>
                </div>
                <div className="step2 house">
                    <p>The House Picked</p>
                    <div className="dark-circle"></div>
                    <Option step="two" name={house} img={houseImg}/>
                </div>
            </div>
        );
    }
}

export default Game;