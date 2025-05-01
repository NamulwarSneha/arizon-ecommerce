import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>E-com</h3>
            <p>
              E-com is a premium fashion brand dedicated to creating high-quality, sustainable clothing for the modern
              individual.
            </p>
            <div className="social-icons">
              <a className="social-icon">
                <i className="facebook-icon">📘</i>
              </a>
              <a className="social-icon">
                <i className="twitter-icon">📘</i>
              </a>
              <a className="social-icon">
                <i className="instagram-icon">📷</i>
              </a>
              <a className="social-icon">
                <i className="youtube-icon">📺</i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Shop</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li>
                <Link>My Account</Link>
              </li>
              <li>
                <Link>Orders & Returns</Link>
              </li>
              <li>
                <Link>Shipping Policy</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li className="contact-item">
                <i className="location-icon">📍</i>
                <span>123 Fashion Street, New York, NY 10001, USA</span>
              </li>
              <li className="contact-item">
                <i className="phone-icon">📞</i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="contact-item">
                <i className="email-icon">✉️</i>
                <span>info@mellowfashion.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mellow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer