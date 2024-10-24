import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-ForestGreen p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">404 - Page Not Found</h1>
            <p className="text-base md:text-lg text-graylight mb-8 text-center">
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                className="bg-BrightGreen hover:bg-TealGreen text-white font-semibold py-2 px-4 md:px-6 rounded-lg"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default NotFound;
