import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="p-4 md:p-8 lg:p-10 ">
                <div className="mx-auto max-w-screen-xl text-center">
                    <Link to="/" className="mb-10 flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white ">
                    <img className='' src={logo} alt="" />
                    </Link>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <Link to="/" className="mr-4 uppercase font-medium tracking-wide text-white hover:text-teal-200 hover:line-through hover:decoration-double hover:decoration-slate-400  transition-colors duration-200 md:mr-6 ">Home</Link>
                        </li>
                        <li>
                            <Link to="/media" className="mr-4 uppercase font-medium tracking-wide text-white hover:text-teal-200 hover:line-through hover:decoration-double hover:decoration-slate-400  transition-colors duration-200 md:mr-6">Media</Link>
                        </li>
                        <li>
                            <Link to="/message" className="mr-4 uppercase font-medium tracking-wide text-white hover:text-teal-200 hover:line-through hover:decoration-double hover:decoration-slate-400  transition-colors duration-200 md:mr-6 ">Message</Link>
                        </li>
                        <li>
                            <Link to="/about" className="mr-4 uppercase font-medium tracking-wide text-white hover:text-teal-200 hover:line-through hover:decoration-double hover:decoration-slate-400  transition-colors duration-200 md:mr-6">About</Link>
                        </li>
                    </ul>
                    <span className="text-sm text-white sm:text-center">© 2022 <Link to="/" className="uppercase font-medium tracking-wide text-white hover:text-teal-200  hover:decoration-slate-400  transition-colors duration-200">Asfiqur Rahman Omey</Link>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;