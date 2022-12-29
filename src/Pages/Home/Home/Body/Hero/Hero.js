import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css"
import SideSlider from './SideSlider';
import ReactTypingEffect from 'react-typing-effect';
import { Fade } from "react-awesome-reveal";


const Hero = () => {
    
    return (
        <div>
            <div className="">
                <section className="py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div direction="left">
                                <p className="text-base font-semibold tracking-wider text-white uppercase">A social media for learners</p><div className="com app"></div>
                                <h1 className="mt-4 text-4xl font-bold text-teal-200 lg:mt-8 sm:text-6xl xl:text-8xl">Lets Bring
                                    <ReactTypingEffect
                                        text={["Childhood", "Memoires"]}
                                    />
                                </h1>
                                <Fade delay={1e3} cascade damping={1e-1} className="mt-4 text-base text-white lg:mt-8 sm:text-xl">Write Your Cartoon Article Back to Past.</Fade><br />

                                <Link id='blog-upload' title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black bg-teal-200 transition duration-200 rounded-3xl shadow-md hover:bg-neutral-600 hover:text-teal-200 focus:shadow-outline focus:outline-none" role="button">
                                    Upload Your Blog
                                </Link>

                                <p className="mt-5 text-white">Already joined us? <Link to="/login" title="" className="text-teal-200 transition-all duration-200 hover:underline">Log in</Link></p>
                            </div>
                            <div>
                                <SideSlider></SideSlider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Hero;