import React, {useState} from 'react';
import List from './List';
import { Link } from 'react-router-dom';
import "./ProductList.css";


function ProductList({products}){
    const[sortOption, setSortOption] = useState("alphabetical");

    const sortedProducts = [...products].sort((a,b) => {
        if(sortOption === "alphabetical")
            return a.title.localeCompare(b.title);
        else if(sortOption === "price-asc")
            return a.price - b.price;
        else if(sortOption === "price-des")
            return b.price - a.price;
        return 0;
    });

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return(
        <div>
            <div className ="sort-options">
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-des">Price: High to Low</option>
                </select>
            </div>

            {sortedProducts ? sortedProducts.map(({id, title, price, description, category, image, }) => (
                <List
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )):<p> Loading...</p>}
            
        </div>
    );
}

export default ProductList;