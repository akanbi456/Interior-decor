import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTwitter,FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="text-white bg-slate-900">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                <span className="text-sm font-bold text-slate-900">kb</span>
              </div>
              <Link to='/ '>
              <span className="text-xl font-bold">kbee_Interior </span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Transform your home with our curated collection of premium decor items. Quality, style, and comfort in
              every piece.
            </p>
            <div className="flex space-x-4">
              
                <FaFacebook  size={30} className="text-slate-300 hover:text-white" />
              
              
                <FaInstagram size={30}  className="text-slate-300 hover:text-white"/>
              
                <FaTwitter size={30} className="text-slate-300 hover:text-white"/>
                <FaTiktok size={30} className="text-slate-300 hover:text-white"/>
                
              
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link  className="transition-colors text-slate-300 hover:text-white">
                All Products
              </Link>
              <Link href="/categories" className="transition-colors text-slate-300 hover:text-white">
                Categories
              </Link>
              <Link href="/sale" className="transition-colors text-slate-300 hover:text-white">
                Sale Items
              </Link>
              <Link className="transition-colors text-slate-300 hover:text-white">
                New Arrivals
              </Link>
              <Link  className="transition-colors text-slate-300 hover:text-white">
                About Us
              </Link>
            </nav>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/contact" className="transition-colors text-slate-300 hover:text-white">
                Contact Us
              </Link>
              <Link  className="transition-colors text-slate-300 hover:text-white">
                Shipping Info
              </Link>
              <Link  className="transition-colors text-slate-300 hover:text-white">
                Returns & Exchanges
              </Link>
              <Link  className="transition-colors text-slate-300 hover:text-white">
                FAQ
              </Link>
              <Link  className="transition-colors text-slate-300 hover:text-white">
                Size Guide
              </Link>
            </nav>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-slate-300">Subscribe to get special offers, free giveaways, and updates.</p>
           

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FaPhone className="w-4 h-4" />
                <span>+234 817 014 0337</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FaEnvelope className="w-4 h-4" />
                <span>hello@kbee_interior.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FaLocationArrow className="w-4 h-4" />
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-400">© 2025 kbee_Interior  All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer