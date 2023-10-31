import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from "../assets/back-button.svg"

const ChooseGame = () => {
    return (
        
        <div className="third-page">
        <Link to="/">
                    <button className="back-btn">
                        <img className="back-btn-img" src={BackButton} alt="back button"/>
                    </button>
                </Link>
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
                     <Link to="/playgame">
                    <input 
                        type="text" 
                        className="custom-input bottom-input" 
                        value="BEGIN GAME"
                        readOnly
                    />
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default ChooseGame;