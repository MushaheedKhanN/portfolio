import { FaLinkedin, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section className="p-7 mt-2 text-white bg-amber-400 rounded-sm" id='contact'>
      <h2 className="text-3xl font-bold mb-4">#Contacts</h2>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6">
        <a className="flex items-center gap-2 hover:text-purple-500">
          <FaPhoneSquare /> +91 948 035 9438
        </a>
        <a href="mailto:mushaheedkhan17@gmail.com" className="flex items-center gap-2 hover:text-purple-500">
          <FaEnvelope /> mushaheedkhan17@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/mushaheed-khan-n-a283691a4" target='_blank' className="flex items-center gap-2 hover:text-purple-500">
          <FaLinkedin /> www.linkedin.com/in/mushaheed-khan-n-a283691a4
        </a>
        <p></p>
        {/* <a href="#" className="flex items-center gap-2 hover:text-purple-500">
          <FaGithub /> GitHub
        </a> */}
      </div>
    </section>
  );
};

export default Contacts;
