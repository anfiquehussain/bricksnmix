import React, { useState } from "react";
import profile from "../../assets/images/sr_images/review_profile.png";
import { IoIosStar } from "react-icons/io";

function ServiceContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    review: "",
    message: "",
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
    <div className="bg-gray-100 flex justify-center p-6">
      <div className="flex w-full max-w-6xl flex-col space-y-6 rounded-lg border-2 border-solid border-green-500 bg-white p-6 shadow-lg md:flex-row md:space-x-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-gray-800 flex flex-col justify-between rounded-lg p-4 md:w-1/2">
          <div className="text-center md:text-start">
            <h1 className="text-3xl font-bold">Bricksnmix</h1>
            <p className="text-gray-600 mt-2 w-full md:w-2/3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              velit, aliquam.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center space-y-4 md:items-start">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-3 md:space-y-0">
              <img
                src={profile}
                alt="Reviewer"
                className="h-20 w-20 rounded-full"
              />
              <div className="text-center md:text-left">
                <h1 className="text-gray-800 text-lg font-bold">Lidiya</h1>
                <div className="flex justify-center space-x-1 text-yellow-400 md:justify-start">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
            </div>
            <p className="text-gray-600 w-full text-center text-sm md:w-2/3 md:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              hic perferendis ex vel aut quis.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex justify-center md:w-1/2">
          <div className="w-full px-6 py-8">
            <form
              className="grid grid-cols-1 gap-8 text-start sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div className="col-span-2">
                <label htmlFor="fullName" className="text-gray-700 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border-gray-300 mt-1 w-full rounded-md border-2 p-2 focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="email" className="text-gray-700 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 mt-1 w-full rounded-md border-2 p-2 focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="phone" className="text-gray-700 block">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 mt-1 w-full rounded-md border-2 p-2 focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Product Review */}
              <div className="col-span-2">
                <label htmlFor="review" className="text-gray-700 block">
                  Product Review
                </label>
                <input
                  type="text"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  className="border-gray-300 mt-1 w-full rounded-md border-2 p-2 focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="col-span-2">
                <label htmlFor="message" className="text-gray-700 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-gray-300 mt-1 h-28 w-full rounded-md border-2 p-2 focus:border-teal-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Terms Checkbox */}
              <div className="col-span-2 flex items-center">
                <label
                  htmlFor="terms"
                  className="text-gray-700 flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-3 h-6 w-6 rounded-sm bg-graylight focus:outline-none"
                    required
                  />
                  I accept the Terms
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="col-span-2 rounded-md bg-BrightGreen p-2 text-white transition duration-300 hover:bg-ForestGreen"
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
