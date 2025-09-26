import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import Destinations from "../pages/Destinations/Destinations"
import Details from "../pages/Details/Details"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Destinations />
            },
            {
                path: "destination/:id",
                element: <Details />
            }
        ]
    },
])

export default router