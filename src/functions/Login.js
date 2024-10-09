import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className="login-page">
            <div className="login-container">
                <from className="login-form">
                    <h2>Log In</h2>
                    <p>New to this site? <Link to="/signup">Sign Up</Link></p>

                    <div className="login-email">
                        <label>Email *</label>
                        <input type="email" placeholder="Enter your Email" required  />
                    </div>

                    <dic className="login-password">
                        <label>Password *</label>
                        <input type="password" placeholder="Enter your Password" required />
                    </dic>

                    <Link to="/home">
                        <button className="login-button"> Login</button>
                    </Link>

                </from>
            </div>
        </div>
    )
}
export default Login;