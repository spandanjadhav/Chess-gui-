import React from 'react';
import { Link } from 'react-router-dom';

const ChooseGame = () => {
    return (
        <div className="third-page">
            <input 
                type="text" 
                className="custom-input main-input" 
                value="CHOOSE WHO YOU WANT TO PLAY"
                readOnly
            />
            <div className="content-container">
                <div className="image-container">
                    <img src="/images/chessImage.jpg" alt="Chess" className="chess-image" />
                    <img src="/images/chessImage.jpg" alt="Chess" className="chess-image" />
                </div>
                <div className="input-container">
                    <input 
                        type="text" 
                        className="custom-input" 
                        value="PLAY AGAINST COMPUTER"
                        readOnly
                    />
                    <input 
                        type="text" 
                        className="custom-input" 
                        value="PASS AND PLAY"
                        readOnly
                    />
                    <input 
                        type="text" 
                        className="custom-input bottom-input" 
                        value="BEGIN GAME"
                        readOnly
                    />
                </div>
            </div>
            <Link to="/fourth">
                <button className="begin-game-btn">BEGIN GAME</button>
            </Link>
        </div>
    );
};

export default ChooseGame;