import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import './Header.css';
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className="header">
            <Link to="/" className="header__link">
                <img className="header__logo" alt="logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className = "header__searchIcon" />
            </div>

            <div className="header__nav">

                {/* 1st Link for Line 2 */}
                <Link to = "/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, User</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd Link for Line 2 */}
                <Link to = "/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link for Line 2 */}
                <Link to = "/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">You</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

            </div>

            {/* Shopping Basket Icon link to the Checkout page. */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>

                    {/* Shows the number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount">
                        2
                        {/* SMH */}
                    </span>
                </div>
            </Link>

        </nav>
    )
}

export default Header;
