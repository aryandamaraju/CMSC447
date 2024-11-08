import React, {useState} from 'react';
import './Login.css';
import { Link, useNavigate} from 'react-router-dom';

function Login(){
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const Navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if(email=== "123@umbc.edu" && password === "123"){
            Navigate("/home");
        }else{
            alert("Invalid email or Password");
        }
    };

    return(
        <div className="login-page">
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Log In</h2>
                    <p>New to this site? <Link to="/signup">Sign Up</Link></p>

                    <div className="login-email">
                        <label>Email *</label>
                        <input 
                            type="email" 
                            placeholder="Enter your Email" 
                            required 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="login-password">
                        <label>Password *</label>
                        <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            required 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                    </div>

                    <button type="submit" className="login-button"> Login</button>

                </form>
            </div>
        </div>
    )
}
export default Login;