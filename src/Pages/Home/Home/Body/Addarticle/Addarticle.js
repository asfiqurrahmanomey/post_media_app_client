import React from 'react';
import { Link } from 'react-router-dom';
import Articalform from './Articalform';
import { Fade } from "react-awesome-reveal";

const Addarticle = () => {

    return (
        <div>
            <section className="py-10  sm:py-16 lg:py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold leading-tight text-teal-200 sm:text-4xl lg:text-5xl">How does it work?</h2>
                        <Fade delay={1e3} cascade damping={1e-1} className="mt-4 text-base text-white lg:mt-8 sm:text-xl">Write Your Favorite Childhood Comic or Cartoon Memory and Shows to Million of people.</Fade>
                    </div>

                        <Articalform></Articalform> 


                </div>
            </section >
        </div >
    );
};

export default Addarticle;