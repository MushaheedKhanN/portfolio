
const Header = () => {
  return (
    <header className="text-white px-8 py-10 flex flex-col md:flex-row justify-between items-center bg-gray-900">
      <div>
        <h1 className="text-4xl font-bold">Elias</h1>
        <p className="text-purple-500">
          web designer & front-end developer
        </p>
        <p className="mt-2 text-gray-400">We craft responsive websites using modern technologies</p>
        <button className="mt-4 px-4 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition">
          Contact me
        </button>
      </div>
      <div className="mt-6 md:mt-0">
        <img src="/profile.png" alt="Elias" className="w-48 h-48 object-cover rounded-full" />
      </div>
    </header>
  );
};

export default Header;
