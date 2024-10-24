import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useAuth } from '../../context/AuthContext';
import { LuMenu } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import icon from '../../assets/images/icons/icon_sg.png';

function Navbar() {
  const { logout , isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the navbar if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  // Close the menu when the window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Bind the resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white font-medium text-base p-2 md:p-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navbarRef}>
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={icon} alt="logo" className="w-10 h-10 rounded-full border-4 border-TealGreen" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
              About Us
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
              Projects
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
              Services
            </NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
              Contact Us
            </NavLink>
          </div>

          {/* User Icon */}
          <div className="hidden md:flex items-center space-x-2">
            <FaRegUser className="text-gray-700" />
            {isAuthenticated ? (
              <button onClick={logout} className="text-gray-700 hover:text-BrightGreen">
                Logout
              </button>
            ) : (
                <NavLink to="sign-in" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
                Sign In / Sign Up
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <LuMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} transition-all duration-1000 ease-in-out overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className={({ isActive }) => isActive ? 'block text-BrightGreen' : 'block text-gray-700 hover:text-BrightGreen'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'block text-BrightGreen' : 'block text-gray-700 hover:text-BrightGreen'}>
            About Us
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'block text-BrightGreen' : 'block text-gray-700 hover:text-BrightGreen'}>
            Projects
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'block text-BrightGreen' : 'block text-gray-700 hover:text-BrightGreen'}>
            Services
          </NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'block text-BrightGreen' : 'block text-gray-700 hover:text-BrightGreen'}>
            Contact Us
          </NavLink>
          <div className="flex items-center justify-center space-x-2 pt-2">
            <FaRegUser className="text-gray-700" />
           
            {isAuthenticated ? (
              <button onClick={logout} className="text-gray-700 hover:text-BrightGreen">
                Logout
              </button>
            ) : (
                <NavLink to="sign-in" className={({ isActive }) => isActive ? 'text-BrightGreen' : 'text-gray-700 hover:text-BrightGreen'}>
                Sign In / Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;
