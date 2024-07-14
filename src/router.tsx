import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { JobsPage } from "./pages/JobsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/jobs',
                element: <JobsPage/>
            },
        ]
    }
])