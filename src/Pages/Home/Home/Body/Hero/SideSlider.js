import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Hero.css";

// import required modules
import { EffectCards } from "swiper";

const SideSlider = () => {
    return (
        <div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.pinimg.com/474x/d2/ae/92/d2ae929f554aae32d1d1aa81b19682ac.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://legacycomics.com/wp-content/uploads/2019/07/marvel-comics-1000-mcguinness.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://1.bp.blogspot.com/-6EKT3UzXFMs/XF7mflsyHZI/AAAAAAAAVOQ/R2X-wGyu0KMmda-Z5J3dw_DU5e3EPRLIgCLcBGAs/s1600/jlanimated.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.mycast.io/posters/3698_large.jpg?1539194203" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SideSlider;