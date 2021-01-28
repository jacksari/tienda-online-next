import React from 'react';
import ProductCard from "../ProductCard";

function FeaturedProducts() {
    return (
        <section className="section featured">
            <div className="title">
                <h1>Featured Products</h1>
            </div>
            <div className="product-center container">
                <ProductCard/>
            </div>
        </section>
    );
}

export default FeaturedProducts;