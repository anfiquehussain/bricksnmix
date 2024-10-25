import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        review: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            await axios.post("https://getform.io/f/bmddpxya", formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                review: '',
            });
            setSuccessMessage('Your message has been sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Failed to submit the form. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center mt-10'>
            <div className='border-BrightGreen border-solid border-2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/2 px-4 sm:px-10 md:px-16 lg:px-32 py-10 rounded-lg'>
                <h1 className='text-center text-black text-2xl md:text-4xl font-semibold mb-10 md:mb-20'>
                    Get in touch with Our <br /> Team
                </h1>
                {/* Display Error Message */}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {/* Display Success Message */}
                {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
                <form className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 uppercase' onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <input
                        type="text"
                        placeholder='FIRST NAME'
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className='p-2 border-2 col-span-2 md:col-span-1 focus:outline-none'
                    />
                    <input
                        type="text"
                        placeholder='LAST NAME'
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className='p-2 border-2 col-span-2 md:col-span-1 focus:outline-none'
                    />
                    <input
                        type="email"
                        placeholder='EMAIL'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='p-2 border-2 col-span-2 md:col-span-1 focus:outline-none'
                    />
                    <input
                        type="tel"
                        placeholder='PHONE NUMBER'
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className='p-2 border-2 col-span-2 md:col-span-1 focus:outline-none'
                    />
                    <textarea
                        name="review"
                        placeholder='PRODUCT REVIEW'
                        value={formData.review}
                        onChange={handleChange}
                        className='col-span-2 border-2 p-2 h-52 focus:outline-none'
                    ></textarea>
                    <button type='submit' className='col-span-2 border-2 bg-white text-graylight p-2 hover:bg-gray ease-in-out duration-500' disabled={loading}>
                        {loading ? 'Submitting...' : 'SUBMIT'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
