import React, { useEffect, useState} from 'react';
import './Home.css';
import Header from "./Header";
import ProductList from "./ProductList";
import { Link } from 'react-router-dom';

export default function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const filterProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return(
        <div className="home-page">
            <Header setSearchQuery={setSearchQuery}/>
            <div className="product-list">
                <ProductList products={filterProducts}/>
            </div>
        </div>
    )
}
/*
export default Home;
*/