import React from 'react'

const Form = () => {
  return (
    <div>
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form
            className="p-6 space-y-6 shadow-md bg-gray-50 rounded-xl"
            data-aos="fade-right"
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us what you need..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-black rounded-md "
            >
              Send Message
            </button>
          </form>
          </div>
    </div>
  )
}

export default Form