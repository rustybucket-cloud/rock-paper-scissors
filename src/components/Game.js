import React, { useState, useEffect } from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import Option from './Option';

function Game(props) {
    const [ userChoice, setUserChoice ] = useState('');
    const [ choiceImg, setChoiceImg ] = useState(null);
    const [ house, setHouse ] = useState(null);
    const [ houseImg, setHouseImg ] = useState(null);
    const [ didWin, setDidWin ] = useState('');

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

    //changes to step three and displays if user won or lost
    useEffect( () => {
        if (userChoice !== '') {
            setTimeout(props.stepThree, 2000);
            result();
        }
    }, [userChoice])

    const result = () => {
        if (((userChoice === 'rock') && (house ==='scissors')) || ((userChoice === 'paper' && house === 'rock')) || ((userChoice === 'scissors' && house === 'paper'))) {
            setDidWin('YOU WON');
            props.setScore(props.score + 1);
        }
        else if ((userChoice === 'rock' && house === 'paper') || (userChoice === 'paper' && house === 'scissors') || (userChoice === 'scissors' && house === 'rock')) {
            setDidWin('YOU LOST');
        }
        else {
            setDidWin('DRAW');
        }
    }

    const houseChoice = () => {
        const choiceNumber = Math.floor(Math.random() * 3);
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
        return house;
    }

    const resetGame = () => {
        props.stepOne();
        setUserChoice('');
    }

    if (props.step === 'step 1') { //user choice screen
        return (
            <div className="game">
                <Option step="one" onClick={handleClick} name="paper" img={paper}/>
                <Option step="one" onClick={handleClick} name="rock" img={rock}/>
                <Option step="one" onClick={handleClick} name="scissors" img={scissors}/>
            </div>
        );
    }
    else if (props.step === 'step 2') { //user choice and house choice screen
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
    else if (props.step === 'step 3') { //results screen
        return (
            <div className="choices final">
                <div className="step2 user">
                    <p>You Picked</p>
                    <Option step="two" name={userChoice} img={choiceImg}/>
                    <div style={didWin === 'YOU WON' ? { animation: 'fadein 3s' } : { visibility: 'hidden' } } className="user-win">
                        <div className="circle1">
                            <div className="circle2"></div>
                        </div>
                    </div>
                </div>
                <div className="result">
                    <h2>{didWin}</h2>
                    <button type="button" onClick={resetGame}>PLAY AGAIN</button>
                </div>
                <div className="step2 house3">
                    <p>The House Picked</p>
                    <div className="dark-circle"></div>
                    <Option step="two" name={house} img={houseImg}/>
                    <div style={didWin === 'YOU LOST' ? { animation: 'fadein 3s' } : { visibility: 'hidden' } } className="house-win">
                        <div className="circle1">
                            <div className="circle2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;