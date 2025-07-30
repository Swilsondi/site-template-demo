import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
        <h1 className="text-xl font-bold">TechMotive Supreme</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#demos" className="hover:text-gray-300">Demo Sites</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-2 text-sm">
          <a href="#features" className="block">Features</a>
          <a href="#services" className="block">Services</a>
          <a href="#demos" className="block">Demo Sites</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
};
