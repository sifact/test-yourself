import React from "react";
import "./Option.css";
const Option = ({ opt, checkValue, correctAnswer }) => {
    return (
        <div className="option">
            <div className="question__radio">
                {" "}
                {opt ? (
                    <input
                        type="radio"
                        name="site_name"
                        value={opt}
                        onChange={(e) => checkValue(e)}
                    />
                ) : undefined}
                {"  "}
                <span>{opt}</span>
            </div>
        </div>
    );
};

export default Option;
