import React from "react";
import Option from "../Option/Option";
import "./Question.css";

const Question = ({ prompt }) => {
    const { options, correctAnswer, question } = prompt;
    const checkValue = (e) => {
        // console.log(e.target.defaultValue);
        if (e.target.defaultValue === correctAnswer) {
            console.log("correct");
        } else {
            console.log("wrong");
        }
    };
    return (
        <div className="question container">
            <div className="prompt">{question}</div>
            <div className="options">
                <Option />
                {options.map((opt, idx) => (
                    <Option key={idx} opt={opt} checkValue={checkValue} />
                ))}
            </div>
        </div>
    );
};

export default Question;
