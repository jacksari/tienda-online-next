import React from 'react';
import TestimonialCard from "../TestimonialCard";

function Testimonial() {
    return (
        <section className="section">
            <div className="testimonial-center container">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
        </section>
    );
}

export default Testimonial;