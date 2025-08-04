import React from "react";
import { Shop } from "../data/Shop";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; 

const Article = () => {
  const { addToCart } = useCart(); 

  return (
    <article className="py-16 lg:py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            Featured Products
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Handpicked items that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 lg:grid-cols-3">
          {Shop.map((product) => (
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

        <div className="mt-12 text-center">
          <Link to="/shop">
            <button className="p-3 border">View All Products</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
