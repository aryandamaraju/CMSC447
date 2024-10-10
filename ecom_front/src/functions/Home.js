import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import cart from "./img/cart.png"
import star from "./img/star.png"
import loginIcon from "./img/login.png"

function Home(){
    return(
        <div className="home-page">
            <div className="header">
                <div className="logo">Insta Hub</div>
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-bar"/>
                </div>
                <div className="header-buttons">
                    <button className="button"><img style={{width:26, height:26}} src={cart} alt="Cart"/> </button>
                    <button className="button"><img style={{width:26, height:26}} src={star} alt="Star"/> </button>

                    <Link to="/login">
                        <button className="button"><img style={{width:68, height:26}} src={loginIcon} alt="Login"/></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;