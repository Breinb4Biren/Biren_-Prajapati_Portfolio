'use client';
import React from 'react';

const experienceData = [
  {
    title: 'Backend Intern',
    company: 'Chinmay Finlease Ltd, Ahmedabad',
    duration: 'May 2024 – Jul 2024',
    points: [
      'Developed RESTful APIs using Node.js, Express, and PostgreSQL.',
      'Implemented secure authentication with JWT and Bcrypt.',
      'Integrated Redis caching and built job schedulers using node-cron.',
    ],
  },
  {
    title: 'Project Developer',
    company: 'Personal Projects',
    duration: '2023 – Present',
    points: [
      'Created OCR Document Reader with Tesseract + PyMuPDF.',
      'Built Face Recognition system using Python, OpenCV, and dlib.',
      'Developed a full-stack Job Scheduler app using Redis and node-cron.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="px-6 py-20 bg-black text-white min-h-screen">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">Experience</h2>
      <div className="container mx-auto relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-700">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className={`mb-12 flex flex-col md:flex-row items-start ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 md:px-8 mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <span className="text-blue-400">{exp.company}</span>
              <p className="text-gray-400">{exp.duration}</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="hidden md:block w-6 h-6 bg-blue-500 rounded-full border-4 border-black mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
