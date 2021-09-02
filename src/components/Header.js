import React, { useRef, useEffect } from "react";

function Header(props) {
    const score = useRef(0);

    useEffect( () => {
        setTimeout( () => {
            score.current = props.score;
        }, 1500);
    }, [props.score])

    return (
        <div className="top">
            <div className="title">
            <h2>ROCK</h2>
            <h2>PAPER</h2>
            <h2>SCISSORS</h2>
            </div>
            
            <div className="score">
            <p className="score-p">SCORE</p>
            <h2 id="score">{score.current}</h2>
            </div>
        </div>
    );
}

export default Header;