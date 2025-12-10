import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu after clicking
  };

  return (
    <header className="w-full fixed bg-amber-400 shadow-md z-50">
      <nav className="mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xs font-serif text-black">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-medium">
          <li className="hover:text-white cursor-pointer" onClick={() => handleScroll("home")}>Home</li>
          <li className="hover:text-white cursor-pointer" onClick={() => handleScroll("projects")}>Projects</li>
          <li className="hover:text-white cursor-pointer" onClick={() => handleScroll("skills")}>Skills</li>
          <li className="hover:text-white cursor-pointer" onClick={() => handleScroll("contact")}>Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <ul className="md:hidden bg-amber-300 px-6 pb-4 text-black font-medium space-y-3">
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("home")}>Home</li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("projects")}>Projects</li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("skills")}>Skills</li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("contact")}>Contact</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
