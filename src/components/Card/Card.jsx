import React from 'react';

function Card({ img, title, subtitle }) {
    return (
        <div className="w-full md:w-1/3 lg:w-1/4 mx-auto rounded-2xl overflow-hidden border-green-500 border-2 px-4 py-10 bg-white shadow-md">
            <img className="w-full h-max object-cover" src={img} alt={title} />
            <div className="px-4 py-4 text-start ">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{subtitle}</p>
            </div>
        </div>
    );
}

export default Card;
