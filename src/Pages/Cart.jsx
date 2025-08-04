// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, incrementQty, decrementQty } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  

  return (
    <>
      <div className="min-h-screen p-6 bg-white lg:p-12">
        <h2 className="mb-8 text-3xl font-bold">Shopping Cart</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center p-4 text-white bg-black rounded-lg shadow">
                <img src={item.image} alt={item.name} className="object-cover w-20 h-20 mr-4 bg-white rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-300">
                    Color: {item.color || ''} &nbsp; Size: {item.size || 'Standard'}
                  </p>
                  <p className="mt-2 text-xl font-bold">₦{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="w-8 h-8 text-black bg-white rounded"
                  >
                    –
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="w-8 h-8 text-black bg-white rounded"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">
                  <FiTrash2 size={20} />
                </button>
              </div>
            ))}
          </div>

      
          <div className="w-full p-6 text-white bg-black rounded-lg shadow lg:w-1/3">
            <h3 className="mb-4 text-2xl font-bold">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>₦{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₦{tax.toFixed(2)}</span>
              </div>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full py-3 mt-6 font-semibold text-black bg-white rounded hover:bg-gray-100">
                Proceed to Checkout
              </button>
            </Link>
            <Link to="/shop">
              <button className="w-full py-3 mt-3 border border-white rounded hover:bg-white hover:text-black">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
