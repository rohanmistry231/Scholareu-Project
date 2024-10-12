import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-500 p-3 text-white fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2024 ScholarEU. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 ease-in-out">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 ease-in-out">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 ease-in-out">
            <FaInstagram size={20} />
          </a>
        </div>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-sm mt-2 md:mt-0">
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
