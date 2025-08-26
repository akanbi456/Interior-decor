

import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaSearch, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavData } from '../data/NavData';

import { useCart } from '../context/CartContext'; 


const Navbar = () => {
  const { cart } = useCart(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const cartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex items-center justify-between h-16 px-4">
          
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900">
                <span className="text-sm font-bold text-white">KB</span>
              </div>
              <span className="text-xl font-bold">Kbee_Interior</span>
            </Link>

            
            <nav className="items-center hidden space-x-6 text-sm font-medium md:flex">
              {NavData.map((item, index) => (
                <a
                  key={index}
                  href={item.Link}
                  className="transition-colors hover:text-slate-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          
          <div className="flex items-center gap-4">
            
            <div className="items-center hidden gap-2 md:flex">
              <div className="relative">
                <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 py-2 border border-gray-300 rounded-md w-[200px] lg:w-[300px] text-sm"
                />
              </div>
            </div>
<Link to='/dashboard'>
 <button className="p-2 rounded-full hover:bg-gray-100">
              <FaUser className="w-5 h-5" />
            </button></Link>
           

            <Link to="/cart" className="relative inline-block p-2 rounded-full hover:bg-gray-100">
              <FaShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cartItems}
                </span>
              )}
            </Link>

            <button
              className="p-2 rounded-full md:hidden hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="px-4 py-4 bg-white border-t md:hidden">
            <nav className="flex flex-col space-y-4">
              {NavData.map((item, index) => (
                <a
                  key={index}
                  href={item.Link}
                  className="text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Page Sections */}
    
    </>
  );
};

export default Navbar;
