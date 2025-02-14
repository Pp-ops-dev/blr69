import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Contact from '../components/ContactForm'
import Footer from '../components/Footer'
import '../styles/home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
