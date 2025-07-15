'use client';
import React from 'react';

const techStack = [
  'Java',
  'JavaScript',
  'Perl',
  'Python',
  'Go',
  'SQL',
  'MongoDb',
  'Spring Boot',
  'Spring',
  'ReactJs',
  'NextJs',
  'Docker',
  'Jenkins',
  'Keras',
  'Linux',
  'Git',
  'Maven',
  'Gradle',
  'CMake',
  'Redis',
  'Tailwind CSS',
];

const TechStack = () => {
  return (
    <section className="px-6 py-20 bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">Tech Stack I&apos;m Familiar With</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 p-3 rounded-md text-center border border-gray-800 hover:border-blue-500 transition-all"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
