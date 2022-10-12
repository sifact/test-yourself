import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Home.css";
import Header from "../Header/Header";

const Home = () => {
    const topics = useLoaderData();
    console.log(topics);

    return (
        <section className="home">
            <Header />
            <div className="container card__wrapper">
                {topics.data.map((topic) => (
                    <Topic key={topic.id} topic={topic} />
                ))}
            </div>
        </section>
    );
};

export default Home;
