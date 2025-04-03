import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Cart } from './pages/Cart'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <div className='bg-gray-100'>
      <Navbar/>
      <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </div>
    </>
    
  )
}

export default App