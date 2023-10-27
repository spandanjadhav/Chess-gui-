import SignUpButton from "./SignUpButton"
const Login = () => {

    return (
        <div>
            <div>
                <label>USERNAME</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" name="" id="" />
            </div>
            <button>Login</button>
            <p>DON'T HAVE AN ACCOUNT? <span>SIGN UP</span></p>
            <SignUpButton/>
        </div>
    )
}

export default Login