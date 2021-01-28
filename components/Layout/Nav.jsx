import React, {useContext} from 'react';
import Link from 'next/link';
import { BiX,BiShoppingBag,BiMenu } from "react-icons/bi";
import authContext from "../../context/authContext";

function Nav() {
    //Context
    const AuthContext = useContext(authContext)
    const { usuario, cerrarSesion } = AuthContext

    return (
        <nav className="nav">
            <div className="navigation container">
                <div className="logo">
                    <h1>SariDev</h1>
                </div>
                <div className="menu">
                    <div className="top-nav">
                        <div className="logo">
                            <h1>SariDev</h1>
                        </div>
                        <div className="close">
                            <BiX/>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link scroll-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products">
                                <a className="nav-link">Products</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link scroll-link">About</a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link scroll-link">Contact</a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a  className="nav-link icon"><BiShoppingBag/></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                usuario ? (
                                        <Link href="/account">
                                            <a className="nav-link scroll-link">{usuario.name}</a>
                                        </Link>
                                ) : (
                                    <Link href="/login">
                                        <a className="nav-link scroll-link">Account</a>
                                    </Link>
                                )
                            }
                        </li>
                        {
                            usuario ? (
                                <li className="nav-item logout">
                                    <span onClick={cerrarSesion}>Logout</span>
                                </li>
                            ): null
                        }

                    </ul>
                </div>

                <a href="#" className="cart-icon">
                    <BiShoppingBag/>
                </a>

                <div className="hamburger">
                    <BiMenu/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;