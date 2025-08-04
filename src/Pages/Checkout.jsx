import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center">Checkout</h2>
            <div className="grid max-w-5xl gap-10 p-8 mx-auto bg-white shadow-md md:grid-cols-2 rounded-xl">
               
        <form  className="space-y-6">
          <h3 className="mb-4 text-xl font-semibold">Billing Details</h3>

          <input type="text" name="name"   placeholder="Full Name" className="w-full p-3 border rounded" required />
          <input type="email" name="email"   placeholder="Email Address" className="w-full p-3 border rounded" required />
          <input type="text" name="address"  placeholder="Shipping Address" className="w-full p-3 border rounded" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border rounded" required />

          <div className="flex gap-4">
            <input type="text" name="city"  placeholder="City" className="w-1/2 p-3 border rounded" required />
             <input type="text" name="country"  placeholder="Country" className="w-1/2 p-3 border rounded" required />
            
          </div>
             <div>
                          <h3 className="mt-6 mb-2 text-xl font-semibold">Payment Method</h3>
                           <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="radio" name="paymentMethod" value="bank_transfer" required />
                <span>Bank</span>
              </label>
              </div>

             </div>
               <button type="submit" className="w-full py-3 mt-4 text-white bg-black rounded hover:bg-gray-800">
            Place Order
          </button>
</form>
</div>
    </div>
  );
};

export default Checkout;
