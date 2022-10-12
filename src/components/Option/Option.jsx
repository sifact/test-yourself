import React from "react";
import "./Option.css";
const Option = ({ opt, checkValue, correctAnswer }) => {
    return (
        <div className="option">
            <div className="question__radio">
                {" "}
                <label>
                    {opt ? (
                        // <label></label>
                        <input
                            type="radio"
                            name="opt"
                            value={opt}
                            onChange={(e) => checkValue(e)}
                        />
                    ) : undefined}
                    {"  "}
                    <span>{opt}</span>
                </label>
            </div>
        </div>
    );
};

export default Option;
