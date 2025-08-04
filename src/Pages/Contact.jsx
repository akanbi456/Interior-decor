import React from 'react'
import Navbar from '../component/Navbar'
import Form from '../component/Form'


const Contact = () => {
  return (
    <div>
        <Navbar/>
         <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100 lg:py-20">
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl text-slate-900">Get in Touch</h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-slate-600">
          Have questions about our products? Need design advice? Want to schedule a consultation? We're here to help you
          create the perfect space.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Free design consultations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Expert advice available</span>
          </div>
        </div>
      </div>
      
    </section>
    <Form/>
    
    </div>
  )
}

export default Contact