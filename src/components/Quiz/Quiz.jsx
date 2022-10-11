import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
    const topic = useLoaderData();
    const { questions } = topic.data;

    return (
        <div className="question__container">
            {questions.map((question, idx) => (
                <Question key={idx} prompt={question} />
            ))}
        </div>
    );
};

export default Quiz;
