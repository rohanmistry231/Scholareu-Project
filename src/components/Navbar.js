import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import logo from '../components/logo.png';  // Ensure the logo image is placed in the public folder
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      navigate(`/search?query=${query}`); // Navigate to the search results page with the query
    }
  };

  return (
    <nav className="bg-blue-500 p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <Link to="/" className="text-white text-lg font-bold">
            ScholarEU
          </Link>
        </div>

        {/* Navigation Links with Hover Animation */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link to="/scholarships" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Scholarships
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
