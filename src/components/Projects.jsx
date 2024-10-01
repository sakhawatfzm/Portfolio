import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Importing a close icon from react-icons

// Sample projects data with paths to images and videos
const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    image: './src/assets/sundown.jpg',
    video: './src/assets/sundown.mp4', // Path to project video
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    image: './src/assets/cuberto.jpg',
    video: './src/assets/cuberto.mp4', // Path to project video
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        {/* Updated Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-wide z-10 relative">
          My Projects
        </h2>

        {/* Progressive Timeline Container */}
        <div className="relative flex justify-center items-center mb-12">
          <div className="absolute w-1 h-full bg-gray-300 z-0"></div> {/* Vertical Line */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 z-10 relative">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-cover"
                    style={{
                      height: 'auto',
                      maxHeight: '400px', // Reduced max height for consistency
                      maxWidth: '100%',
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-center">{project.title}</h3>
                <p className="text-gray-600 mt-2 text-center">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Selected Project */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-1/2 max-h-screen overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>

              <div className="relative">
                <video
                  className="w-full rounded-lg max-h-96" // Set a max height for the video
                  controls
                  src={selectedProject.video}
                >
                  Your browser does not support the video tag.
                </video>

                {/* Close icon */}
                <button
                  className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl"
                  onClick={() => setSelectedProject(null)}
                >
                  <AiOutlineClose />
                </button>
              </div>

              <p className="mt-4">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
