import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold text-green-600">Thank you!</h1>
      <p className="mb-6 text-lg">
        Your order has been placed successfully. We’ll send you an update via email.
      </p>
      <div className="space-x-4">
        <Link
          to="/"
          className="px-6 py-2 text-white bg-black rounded hover:bg-gray-800"
        >
          Back to Home
        </Link>
        <Link
          to="/shop"
          className="px-6 py-2 text-white bg-gray-700 rounded hover:bg-gray-900"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
