'use client';
import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-10 text-center">Get in Touch</h2>
      <form
        action="https://prajapatibiren8@email.com"
        method="POST"
        className="w-full max-w-xl bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
