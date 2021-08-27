import React, { useState } from 'react';
import rulesChart from "../images/rules-chart.png";

function Rules() {
    const [ rules, setRules ] = useState(false);

    function handleClick() {
        if (rules === false) {
            setRules(true);
        }
        else {
            setRules(false);
        }
    }

    if (rules === true) {
        return(
            <div>
                <div className="rules">
                    <div className="rules-top">
                        <h2>RULES</h2>
                        <div className="x"></div>
                    </div>
                    <img src={rulesChart} />
                </div>
                <div className="rules-background"></div>
                <button onClick={handleClick} id="rules">RULES</button>
            </div>
        );
    }
    else {
        return(
            <div>
                <button onClick={handleClick} id="rules">RULES</button>
            </div>
        );
    }
}

export default Rules;