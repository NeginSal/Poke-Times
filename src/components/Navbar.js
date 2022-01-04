import React from "react";

const Navbar = () => {
    return (
        <nav className="nav-wrapper purple lighten-2">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><a href="/"></a>Home</li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>

     );
}

export default Navbar;