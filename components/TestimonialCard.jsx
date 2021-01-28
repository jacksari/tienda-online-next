import React from 'react';
import { BiStar } from "react-icons/bi";


function TestimonialCard() {
    return (
        <div className="testimonial">
            <span>&ldquo;</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem beatae, consequatur
                cupiditate, distinctio explicabo impedit itaque maiores modi perferendis quibusdam quos, saepe
                totam voluptas. Minima placeat quaerat veritatis.</p>
            <div className="rating">
                <BiStar/>
                <BiStar/>
                <BiStar/>
                <BiStar/>
                <BiStar/>
            </div>
            <div className="img-cover">
                <img src="img/profile1.jpg" alt=""/>
            </div>
            <h4>Will Smith</h4>
        </div>
    );
}

export default TestimonialCard;