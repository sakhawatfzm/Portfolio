import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Font Awesome Icons for social media
import { FaXTwitter } from 'react-icons/fa6';
import { TbArrowBigUpLinesFilled } from "react-icons/tb"; // Font Awesome for back to top arrow

const Footer = () => {
  // State to track scroll position and visibility of Back to Top button
  const [showTopBtn, setShowTopBtn] = useState(false);
  
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 relative">
      <div className="container mx-auto text-center">
        {/* Copyright Info */}
        <p className="text-lg font-semibold">&copy; Md. Sakhawat Hossain | {currentYear} All rights reserved.</p>

        {/* Social Media Icons */}
        <ul className="flex justify-center mt-8 space-x-8">
          {/* Twitter */}
          <li className="relative group">
            <a
              href="https://x.com/sakhawat0704446"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-900 rounded-full transition-all transform hover:scale-110 hover:bg-gray-800 hover:text-white shadow-lg"
            >
              <FaXTwitter size={28} />
              <div className="tooltip bg-black text-white rounded-md py-1 px-2 absolute bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Twitter
              </div>
            </a>
          </li>
          
          {/* LinkedIn */}
          <li className="relative group">
            <a
              href="https://www.linkedin.com/in/md-sakhawat-hossain-651678287/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-900 rounded-full transition-all transform hover:scale-110 hover:bg-gray-800 hover:text-white shadow-lg"
            >
              <FaLinkedin size={28} />
              <div className="tooltip bg-black text-white rounded-md py-1 px-2 absolute bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                LinkedIn
              </div>
            </a>
          </li>

          {/* GitHub */}
          <li className="relative group">
            <a
              href="https://github.com/sakhawatfzm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-900 rounded-full transition-all transform hover:scale-110 hover:bg-gray-800 hover:text-white shadow-lg"
            >
              <FaGithub size={28} />
              <div className="tooltip bg-black text-white rounded-md py-1 px-2 absolute bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                GitHub
              </div>
            </a>
          </li>
        </ul>

        {/* Extra Footer Links or Info */}
        <div className="mt-6 text-sm">
          <p className="text-gray-400 mt-2">Follow me on social media for more updates!</p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all hover:bg-gray-500 hover:scale-110"
          aria-label="Back to Top"
        >
         <TbArrowBigUpLinesFilled size={24}/>
        </button>
      )}
    </footer>
  );
};

export default Footer;
