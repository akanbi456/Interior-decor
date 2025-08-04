import React from 'react'
import { Link } from 'react-router-dom'
import image from '../component/Image/image.jpg'
const Section = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-slate-50 to-slate-100 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-slate-900">
                Transform Your Space with
                <span className="text-slate-600"> Elegant Decor</span>
              </h1>
              <p className="max-w-lg text-xl text-slate-600">
                Step into a world where the art of interior design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation, Allowing you to transform your living and your work spaces into the epitome of luxury and sophistication
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to='/shop'>
                <button size="lg" className="w-full p-3 text-white bg-black border sm:w-auto">
                  Shop Now
                </button>
              </Link>
              <Link href="/categories">
                <button variant="outline" size="lg" className="w-full p-3 bg-transparent bg-black border text-green sm:w-auto">
                  Browse Categories
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Expert Support
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={image}
              alt=""
              className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section