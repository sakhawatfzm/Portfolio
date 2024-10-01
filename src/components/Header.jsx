import React from 'react';
import cvFile from '../assets/mycv.pdf'; // Adjust this path to where your CV is stored

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src='/src/assets/video22.mp4' // Replace with your video file path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-black to-purple-800 opacity-70"></div>

      {/* Content Container */}
      <div className="container mx-auto flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white">
          {/* Refined Headline with personalized message */}
          <h1 className="text-6xl font-extrabold mb-6 transform transition-transform duration-500 hover:scale-105">
            Hi, I’m <span className="text-indigo-400">Sakhawat Hossain</span>
          </h1>
          <p className="text-2xl mb-6 animate-pulse">Web Developer | Creative Innovator</p>

          {/* Dynamic subtitle with more engagement */}
          <p className="text-lg mb-8 font-light text-gray-300 max-w-2xl mx-auto">
            Crafting seamless digital experiences that transform ideas into engaging, functional, and scalable solutions.
          </p>

          {/* Button Group with proper spacing */}
          <div className="flex justify-center space-x-10"> {/* Increased space to prevent overlap */}
            {/* See My Work Button */}
            <a
              href="#projects"
              className="relative inline-block bg-indigo-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
            >
              Explore My Projects
              <span className="absolute inset-0 border-2 border-indigo-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </a>

            {/* Download CV Button */}
            <a
              href={cvFile}
              download
              className="relative inline-block bg-green-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
            >
              Get My CV
              <span className="absolute inset-0 border-2 border-green-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
