import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style.css'
import Header from './Components/Header';
import Footer from './Components/Footer';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import About from './Components/About';
import Error from './Components/Error';
import Contact from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';
import Profile from './Components/Profile';
import ProfileClass from './Components/ProfileClass';



const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
                <Outlet/>
            <Footer/>
        </React.Fragment>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
                children:[
                    {
                        path:"profile",
                        element:<ProfileClass/>
                    },
                    // {
                    //     path:"profile",
                    //     element:<Profile/>
                    // },
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
        ]
    },
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
