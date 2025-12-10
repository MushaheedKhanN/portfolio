interface Project {
  title: string;
  desc: string;
  tech: string;
  link: string;
}

const projects: Project[] = [
  { title: "ChertNodes", desc: "HTML, CSS, Python Flask", tech: "Frontend", link: "#" },
  { title: "ProtectX", desc: "React, Express, Python Flask", tech: "Security app", link: "#" },
  { title: "Kahoot Answers Viewer", desc: "CSS Express NodeJS", tech: "Tool", link: "#" },
];

const Projects = () => {
  return (
    <section className="px-8 py-16 text-white bg-gray-800">
      <h2 className="text-3xl font-bold mb-8">#projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="p-4 border border-gray-700 rounded hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-2">{p.desc}</p>
            <p className="text-purple-500 mb-2">{p.tech}</p>
            <a href={p.link} className="text-purple-500 hover:underline">Live →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
