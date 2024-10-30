import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup(){
    const[userType, setUserType] = useState('customer');
    
    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('User signed up as: ${userType}');
      //to database  
    };

    return(
    <div className="signup-page">
        <div className ="signup-container">
            <div className='signup-form'>
            <h2>Sign Up</h2>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
            
            <div className="signup-email">
                <label>Email *</label>
                <input type="email" placeholder="Enter your Email" required  />
            </div>

            <div className="signup-password">
                <label>Password *</label>
                <input type="email" placeholder="Enter your Password" required  />
            </div>

            <div className = "customer">
                <label>Sign up as: </label>
                <select value={userType} onChange={handleUserTypeChange} required className='customer-selection'>
                    <option value="Customer">Customer</option>
                    <option value="Vendor">Vendor</option>
                </select>
            </div>

            <Link to="/home">
                <button className="signup-button"> Sign Up</button>
            </Link>
            </div>
        </div>
    </div>
    );
}
export default Signup;