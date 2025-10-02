import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center shadow-inner">
      <p className="text-gray-600 mb-3">
        © {new Date().getFullYear()} Anmol Pundir. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/anmol-pundir/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800 text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/pundiranmolcoder"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-black text-xl"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
