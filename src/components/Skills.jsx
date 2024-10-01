import React, { useState, useEffect, useRef } from 'react';
import '../style.css'; // Importing custom styles

// Importing logos
import jsLogo from '../assets/js.png'; // JavaScript logo
import htmlLogo from '../assets/html.png'; // HTML logo
import cssLogo from '../assets/css.png'; // CSS logo
import reactLogo from '../assets/react.png'; // React logo
import bootstrapLogo from '../assets/boot.png'; // Bootstrap logo
import tailwindLogo from '../assets/twc.png'; // Tailwind CSS logo
import nodejsLogo from '../assets/nodejs.svg'; // Node.js logo

const skillsData = [
  { name: 'JavaScript', logo: jsLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'Node.js', logo: nodejsLogo },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('My Skills');
  const containerRef = useRef(null);

  // Function to handle click on a skill logo
  const handleSkillClick = (skillName) => {
    setSelectedSkill(skillName); // Update the heading to show the clicked skill name
  };

  // useEffect to add an event listener for clicks outside the skills section
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click happened outside the container
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelectedSkill('My Skills'); // Reset the heading back to "My Skills"
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Dynamic glitch effect heading based on selected skill */}
        <h2 className={`text-3xl font-bold glitch ${selectedSkill !== 'My Skills' ? 'active' : ''} mb-6`}>
          {selectedSkill}
        </h2>

        <div
          ref={containerRef} // Assigning the reference to the skill container
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              onClick={() => handleSkillClick(skill.name)} // Handle logo click
              className="group flex items-center justify-center p-4 rounded-lg cursor-pointer transition-all transform hover:scale-110 hover:-translate-y-2"
            >
              {/* Black-and-white logo initially, original color on hover */}
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 w-16 filter grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
