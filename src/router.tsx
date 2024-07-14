import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { JobsPage } from "./pages/JobsPage";
import { JobDetails } from "./pages/JobDetails";
import { JobsEdit } from "./pages/JobsEdit";

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
            {
                path: '/jobs/:id/detalhes',
                element: <JobDetails/>
            },
            {
                path: '/jobs/:id/edit',
                element: <JobsEdit/>
            }
        ]
    }
])