import React from 'react'
import { Category } from '../data/Category'


const Main = () => {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">Shop by Category</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Find the perfect pieces for every room in your home and work place
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
          {Category.map((category) => (
            <div
              key={category.name}
              
              className="block overflow-hidden transition-shadow bg-white shadow p- rounded-xl hover:shadow-lg group"
            >
              
              <div className="p-0">
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-colors bg-black/40 group-hover:bg-black/30"></div>
                  <div className="absolute text-white bottom-4 left-4">
                    <h3 className="mb-1 text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Main
