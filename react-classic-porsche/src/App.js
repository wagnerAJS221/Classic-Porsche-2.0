import { auth } from './firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
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
import CarView from './components/pages/CarView'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState({})
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  })

  return (
    <>
      <Router>
        <NavBar user={user} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={Services()} />
          <Route path="/products" element={Products()} />
          <Route
            path="/sign-up"
            element={<SignUp signUp={signUp} logIn={logIn} logOut={logOut} />}
          />
          <Route path="/aboutUs" element={AboutUs()} />
          <Route path="/car-view" element={CarView()} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
