'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 text-center border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Breinb4Biren" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/biren-prajapati-5799991b7/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:prajapatibiren8@gmail.com" className="hover:text-white transition">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Biren Prajapati. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
