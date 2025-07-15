// src/components/Hero.tsx
'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
        👋Hi, I'm <span className="text-blue-500">Biren</span>
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-300 mb-8">
        A Passionate Full Stack Developer
      </h2>

      <div className="flex gap-4">
        <a
          href="/resume.pdf" // Replace with actual resume path
          target="_blank"
          className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded-3xl text-blue-500  hover:text-white font-medium flex items-center gap-2 transition duration-300"
        >
          Resume
        </a>
        <a
          href="https://github.com/Breinb4Biren"
          target="_blank"
          className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded-3xl text-blue-500  hover:text-white font-medium flex items-center gap-2 transition duration-300"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/biren-prajapati-5799991b7/"
          target="_blank"
          className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded-3xl  text-blue-500  hover:text-white font-medium flex items-center gap-2 transition duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="#8529147145"
          className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded-3xl text-blue-500  hover:text-white font-medium flex items-center gap-2 transition duration-300"
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
