import React from 'react';
import Link from 'next/link'

function Breadcrumbs({title}) {
    return (
        <section className="breadcrumbs">
            <div className="section">
                <h3>
                    <Link href="/">
                        <a >Home</a>
                    </Link> / {title}
                </h3>
            </div>
        </section>
    );
}

export default Breadcrumbs;