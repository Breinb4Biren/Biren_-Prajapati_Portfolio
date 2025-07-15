'use client';
import React from 'react';

const AboutIntro = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        Hello 👋 I’m <span className="text-blue-400 font-semibold">Biren Prajapati</span>, a technology enthusiast and full-stack developer.
        I love solving real-world problems through code, and I enjoy building both frontend and backend systems that are fast, secure, and scalable.
      </p>
      <p className="text-md text-gray-400 leading-relaxed">
        My stack includes <strong className="text-blue-400">React</strong>, <strong className="text-blue-400">Next.js</strong>, <strong className="text-blue-400">Node.js</strong>,
        and <strong className="text-blue-400">PostgreSQL</strong>. I’ve worked on face recognition systems, OCR document readers, job schedulers, and
        love experimenting with new tools and libraries.
      </p>
    </div>
  );
};

export default AboutIntro;
