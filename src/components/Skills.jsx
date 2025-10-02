import React from "react";

export default function Skills() {
  const skills = ["Java", "React.js", "MongoDB", "Docker", "Kubernetes", "AWS", "Big Data", "AI/ML"];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
