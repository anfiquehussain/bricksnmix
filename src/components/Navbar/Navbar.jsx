import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link to="/projects" className="mr-6 hover:text-gray-300">
            Projects
          </Link>
          <Link to="/services" className="mr-6 hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact-us" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
