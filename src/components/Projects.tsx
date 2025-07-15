'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  fork: boolean;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch('https://api.github.com/users/Breinb4Biren/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API limit hit or invalid response');
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data.filter((repo) => !repo.fork && repo.description);
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="px-6 py-20 bg-gray-950 text-white text-center">
        <p>Loading your GitHub projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="px-6 py-20 bg-gray-950 text-white text-center">
        <p className="text-red-500">⚠️ {error}</p>
      </section>
    );
  }

  return (
    <section id="projects" className="px-6 py-20 bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {repos.map((repo, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-600/50 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-gray-300 mb-4">{repo.description}</p>

            <span
              className={`inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4 ${
                repo.homepage ? 'bg-green-600' : 'bg-yellow-600'
              }`}
            >
              {repo.homepage ? 'Live' : 'In Progress'}
            </span>

            <div className="flex gap-4 mt-4">
              <a
                href={repo.html_url}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm"
              >
                <FaGithub /> GitHub
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
