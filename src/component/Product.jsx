import React from 'react'
import { product } from '../data/Product'
const Product = () => {
  return (
    <div>
      
         <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 lg:grid-cols-3"> 
                  {product.map((product) => (
                    <div
                      key={product.id}
                      className="overflow-hidden transition-shadow bg-white cursor-pointer group hover:shadow-lg"
                    >
                      <div className="p-0">
                        <div className="relative">
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                            />
                          </Link>
                        </div>
                        <div className="p-4">
                          <h3 className="mb-2 text-lg font-semibold text-slate-800 hover:text-slate-600">
                            {product.name}
                          </h3>
                          <p className="text-xl font-bold text-slate-900">₦{product.price}</p>
                          <button
                            onClick={() => addToCart(product)}
                            className="flex items-center gap-2 px-4 py-2 mt-4 text-white bg-black rounded hover:bg-gray-800"
                          >
                            <FaShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
        
    </div>
  )
}

export default Product