import React, { useContext } from 'react'
import { AppContext } from "../App"
import GameOver from './GameOver';

function Key({ keyVal, bigKey, disabled }) {
    const { 
        onSelectLetter, 
        onDelete, 
        onEnter 
    } = useContext(AppContext);

    const selectLetter = () => {
        if(GameOver.gameOver) return;
        if(keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    };

    
    return (
        <div 
            className='key' 
            id={bigKey ? "big" : disabled && "disabled"} 
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    )
}

export default Key;
