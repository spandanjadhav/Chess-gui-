import SignUpButton from "../components/SignUpButton"
import BackButton from "../assets/back-button.svg"
import { Link } from 'react-router-dom';

export default function SignUp() {

    return (
        <div className="signup-page">
            <div className="signup-content">
                <Link to="/">
                    <button className="back-btn">
                        <img className="back-btn-img" src={BackButton} alt="back button"/>
                    </button>
                </Link>
                <h1>CREATE AN ACCOUNT</h1>
                <div className="username-container">
                    <label htmlFor="userNameInput" className="username">USERNAME</label>
                    <input type="text" name="" id="userNameInput" className="username-input"/>
                </div>
                <div className="password-container more-bottom-padding">
                    <label htmlFor="passwordInput" className="password">PASSWORD</label>
                    <input type="text" name="" id="passwordInput" className="password-input"/>
                </div>
                <SignUpButton/>
            </div>
        </div>
    )
}