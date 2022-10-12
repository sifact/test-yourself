import React from "react";
import "./Blog.css";
import img1 from "./router.png";
import img2 from "./api.png";
import img3 from "./hook.png";

const Blog = () => {
    return (
        <section>
            <div className="box container">
                <div className="card">
                    <img src={img1} alt="" />

                    <div className="content">
                        <h1>Purpose of React Router</h1>
                        <p>
                            The purpose of React Router is to build a
                            single-page web application with navigation without
                            the page refreshing as the user navigates. It uses
                            component structure to call components, which
                            display the appropriate information.
                            <h1></h1>
                            It is also use for Active Link, data loading, data
                            mutations.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <div className="content">
                        <h1>Context Api</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam accusamus eveniet soluta recusandae laudantium
                        repellendus neque ex nihil qui sunt asperiores aliquam
                    </div>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <div className="content">
                        <h1>useRef hook</h1>
                        The useRef hook allows to directly create a reference to
                        the DOM element in the functional component. The useRef
                        returns a mutable ref object. This object has a property
                        called .current. The value is persisted in the
                        refContainer.current property.
                        <h1></h1>
                        The .current property could be initialized to the passed
                        argument initialValue for instance,
                        useRef(initialValue). The object can persist a value for
                        a full lifetime of the component.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
