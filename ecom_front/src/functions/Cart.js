import React, { useState } from 'react';
import './Cart.css';
import Header from './Header.js';


const dummyCartItems = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 }
    }
];

function Cart() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [quantities, setQuantities] = useState({});

    const toggleSelectItem = (itemId) => {
        setSelectedItems((prevSelectedItems) => prevSelectedItems.includes(itemId) ? prevSelectedItems.filter((id) => id !== itemId)
            : [...prevSelectedItems, itemId]
        );
    };

    const handleQuantityChange = (itemId, quantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: quantity,
        }));
    };

    const calculateTotal = () => {
        let total = 0;
        selectedItems.forEach((itemId) => {
            const item = dummyCartItems.find((item) => item.id === itemId);
            const quantity = quantities[itemId] || 1;
            total += item.price * quantity;
        });
        return total.toFixed(2);
    };

    const handleClickPay = () =>{
        window.open('https://www.paypal.com/us/home');
    };

    return (
        <div className="cart">
            <Header />
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {dummyCartItems.map((item) => (
                    <div key={item.id} className="list-container">
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)}
                            onChange={() => toggleSelectItem(item.id)}
                            className="list-checkbox"
                        />
                        <div className="list-image">
                            <img src={item.image} alt={item.title} style={{ height: 200, width: 200, objectFit: "contain" }} />
                        </div>
                        <div className="list-details">
                            <p className="list-category">{item.category}</p>
                            <h4 className="list-title">{item.title}</h4>
                            <p className="list-description">{item.description}</p>
                            <p className="list-price">${item.price}</p>
                            <div className="quantity">
                                <label>Quantity: </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[item.id] || 1}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    className="list-quantity-input"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h3>Total Price: ${calculateTotal()}</h3>
                <button className="list-button" onClick={handleClickPay}>Pay</button>
            </div>
        </div>
    );
}

export default Cart;
