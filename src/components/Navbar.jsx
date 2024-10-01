import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing icons from react-icons
import { LuMessagesSquare } from 'react-icons/lu';
import logo from '../assets/logo/logo5.png'; // Import your logo image here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-300 rounded-full" // Styling for the logo
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section.toLowerCase()}`}
                className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300"
              >
                {section === 'Contact' ? (
                  <>
                    <LuMessagesSquare className="inline-block mr-1" /> Say Hello
                  </>
                ) : (
                  section
                )}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu Icon with shadow */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none shadow-md p-2 rounded transition-shadow duration-300"
          >
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with transition */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg absolute top-full w-full left-0 py-6 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="text-gray-600 hover:text-indigo-600 text-lg transition-colors duration-300"
                onClick={() => {
                  toggleMenu(); // Close the menu on click
                  document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
                }}
              >
                {section === 'Contact' ? (
                  <>
                    <LuMessagesSquare className="inline-block mr-1" /> Say Hello
                  </>
                ) : (
                  section
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
