import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 className="nav__title">
                    Test <span className="primary">yourself</span>
                </h1>
                <div className="nav__link">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
            </nav>
            {/* <NavLink to="/quiz/id"></NavLink> */}
        </div>
    );
};

export default Navbar;
