import React from 'react';
import './Cart.css';
import Header from "./Header";
import { Link } from 'react-router-dom';

function Cart(){
    return(
        <div className="cart-page">
            <Header />
            <div className="cart-container">
                <h1>Shopping Cart</h1>
            </div>
        </div>
    )
}
export default Cart;