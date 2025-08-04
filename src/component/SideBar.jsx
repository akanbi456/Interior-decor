import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Categories } from '../data/Categories';
import { Link } from 'react-router-dom';


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Toggle button (mobile only) */}
      <button
        onClick={toggleSidebar}
        className="fixed z-50 p-2 text-white bg-black rounded top-4 left-4 md:hidden"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static`}
      >
        <h2 className="mb-6 text-lg font-semibold text-center">Categories</h2>
      <ul className="px-4 space-y-4">
  {Categories.map((category) => (
    <li key={category.name}>
      <Link
        to={category.Link}
        className="block font-medium text-gray-700 hover:text-gray-600"
      >
        {category.name}
      </Link>
    </li>
  ))}
</ul>
      </aside>

    
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
        />
      )}
    </>
  );
};

export default SideBar;
