import React from 'react';
import './Home.css';
import Header from "./Header";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home-page">
            <Header />
        </div>
    )
}
export default Home;