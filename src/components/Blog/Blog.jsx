import React from "react";
import "./Blog.css";
import img1 from "./router.png";
import img2 from "./api.png";
import img3 from "./hook.png";

const Blog = () => {
    return (
        <section className="box__wrapper">
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
                            <div className="space"></div>
                            It is also use for Active Link, data loading, data
                            mutations.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <div className="content">
                        <h1>How React Context API works</h1>
                        The React Context API is a way for a React app to
                        effectively produce global variables that can be passed
                        around. This is the alternative to "prop drilling" or
                        moving props from grandparent to child to parent, and so
                        on.
                        <div className="space"></div>
                        Context API is created using React.createContext(). It
                        returns a consumer and a provider. Provider is a
                        component that as it's names suggests provides the state
                        to its children. It will hold the "store" and be the
                        parent of all the components that might need that store.
                        Consumer as it happens is a component that consumes and
                        uses the state.
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
                        <div className="space"></div>
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
