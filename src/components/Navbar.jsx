import { FaSearch, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode, search, setSearch }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-sm dark:bg-gray-900 dark:text-white bg-white border-b">
      <h1 className="text-2xl font-bold text-red-500">Airbnb</h1>
      
      <div className="flex items-center border rounded-full px-4 py-2 shadow-sm dark:bg-gray-800 dark:border-gray-600 bg-white">
        <input
          className="outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Search location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="text-red-500 ml-2" />
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
        </button>
        <FaUserCircle size={28} className="text-gray-600 dark:text-gray-400" />
      </div>
    </div>
  );
};

export default Navbar;