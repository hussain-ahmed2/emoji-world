import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ search, setSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-blue-700 py-2 shadow-md" : "bg-blue-600 py-4"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-white">Emoji World 🌍</h1>
        <input
          type="text"
          placeholder="Search emojis..."
          className="mt-2 sm:mt-0 p-2 rounded w-full sm:w-64 text-gray-900"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};