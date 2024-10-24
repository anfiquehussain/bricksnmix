import React from "react";
import Iphone from "../../assets/images/banner/iPhone13.png";

function HeroBanner({ title ,subtitle}) {
    return (
        <div className="w-full bg-TealGreen flex flex-col md:flex-row justify-center items-center">
            {/* Text Section */}
            <div className="flex-initial w-full md:w-1/2 p-4 md:p-8">
                <h1 className="text-5xl md:text-6xl text-white text-center md:text-left">
                    {title}
                </h1>
                <p className="text-white text-center md:text-left mt-4 text-sm">
                    {subtitle}
                </p>
            </div>

            {/* Image Section */}
            <div className="flex-initial w-full md:w-1/2 p-4 md:p-8 flex justify-center">
                <img
                    src={Iphone}
                    alt="iPhone 13"
                    className="w-1/4  object-contain transition-transform duration-300 hover:scale-105" // Adds a scale effect on hover
                />
            </div>
        </div>
    );
}

export default HeroBanner;
