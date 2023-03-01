import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Sign Up to our News Letter to stay updated
        </p>
        <p className="footer-subscription-text">Unsubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input
              type="emai"
              name="email"
              className="footer-input"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/aboutUs">What we do</Link>
            <Link to="/aboutUs">Careers</Link>
            <Link to="/aboutUs">Ts&C's</Link>
          </div>

          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/aboutUs">Email: classicPorsche@gmail.com</Link>
            <Link to="/aboutUs">Tell: 075-954-1022 </Link>
            <Link to="/aboutUs">LinkedIn: classicPorsche</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Socials</h2>
            <Link to="/aboutUs">Instagram</Link>
            <Link to="/aboutUs">FaceBook</Link>
            <Link to="/aboutUs">Youtube</Link>
          </div>

          <div className="footer-link-items">
            <h2>Projects</h2>
            <Link to="/aboutUs">Classic Porsche racing team</Link>
            <Link to="/aboutUs">Restorations</Link>
            <Link to="/aboutUs">Up and coming</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Classic Porsche <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">Classic-Porsche @2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="FaceBook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
