import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../../porscheIMG/p11.gif" autoPlay loop muted />
      <h1>DRIVE YOUR DREAM</h1>
      <p>The jouney of your dreams starts here</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BEGIN
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          SNEAK A PEAK? <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
