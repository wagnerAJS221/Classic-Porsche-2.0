import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.js'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import AboutUs from './components/pages/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={Services()} />
          <Route path="/products" element={Products()} />
          <Route path="/sign-up" element={SignUp()} />
          <Route path="/sign-up" element={AboutUs()} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
