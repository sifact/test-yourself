import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="nav__wrapper">
            <nav className="container">
                <h1 className="nav__title">
                    Test <span className="primary">yourself</span>
                </h1>
                <div
                    // className="h-6 w-6 md:hidden"
                    style={{ width: "30px", height: "30px" }}
                    onClick={() => setOpen(!open)}
                    className="icon"
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </div>
                <div
                    className={
                        open
                            ? "d__block nav__link transition"
                            : "d__none nav__link transition"
                    }
                >
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
