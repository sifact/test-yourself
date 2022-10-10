import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";

import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Quiz from "./components/Quiz/Quiz";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home />,
                },
                {
                    path: "/home",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home />,
                },
                {
                    path: "quiz/:quizId",
                    loader: ({ params }) =>
                        fetch(
                            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
                        ),
                    element: <Quiz />,
                },
                { path: "statistics", element: <Statistics /> },
                { path: "blog", element: <Blog /> },
            ],
        },
        { path: "*", element: <h2>no route found</h2> },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
