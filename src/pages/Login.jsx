import logo from "../assets/pixelpawns-logo.svg"
import { Link } from 'react-router-dom';
import "../index.css"
import { useEffect, useState } from "react"
import ErrorMessage from "../components/ErrorMessage"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(false);
    const [login, setLogin] = useState(false);

    function handleLogin() {
        if (!username || !password) {
            setAlert(true);
        }
        else {
            setLogin(true);
        }
    }

    useEffect(() => {
        if (alert === true) {
            setTimeout(() => {
                setAlert(false);
            }, 3000)
        }
    }, [alert])

    console.log("render");
    return (
        <div className="login-page">
            <div className="login-content">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="pixelpawns logo"/>
                </div>
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
                <div className="password-container">
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
                    (login === true) ? 
                    <Link to="/choosegame"> 
                    <button className="login-btn">Login</button>
                    </Link>
                    : <button className="login-btn" onClick={() => handleLogin()}>Login</button>
                }
                <p>DON'T HAVE AN ACCOUNT? SIGN UP</p>
                <Link to="/signup">
                    <button className="sign-up-btn">Sign Up</button>
                </Link>
                {
                    (alert === true) ? (
                        <ErrorMessage></ErrorMessage>
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    )
}
