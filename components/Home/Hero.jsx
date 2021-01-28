import React from 'react';
import Layout from "../Layout/Layout";

function Hero() {
    return (
        <>
            <img  src="img/banner.png" className="hero-img" alt=""/>
            <div className="hero-content">
                <h2>
                    <span className="discount">70%</span> SALE OFF
                </h2>
                <h1>
                    <span>Summer Vibes</span>
                    <span>mode on</span>
                </h1>
                <a href="#" className="btn">shop now</a>
            </div>
        </>
    );
}

export default Hero;