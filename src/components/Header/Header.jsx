import React from "react";
import image from "./image/quiz-intro.png";

import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header__content container">
                <div className="header__text">
                    <h2>Front End Developer Quiz </h2>
                    <p>
                        This test will allow to assess your knowledge in CSS,
                        JavaScript, React and Git.
                    </p>
                </div>

                <img src={image} className="header__img" alt="" />
            </div>
        </div>
    );
};

export default Header;
