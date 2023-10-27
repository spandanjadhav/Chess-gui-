import "../index.css"
import { Link } from 'react-router-dom';
import React from 'react';

export default function SignUpButton() {
    return (
        <>
            <Link to="/signup">
                <button className="sign-up-btn">Sign Up</button>
            </Link>
        </>
    )
}