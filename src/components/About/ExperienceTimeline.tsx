'use client';
import React from 'react';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Chinmay Finlease Ltd.',
    period: 'May 2024 – July 2024',
    description: [
      'Worked on Node.js-based backend APIs with Express and PostgreSQL.',
      'Handled internal tools for financial operations.',
      'Learned team collaboration and real-world deployment workflows.',
    ],
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Remote',
    period: 'Jan 2024 – Present',
    description: [
      'Developed responsive web apps using Next.js and Tailwind CSS.',
      'Built authentication systems, dashboards, and job schedulers.',
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-blue-500 mb-12 text-center">Work Experience</h2>

      <div className="relative border-l border-gray-700 max-w-3xl mx-auto pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Dot */}
            <span className="absolute -left-3.5 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />

            {/* Content */}
            <h3 className="text-xl font-semibold text-white">
              {exp.title}{' '}
              <span className="text-blue-400 font-normal">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
