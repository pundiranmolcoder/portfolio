import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Full Stack E-Commerce App",
      description: "Built with Java + React + MongoDB. Includes secure payments & user sessions.",
      link: "#"
    },
    {
      title: "Cloud-based Microservices App",
      description: "Deployed containerised services on AWS using Docker & Kubernetes.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <a
                href={p.link}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
