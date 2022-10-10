import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;

    return (
        <section className="card">
            <img src={logo} className="card__logo" alt="" />
            <div className="card__content">
                <h1>{name}</h1>
                <p>Total Quiz: {total}</p>
            </div>{" "}
            <Link to={`/quiz/${id}`}>Practice</Link>{" "}
        </section>
    );
};

export default Topic;
