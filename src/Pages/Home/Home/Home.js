import React from 'react';
import Addarticle from './Body/Addarticle/Addarticle';
import Hero from './Body/Hero/Hero';



const Home = () => {
    return (
        <div className='bg-purple-800'>
            <Hero></Hero> 
            <Addarticle></Addarticle>    
        </div>
    );
};

export default Home;