// import React, { useEffect, useRef, useState } from "react";
import Option from "../Option/Option";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ prompt }) => {
    const { options, correctAnswer, question } = prompt;

    const displayCorrect = () => {
        toast.success("correct answer :)", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
        });
    };

    const displayWrong = () =>
        toast.error("wrong answer ):", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
        });

    let correct = false;
    const checkValue = (e) => {
        if (e.target.defaultValue === correctAnswer) {
            correct = true;

            if (correct) {
                displayCorrect();
            }
        } else {
            correct = false;
            displayWrong();
        }
    };

    return (
        <div className="question container">
            <div className="prompt">{question.slice(3, -4)}</div>
            <div className="options">
                {options.map((opt, idx) => (
                    <Option
                        key={idx}
                        opt={opt}
                        checkValue={checkValue}
                        correctAnswer={correctAnswer}
                    />
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;
