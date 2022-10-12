import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Quiz.css";

const Quiz = () => {
    const topic = useLoaderData();

    const { questions } = topic.data;

    return (
        <div className="question__container">
            <h1>
                Quiz of <span>{topic.data.name}</span>
            </h1>
            {questions.map((question, idx) => (
                <>
                    <Question key={idx} prompt={question} />
                </>
            ))}
        </div>
    );
};

export default Quiz;
