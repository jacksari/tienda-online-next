import React from 'react';
import { BiHeart, BiShoppingBag, BiSearch, BiStar } from "react-icons/bi";

function ProductCard() {
    return (
        <div className="product">
            <div className="product-header">
                <img src="img/pic1.jpg" alt=""/>
                <ul className="icons">
                            <span>
                                <BiHeart/>
                            </span>
                            <span>
                                <BiShoppingBag/>
                            </span>
                            <span>
                                <BiSearch/>
                            </span>
                </ul>
            </div>
            <div className="product-footer">
                <a href="#">
                    <h3>Boy's T-Shirt</h3>
                </a>
                <div className="rating">
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                    <BiStar/>
                </div>
                <h4 className="price">$50</h4>
            </div>
        </div>
    );
}

export default ProductCard;