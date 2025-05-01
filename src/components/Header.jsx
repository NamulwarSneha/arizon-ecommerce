import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import MiniCart from "./MiniCart"
import "../styles/Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo">
            E-Com
          </Link>

          <nav className="desktop-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Shop
            </Link>
            <Link to="#" className="nav-link">
              Categories
            </Link>
            <Link to="#" className="nav-link">
              About
            </Link>
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </nav>

          <div className="header-icons">
            <button className="icon-btn">
              <i className="search-icon">🔍</i>
            </button>
            <button className="icon-btn">
              <i className="user-icon">👤</i>
            </button>
            <div className="cart-icon-container">
              <button className="icon-btn" onClick={() => setIsMiniCartOpen(!isMiniCartOpen)}>
                <i className="cart-icon">🛒</i>
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </button>

              {isMiniCartOpen && <MiniCart onClose={() => setIsMiniCartOpen(false)} />}
            </div>

            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Shop
            </Link>
            <Link to="#" className="nav-link">
              Categories
            </Link>
            <Link to="#" className="nav-link">
              About
            </Link>
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header