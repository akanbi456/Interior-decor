import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext' 
import { useNavigate } from 'react-router-dom'
import { Decor } from '../data/Decor'
import { Wineholder } from '../data/Wineholder'

const Decors = () => {
  const { addToCart } = useCart()
  const navigate = useNavigate() 

  return (
    <div>
      <div className="p-6 md:p-12">
        <button
          onClick={() => navigate('/shop')}
          className="px-4 py-2 ml-4 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          ← Back to Shop
        </button>
      </div>

      {/* Decor Section */}
      <h1 className="mb-6 text-3xl font-bold text-center">Decors Collection</h1>
      <div className="grid grid-cols-2 gap-8 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Decor.map((decor) => (
          <div
            key={decor.id}
            className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
          >
            <img
              src={decor.image}
              alt={decor.name}
              className="object-cover w-full h-56"
            />
            <div className="flex flex-col justify-between h-40 p-4">
              <div>
                <h2 className="text-lg font-semibold">{decor.name}</h2>
                <p className="mt-1 text-gray-600">
                  ₦{decor.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => addToCart(decor)}
                className="flex items-center justify-center px-4 py-2 mt-4 text-white transition bg-black rounded-lg hover:bg-gray-800"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Wine Holder Section */}
      <h1 className="mb-6 text-3xl font-bold text-center">Wine Holder Collection</h1>
      <div className="grid grid-cols-2 gap-8 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Wineholder.map((decor) => (
          <div
            key={decor.id}
            className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
          >
            <img
              src={decor.image}
              alt={decor.name}
              className="object-cover w-full h-56"
            />
            <div className="flex flex-col justify-between h-40 p-4">
              <div>
                <h2 className="text-lg font-semibold">{decor.name}</h2>
                <p className="mt-1 text-gray-600">
                  ₦{decor.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => addToCart(decor)}
                className="flex items-center justify-center px-4 py-2 mt-4 text-white transition bg-black rounded-lg hover:bg-gray-800"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Decors
