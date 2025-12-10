import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section className="px-8 py-16 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-4">#contacts</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <a href="mailto:example@mail.com" className="flex items-center gap-2 hover:text-purple-500">
          <FaEnvelope /> Message me
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-purple-500">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-purple-500">
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contacts;
