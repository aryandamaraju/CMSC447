import React from "react";
import "./List.css";

function List({ id, title, price, description, category, image,}) {

    const formatPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(price);


    return (
        <div className="list-container">
            <div className="list-image">
                <img src={image} alt={title} style={{ height: 200, width: 200, objectFit: "contain" }} />
            </div>
            <div className="list-details">
                <p className="list-category">{category}</p>
                <h4 className="list-title">{title}</h4>
                <p className="list-description">{description}</p>
                <p className="list-price">{formatPrice}</p>
                <button className="list-button">Add To Cart</button>
            </div>
        </div>
    );
}

export default List;
