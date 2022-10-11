import React from "react";
import Option from "../Option/Option";
import "./Question.css";

const Question = ({ prompt }) => {
    const { options, correctAnswer, question } = prompt;

    return (
        <div className="question container">
            <div className="prompt">{question}</div>
            <div className="options">
                <Option />
                {options.map((opt, idx) => (
                    <Option key={idx} opt={opt} />
                ))}
            </div>
        </div>
    );
};

export default Question;
