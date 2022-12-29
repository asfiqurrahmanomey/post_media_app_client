import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
const Main = () => {
    
    return (
        <div className='overflow-x-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollToTop smooth />
            <Footer></Footer>
        </div>
    );
};

export default Main;