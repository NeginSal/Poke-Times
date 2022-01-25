import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper purple lighten-2">
            <div className="container">
            <Link className="brand-logo" to="/">Poke' Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
     );
}
export default Navbar;
