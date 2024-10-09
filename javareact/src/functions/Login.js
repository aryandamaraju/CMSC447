import React from 'react';
import './Login.css';

function Login(){
    return(
        <div className="login-page">
            <div className="login-container">
                <from className="login-form">
                    <h2>Log In</h2>
                    <p>New to this site? <a href = "/signup"> Sign Up </a></p>

                    <div className="form-group">
                        <label>Email *</label>
                        <input type="email" placeholder="Enter your Email" required  />
                    </div>

                    <dic className="password">
                        <label>Password *</label>
                        <input type="password" placeholder="Enter your Password" required />
                    </dic>

                </from>
            </div>
        </div>
    )
}
export default Login;