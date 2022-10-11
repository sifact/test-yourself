import React from "react";
import "./Option.css";
const Option = ({ opt }) => {
    console.log(opt);
    return (
        <div className={opt ? "option" : ""}>
            <p>{opt}</p>
        </div>
    );
};

export default Option;
