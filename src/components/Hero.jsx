import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import myPhoto from "../assets/anmol.jpg"; // Your LinkedIn Profile image
import LinkedInProfile from "./LinkedInProfile";


export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
            <LinkedInProfile imageUrl={myPhoto} size={120} />
      <h2 className="text-5xl md:text-6xl font-bold">Hi, I'm Anmol 👋</h2>
      <p className="mt-4 text-xl md:text-2xl">
        Software Engineer | Java | React | Cloud | Big Data
      </p>

      <div className="flex space-x-6 mt-6">
        <a
          href="https://www.linkedin.com/in/anmol-pundir/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-5 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
        >
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/pundiranmolcoder"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-5 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200"
        >
          <FaGithub /> <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}