import React from 'react';

const PlayGame = () => {
    return (
        <div className="fourth-page">
            <input 
                type="text" 
                className="pink-input" 
                value="SEE YOUR HISTORY"
                readOnly
            />
            <input 
                type="text" 
                className="pink-input" 
                value="REVIEW CURRENT GAME"
                readOnly
            />
            <input 
                type="text" 
                className="pink-input" 
                value="REVIEW PAST GAMES"
                readOnly
            />
        </div>
    );
};

export default PlayGame;


