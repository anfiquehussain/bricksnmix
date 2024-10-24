import React, { useState } from "react";

function ImageGrid({ image1, image2, image3, image4, image5 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage("");
    };

    return (
        <div className="flex flex-col mx-5 sm:mx-20 lg:mx-36">
            <p className="py-7 text-center uppercase text-lg font-semibold">Explore our recent project</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* Image 1 */}
                <div className="row-span-1 col-span-1 md:row-span-2  flex items-center justify-center h-48 md:h-full overflow-hidden">
                    <img
                        src={image1}
                        alt="Image1"
                        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(image1)}
                    />
                </div>

                {/* Image 2 */}
                <div className="row-span-1 col-span-1 md:col-span-2  flex items-center justify-center h-48 overflow-hidden">
                    <img
                        src={image2}
                        alt="Image2"
                        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(image2)}
                    />
                </div>

                {/* Image 3 */}
                <div className="col-span-1  flex items-center justify-center h-48 overflow-hidden">
                    <img
                        src={image3}
                        alt="Image3"
                        className="w-full h-full object-cover  transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(image3)}
                    />
                </div>

                {/* Image 4 */}
                <div className="col-span-1  flex items-center justify-center h-48 overflow-hidden">
                    <img
                        src={image4}
                        alt="Image4"
                        className="w-full h-full object-cover  transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(image4)}
                    />
                </div>

                {/* Image 5 */}
                <div className="col-span-2 md:col-span-3 lg:col-span-2 flex items-center justify-center h-48 overflow-hidden">
                    <img
                        src={image5}
                        alt="Image5"
                        className="w-full h-full object-cover  transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(image5)}
                    />
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-full"
                    />
                </div>
            )}
        </div>
    );
}

export default ImageGrid;
