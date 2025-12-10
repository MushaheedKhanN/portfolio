import React from 'react';

const Skills = () => {
  return (
    <section className="px-8 py-16 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-8">#skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <p>TypeScript, JavaScript, Python, HTML, CSS</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <p>SQLite, Postgres</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Tools & Frameworks</h3>
          <p>React, Node.js, Flask, Express</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
