import React, { useState } from 'react';

function ProjecrContactForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    review: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    // Display form data in an alert box
    alert(`
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Review: ${formData.review}
    `);
  };

  return (
    <div className='flex justify-center mt-10'>
      <div className='bg-TealGreen w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/2 px-4 sm:px-10 md:px-16 lg:px-32 py-10 rounded-lg shadow-lg'>
        <h1 className='text-center text-white text-2xl md:text-4xl font-semibold mb-10 md:mb-20'>
          Get in touch with Our <br /> Team
        </h1>
        <form className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 uppercase' onSubmit={handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            placeholder='FIRST NAME'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className='p-2 col-span-2 md:col-span-1 focus:outline-none'
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder='LAST NAME'
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className='p-2 col-span-2 md:col-span-1 focus:outline-none'
          />
          {/* Email */}
          <input
            type="email"
            placeholder='EMAIL'
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='p-2 col-span-2 md:col-span-1 focus:outline-none'
          />
          {/* Phone Number */}
          <input
            type="number"
            placeholder='PHONE NUMBER'
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className='p-2 col-span-2 md:col-span-1 focus:outline-none'
          />
          {/* Product Review */}
          <textarea
            name="review"
            placeholder='PRODUCT REVIEW'
            value={formData.review}
            onChange={handleChange}
            className='col-span-2 p-2 h-52 focus:outline-none'
          ></textarea>
          {/* Submit Button */}
          <button type='submit' className='col-span-2 bg-white text-graylight p-2 hover:bg-gray ease-in-out duration-500'>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjecrContactForm;
