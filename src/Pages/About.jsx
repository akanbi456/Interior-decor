import React from 'react'
import { Link } from 'react-router-dom'
import Navabr from '../component/Navbar'
    
const About = () => {
  return (
    

<div>
    
    
      <Navabr/>
    <section className="relative overflow-hidden text-white bg-slate-900">
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40">
        </div>
      </div>

      <div className="container relative px-4 py-20 mx-auto lg:py-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
            Transforming Homes,
            <span className="text-slate-300"> Creating Stories</span>
          </h1>
          <p className="mb-8 text-xl leading-relaxed lg:text-2xl opacity-90">
            For over a decade, we've been curating exceptional home decor that reflects your unique style and creates
            spaces where memories are made.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to='/shop'>
              <button size="lg" className="p-3 bg-white border text-slate-900 hover:bg-slate-100">
                Shop Our Collection
              </button>
            </Link>
            <Link to='/contact'>
              <button
                
                size="lg"
                className="p-3 text-white bg-transparent border border-white hover:bg-white hover:text-slate-900"
              >
                Work With Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}





export default About