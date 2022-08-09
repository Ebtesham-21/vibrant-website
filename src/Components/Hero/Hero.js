import React from 'react';
import video1 from "../../Images/style-1.mp4";
import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <video src={video1} autoPlay loop muted id="video">

            </video>

        </div>
    );
};

export default Hero;