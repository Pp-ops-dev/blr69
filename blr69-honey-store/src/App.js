import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter,Routes, Route,  useNavigate } from 'react-router-dom'


function App() {
  return (
    <div>
    <BrowserRouter>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
