import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.js'
// import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
