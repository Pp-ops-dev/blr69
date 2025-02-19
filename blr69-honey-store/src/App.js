import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/SignUp'
import { BrowserRouter,Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
