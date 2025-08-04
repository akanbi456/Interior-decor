import React from 'react';
import SideBar from '../component/SideBar';
import Navbar from '../component/Navbar';
import { product } from '../data/Product';
import { useCart } from '../context/CartContext'; 
import { FaShoppingCart } from 'react-icons/fa';   

const Shop = () => {
  const { addToCart } = useCart(); 

  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />

        
    

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {product.map((item) => (
              <div
                key={item.id}
                className="p-4 transition border rounded-lg shadow hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                                        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"

                />
                <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="mt-1 font-semibold text-green-600">₦{item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="flex items-center gap-2 px-4 py-2 mt-3 text-white bg-black rounded hover:bg-gray-800"
                >
                  <FaShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default Shop;
