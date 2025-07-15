'use client';
import React from 'react';
import Image from 'next/image';
import AboutIntro from './About/AboutIntro';
import TechStack from './About/TechStack';
import ExperienceTimeline from './About/ExperienceTimeline';


const About = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-20 gap-10">

        {/* Profile Sidebar - Always visible, Fixed only on large screens */}
        <aside className="w-full md:w-1/3 flex flex-col items-center md:items-start md:fixed md:top-28 md:left-0 h-auto md:h-full mb-10 md:mb-0 md:pl-10">

          {/* Profile Image */}
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mb-4">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={240}
              height={240}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Name + Tick Badge */}
          <div className="flex items-center space-x-2 text-lg md:text-xl font-semibold text-white">
            <span>Biren Prajapati</span>
            <span className="relative w-5 h-5 md:w-6 md:h-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full animate-pulse">
                <circle cx="12" cy="12" r="10" fill="#3B82F6" />
                <path
                  d="M9.5 12.5l2 2 3.5-4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-sm text-gray-400 mt-1 text-center md:text-left">
            Passionate Web Creator | 3rd Year at IIITG
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/biren-prajapati-5799991b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.75v2.2h.05c.52-.98 1.78-2.2 3.7-2.2 3.95 0 4.68 2.6 4.68 5.98V24h-4v-7.8c0-1.86-.03-4.27-2.6-4.27-2.6 0-3 2.03-3 4.13V24h-4V8z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Breinb4Biren"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-500 transition"
            >
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.85 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.77 2.73 1.26 3.4.96.1-.76.4-1.26.72-1.56-2.55-.3-5.23-1.28-5.23-5.67 0-1.25.45-2.28 1.18-3.08-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.2 1.2.94-.26 1.94-.4 2.94-.4s2 .14 2.94.4c2.2-1.52 3.18-1.2 3.18-1.2.65 1.6.25 2.8.13 3.1.74.8 1.17 1.83 1.17 3.08 0 4.4-2.7 5.37-5.26 5.66.42.37.78 1.1.78 2.2v3.26c0 .3.2.66.8.56C20.2 21.4 23.5 17.1 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:prajapatibiren8@gmail.com"
              aria-label="Email"
              className="hover:text-blue-500 transition"
            >
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 13.065l-11.7-6.63c-.19-.107-.3-.295-.3-.502s.11-.396.3-.503L12 .367l11.7 6.63c.19.107.3.295.3.503s-.11.395-.3.502L12 13.065zm0 2.77l11.7-6.63c.19-.107.3-.295.3-.503s-.11-.395-.3-.502L12 2.43 0 8.2c-.19.107-.3.295-.3.502s.11.395.3.503l11.7 6.63z" />
              </svg>
            </a>
          </div>
        </aside>

        {/* Scrollable Right Side */}
        <main className="w-full md:ml-[35%] space-y-16">
          <AboutIntro />
          <TechStack />
          <ExperienceTimeline/>
          {/* Later: Education, Experience, Certifications... */}
        </main>
      </div>
    </div>
  );
};

export default About;
