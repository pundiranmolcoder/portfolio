import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        Interested in working together? Let’s connect!
      </p>
      <a
        href="mailto:pundiranmol@gmail.com"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
      >
        Email Me
      </a>
    </section>
  );
}
