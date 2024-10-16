import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import cart from "./img/cart.png"
import star from "./img/star.png"
import loginIcon from "./img/login.png"
import InstaHubLogo from "./img/Insta Hub Logo.png"

function Home(){
    return(
        <div className="home-page">
            <div className="header">
                <Link to="/" className="logo">
                    <button className="logo_button"><img style={{width:150, height:44}} src={InstaHubLogo} alt="Insta Hub"/> </button>
                </Link>
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-bar"/>
                </div>
                <div className="header-buttons">
                    <button className="button"><img style={{width:26, height:26}} src={cart} alt="Cart"/> </button>
                    <button className="button"><img style={{width:26, height:26}} src={star} alt="Star"/> </button>

                    <Link to="/login">
                        <button className="button"><img style={{width:58, height:26}} src={loginIcon} alt="Login"/></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;