import React from 'react'
import Navigation from './Navigation/Navigation'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Footer from './Pages/Footer'
import CartPage from './Pages/CartPage'
import Payment from './Payment/Payment'
import Success from './Payment/Success'
import Failure from './Payment/Failure'
import ProtectedRoutes from './Auth/ProtectedRoutes'
import Login from './Auth/Login'
import ProfilePage from './Auth/Profile'
import Profile from './Pages/profile'



function App() {
  return (
    <div>

      <Navigation/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path="/profile" element={<Profile />} />
         <Route path='/protectedRoutes' element={<ProtectedRoutes/>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App