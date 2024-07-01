import React from "react";
import {Link} from "react-router-dom"
import './signup.css'

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Enter Email" />
            <input placeholder="Enter Username" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Repeat Password" />
            <button>Sign Up</button>
            <Link to="/Login"> <p className="link">Already have an Account? Log In!</p></Link>
        </div>
    )
}

export default Signup;