import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Addarticle from "../../Pages/Home/Home/Body/Addarticle/Addarticle";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import Media from "../../Pages/Media/Media";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/addarticle',
                element: <PrivateRoute>
                    <Addarticle></Addarticle>
                </PrivateRoute>

            },
        ]
    }
]);

export default router;