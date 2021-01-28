import React from 'react';
import Nav from "./Nav";
import Hero from "../Home/Hero";
import {useRouter} from "next/router";


function Header() {
    const router = useRouter()
    return (
        <div>

            <header id="home" className={router.pathname === '/' ? 'header header-home': 'header'}>
                <Nav/>
                {
                    router.pathname === '/' ? (
                        <Hero/>
                    ): null
                }
            </header>
        </div>
    );
}

export default Header;