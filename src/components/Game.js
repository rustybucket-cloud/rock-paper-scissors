import React, { useState } from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import Option from './Option';

function Game() {
    return (
        <div className="game">
            <Option name="paper" img={paper}/>
            <Option name="rock" img={rock}/>
            <Option name="scissors" img={scissors}/>
        </div>
    );
}

export default Game;