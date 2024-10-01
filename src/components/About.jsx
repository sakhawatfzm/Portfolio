import React from 'react';
import profilePic from '../assets/profile12.jpg'; // Add a profile image
import { FaLaptopCode, FaLightbulb, FaUsers } from 'react-icons/fa'; // Add icons for visual flair

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Profile Image with animation */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img 
            src={profilePic} 
            alt="Md. Sakhawat Hossain" 
            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-indigo-500 shadow-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* About Text with more engaging content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-6">
            Get to Know Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hi, I’m <span className="text-indigo-600 font-semibold">Md. Sakhawat Hossain</span>! 
            <span className="italic text-gray-900 font-medium"> Web development</span> is more than just my profession—<span className="text-indigo-600 font-bold">it's my passion</span>.
            I’m driven by the desire to bring ideas to life through <span className="text-indigo-700 font-semibold">clean</span>, <span className="text-indigo-700 font-semibold">efficient</span>, 
            and <span className="text-indigo-700 font-semibold">scalable code</span>.
          </p>
          <p className="text-gray-600 mb-4">
            I focus on building <span className="font-semibold text-gray-800">user-friendly</span>, <span className="font-semibold text-gray-800">responsive</span> web applications with a clear purpose: 
            to make the <span className="text-indigo-700 font-semibold">digital world</span> more accessible and intuitive. 
            My journey started with curiosity, and it continues with the thrill of solving <span className="text-indigo-600 font-semibold">complex problems</span> and learning something <span className="italic text-indigo-600">new</span> every day.
          </p>

          {/* New Icons and short key points */}
          <div className="flex justify-center md:justify-start mt-6 space-x-8">
            <div className="text-center">
              <FaLaptopCode className="text-indigo-600 text-4xl mb-2 hover:text-indigo-800 transition duration-300" />
              <p className="text-gray-700 font-semibold">Efficient Coder</p>
            </div>
            <div className="text-center">
              <FaLightbulb className="text-indigo-600 text-4xl mb-2 hover:text-indigo-800 transition duration-300" />
              <p className="text-gray-700 font-semibold">Creative Thinker</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-indigo-600 text-4xl mb-2 hover:text-indigo-800 transition duration-300" />
              <p className="text-gray-700 font-semibold">Team Player</p>
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-8">
            <a
              href="#projects"
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
