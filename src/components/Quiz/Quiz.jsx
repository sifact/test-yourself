import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
    const topic = useLoaderData();
    const { questions } = topic.data;
    console.log(questions);
	return <div>
		{questions.map(question => )}
	</div>;
};

export default Quiz;
