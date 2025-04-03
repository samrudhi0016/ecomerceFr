import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-48 w-full h-fit">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">MyShoppy</p>
        <p className="text-sm text-gray-400">Your one-stop shop for everything you need.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} MyShoppy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;