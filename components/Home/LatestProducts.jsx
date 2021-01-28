import React from 'react';
import ProductCard from "../ProductCard";

function LatestProducts() {
    return (
        <section className="section featured">
            <div className="title">
                <h1>Lastest Products</h1>
            </div>
            <div className="product-center container">
                <ProductCard/>
            </div>
        </section>
    );
}

export default LatestProducts;