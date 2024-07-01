import React from "react";
import {Link} from "react-router-dom"
import './login.css'

const Login = () => {
    return (
        <div className="login-container">
            <h2>Log In</h2>
            <input placeholder="Enter Email or Username" />
            <input type="password" placeholder="Enter Password" />
            <button>Log In</button>
            <button>Log In With Facebook</button>
            <Link to="/Signup"> <p className="link">Dont have an Account? Create a New One!</p></Link>
        </div>
    )
}

export default Login;