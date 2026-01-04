import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Persist dark mode in localStorage
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(20000);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                search={search} 
                price={price} 
                setPrice={setPrice} 
              />
            } 
          />
          <Route 
            path="/property/:id" 
            element={<PropertyDetails />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;