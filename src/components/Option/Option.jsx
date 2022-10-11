import React from "react";
import "./Option.css";
const Option = ({ opt, checkValue }) => {
    // console.log(opt);
    // console.log(checkValue);
    return (
        <div className={opt ? "option" : ""}>
            <div className="question__radio">
                {" "}
                {opt ? (
                    <input
                        type="radio"
                        name="site_name"
                        // checked={opt}
                        value={opt}
                        //     checked={this.state.site === result.SITE_NAME}
                        // onClick={() => {
                        //     updateTime(time);
                        // }}
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
