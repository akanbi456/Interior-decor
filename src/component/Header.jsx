import React from 'react'
import Section from '../component/Section';
import Main from '../component/Main';
import Article from '../component/Article';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
const Header = () => {
  return (
    <div>
        <Navbar/>

          <Section />
      <Main />
      <Article />
      <Footer />

    </div>
  )
}

export default Header