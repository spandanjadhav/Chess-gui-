import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(false);
    const [signup, setSignup] = useState(false);

    function handleSignup() {
        if (!username || !password) {
            setAlert(true);
        }
        else {
            setSignup(true);
        }
    }

    useEffect(() => {
        if (alert === true) {
            setTimeout(() => {
                setAlert(false);
            }, 3000)
        }
    }, [alert])

    return (
        <div className="signup-page">
            <div className="signup-content">
                <Link to="/">
                    <button className="back-btn"/> {/* The arrow image is obtained in the CSS file and is used as the button here*/}
                </Link>
                <h1>CREATE AN ACCOUNT</h1>
                <div className="username-container">
                    <label htmlFor="userNameInput" className="username">USERNAME</label>
                    <input 
                        type="text" 
                        name="userNameInput" 
                        id="userNameInput" 
                        className="username-input"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                </div>
                <div className="password-container more-bottom-padding">
                    <label htmlFor="passwordInput" className="password">PASSWORD</label>
                    <input 
                        type="text" 
                        name="passwordInput" 
                        id="passwordInput" 
                        className="password-input"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                {
                    (signup === true) ? (
                        <Link to="/">
                            <button className="sign-up-btn">Sign Up</button>
                        </Link>
                    ) : <button className="sign-up-btn" onClick={() => handleSignup()}>Sign Up</button>
                }
                {
                    (alert === true) ? (
                        <ErrorMessage></ErrorMessage>
                    ) : <></>
                }
            </div>
        </div>
    )
}