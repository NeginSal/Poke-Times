import React from "react";
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper purple lighten-2">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/"></Link>Home</li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>

     );
}

export default Navbar;