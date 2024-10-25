import React from 'react';
import { Link } from 'react-router-dom'; 
import icon from '../../assets/images/icons/icon_sg.png';
import playstore from '../../assets/images/icons/ic_android1.png';
import huwawei from '../../assets/images/icons/ic_huawei.png';
import appstore from '../../assets/images/icons/ic_ios1.png';
import cod from '../../assets/images/icons/cod.png';
import mastercard from '../../assets/images/icons/master_card.png';
import visa from '../../assets/images/icons/ic_visa.png';

function Footer() {
    return (
        <>
            <div className='flex flex-col justify-between w-full mt-5 bg-WhiteSmoke pb-10'>
                <div className='w-full  flex flex-col md:flex-row justify-between p-4'>
                    <div className='flex flex-col items-start mb-4 md:mb-0'>
                        <img src={icon} alt="Company Icon" className='w-12 mb-2' />
                        <p className='text-xl'>Let’s start working together</p>
                    </div>

                    <div className='flex flex-row text-base font-medium justify-between md:items-start gap-5'>
                        <ul className='flex flex-col text-start'>
                            {/* Use Link for internal navigation */}
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/c">Customer</Link>
                            </li>
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/c">Seller</Link>
                            </li>
                        </ul>

                        <ul className='flex flex-col text-start'>
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/c">About Us</Link>
                            </li>
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/contact-us">Contact</Link>
                            </li>
                            <li className='hover:text-BrightGreen cursor-pointer'>
                                <Link to="/services">Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full  bg-[#F9F9F9] flex flex-col md:flex-row items-center md:items-start justify-between p-4'>
                    <div className='flex flex-row items-end mb-4 gap-5 md:mb-0'>
                        <img src={icon} alt="CompanyIcon" className='w-12 mb-2' />
                        <img src={appstore} alt="AppStore" className='w-14 h-fit mb-2' />
                        <img src={huwawei} alt="HuaweiStore" className='w-14 h-fit mb-2' />
                        <img src={playstore} alt="GooglePlayStore" className='w-14 h-fit mb-2' />
                    </div>

                    <div className='flex flex-col justify-between md:items-start gap-5'>
                        <h1 className='text-xl'>Available Payment Option</h1>
                        <div className='flex flex-row gap-5 w-full items-center justify-center md:justify-around'>
                            <img src={visa} alt="Visa" className='w-10 h-fit' />
                            <img src={mastercard} alt="Mastercard" className='w-10 h-fit' />
                            <img src={cod} alt="COD" className='w-10 h-fit' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
