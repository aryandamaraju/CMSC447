import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import cart from "./img/cart.png"
import star from "./img/star.png"
import logo from "./img/Insta Hub Logo.png"
import loginIcon from "./img/login.png"

function Header(){
    return(
        <div className="header-bar">
            <Link to="/home">
                <div> <img style={{width:120, height:50}} src={logo} alt="Logo"/></div>
            </Link>

            <div className="search-container">
                <input type="text" placeholder="Search" className="search-bar"/>
            </div>
            <div className="header-buttons">
                <Link to="/cart">
                    <button className="button"><img style={{width:26, height:26}} src={cart} alt="Cart"/> </button>
                </Link>
                <button className="button"><img style={{width:26, height:26}} src={star} alt="Star"/> </button>

                <Link to="/login">
                    <button className="button"><img style={{width:68, height:26}} src={loginIcon} alt="Login"/></button>
                </Link>
            </div>
        </div>
    )
}
export default Header;