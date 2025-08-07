
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    country: "",
    paymentMethod: "",
  });

  const [receiptFile, setReceiptFile] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    if (formData.paymentMethod === "bank_transfer") {
      if (!receiptFile) {
        toast.warning("Please upload your payment receipt.");
        return;
      }

      toast.info("Order processing. Your payment is being reviewed and you will get an email soon.");
      console.log("Order with receipt:", formData, receiptFile);
      navigate("/confirmation");
      return;
    }

    if (formData.paymentMethod === "cod") {
      toast.success("Order placed. You will pay upon delivery.");
      console.log("Order placed:", formData);
      navigate("/confirmation");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl">Checkout</h2>

      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] min-h-screen p-4 md:p-6 bg-gray-100 gap-4">
        {/* Billing Form */}
        <div className="grid w-full gap-8 p-4 mx-auto bg-white shadow-md md:p-6 md:grid-cols-2 rounded-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="mb-4 text-lg font-semibold md:text-xl">Billing Details</h3>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded"
              required
            />

            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-3 border rounded md:w-1/2"
                required
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full p-3 border rounded md:w-1/2"
                required
              />
            </div>

            <div>
              <h3 className="mt-6 mb-2 text-lg font-semibold md:text-xl">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    onChange={handleChange}
                    required
                  />
                  <span>Bank</span>
                </label>

                {formData.paymentMethod === "bank_transfer" && (
                  <div className="p-4 mt-2 ml-2 space-y-3 text-sm bg-gray-100 border rounded">
                    <div>
                      <p>
                        <strong>Account Name:</strong> FabricHub Ltd
                      </p>
                      <p>
                        <strong>Bank:</strong> Opay
                      </p>
                      <p>
                        <strong>Account Number:</strong> 8034578910
                      </p>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Upload Receipt</label>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => setReceiptFile(e.target.files[0])}
                        className="block w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                )}

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    onChange={handleChange}
                    required
                  />
                  <span>Payment on Delivery</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-black rounded hover:bg-gray-800"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full p-4 bg-white shadow-md rounded-xl lg:w-auto">
          <h3 className="mb-4 text-2xl font-bold">Order Summary</h3>
          <div className="space-y-2 text-sm md:text-base">
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
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₦{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
