import SignUpButton from "../components/SignUpButton"
import LoginButton from "../components/LoginButton"
import logo from "../assets/pixelpawns-logo.svg"

import { Link } from 'react-router-dom';

import "../index.css"

export default function Login() {

    return (
        <div className="login-page">
            <div className="login-content">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="pixelpawns logo"/>
                </div>
                <div className="username-container">
                    <label htmlFor="userNameInput" className="username">USERNAME</label>
                    <input type="text" name="" id="userNameInput" className="username-input"/>
                </div>
                <div className="password-container">
                    <label htmlFor="passwordInput" className="password">PASSWORD</label>
                    <input type="text" name="" id="passwordInput" className="password-input"/>
                </div>
                {/* <LoginButton/>
                <p>DON'T HAVE AN ACCOUNT? SIGN UP</p>
                <SignUpButton/> */}
                <Link to="/choosegame"> {/* Link to the ChooseGame component */}
                    <LoginButton />
                </Link>
                <p>DON'T HAVE AN ACCOUNT? SIGN UP</p>
                <SignUpButton />

            </div>
        </div>
    )
}
