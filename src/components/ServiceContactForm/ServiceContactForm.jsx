import React, { useState } from 'react';
import profile from '../../assets/images/sr_images/review_profile.png';
import { IoIosStar } from "react-icons/io";

function ServiceContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    review: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Review: ${formData.review}
      Message: ${formData.message}
    `);
  };

  return (
    <div className="flex justify-center p-6 bg-gray-100">
      <div className="border-2 border-solid border-green-500 w-full max-w-6xl p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 rounded-lg shadow-lg bg-white">

        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-between p-4 rounded-lg text-gray-800">
          <div className='text-center md:text-start'>
            <h1 className="text-3xl font-bold">Bricksnmix</h1>
            <p className="text-gray-600 mt-2 w-full md:w-2/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae velit, aliquam.</p>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4 mt-6">
            <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              <img src={profile} alt="Reviewer" className="w-20 h-20 rounded-full" />
              <div className="text-center md:text-left">
                <h1 className="text-lg font-bold text-gray-800">Lidiya</h1>
                <div className="flex justify-center md:justify-start space-x-1 text-yellow-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center md:text-left w-full md:w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum hic perferendis ex vel aut quis.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="px-6 py-8 w-full">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-start" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="col-span-2">
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Email */}
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Phone */}
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Product Review */}
              <div className="col-span-2">
                <label htmlFor="review" className="block text-gray-700">Product Review</label>
                <input
                  type="text"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Message */}
              <div className="col-span-2">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500 h-28"
                ></textarea>
              </div>

              {/* Terms Checkbox */}
              <div className="col-span-2 flex items-center">
                <label htmlFor="terms" className="flex items-center text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-6 h-6 bg-graylight rounded-sm  focus:outline-none mr-3"
                    required
                  />
                  I accept the Terms
                </label>
              </div>




              {/* Submit Button */}
              <button
                type="submit"
                className="col-span-2 bg-BrightGreen text-white p-2 rounded-md hover:bg-ForestGreen transition duration-300"
              >
                Submit
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServiceContactForm;
