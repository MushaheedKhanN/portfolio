import React from "react";

const Portfolio: React.FC = () => {
  const projects = [
    { name: "Project One", description: "A cool project built with React.", link: "#" },
    { name: "Project Two", description: "Another awesome project.", link: "#" },
    { name: "Project Three", description: "My latest work.", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Mushaheed Khan</h1>
        <p className="text-gray-600">Frontend Developer | React & TypeScript</p>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a passionate frontend developer specializing in React and TypeScript. I enjoy
          building beautiful and functional web applications using modern tools like Tailwind CSS
          and Ant Design.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-lg shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>Email: <a href="mailto:mushaheed@example.com" className="text-blue-500">mushaheed@example.com</a></p>
        <p className="mt-2">
          LinkedIn:{" "}
          <a href="#" className="text-blue-500 hover:underline">
            linkedin.com/in/mushaheed
          </a>
        </p>
        <p className="mt-2">
          GitHub:{" "}
          <a href="#" className="text-blue-500 hover:underline">
            github.com/mushaheed
          </a>
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
