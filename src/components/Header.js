import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Rising Recruitment</div>
      <nav>
        <a href="#" className="mx-2">Home</a>
        <a href="#" className="mx-2">Services</a>
        <a href="#" className="mx-2">About Us</a>
        <a href="#" className="mx-2">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
