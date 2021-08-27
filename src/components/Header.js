function Header(props) {
    return (
        <div className="top">
            <div className="title">
            <h2>ROCK</h2>
            <h2>PAPER</h2>
            <h2>SCISSORS</h2>
            </div>
            
            <div className="score">
            <p className="score-p">SCORE</p>
            <h2 id="score">{props.score}</h2>
            </div>
        </div>
    );
}

export default Header;