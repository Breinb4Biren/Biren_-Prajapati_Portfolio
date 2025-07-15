// src/components/Skills.tsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiPostgresql } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-blue-500">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
