"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/MiniCart.css"

function MiniCart({ onClose }) {
  const { cart, removeFromCart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="mini-cart">
      <div className="mini-cart-header">
        <h3>Your Cart ({cart.length} items)</h3>
        <button onClick={onClose} className="close-btn">
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-mini-cart">Your cart is empty</div>
      ) : (
        <>
          <div className="mini-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="mini-cart-item">
                <div className="item-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                </div>
                <div className="item-details">
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mini-cart-subtotal">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="mini-cart-actions">
            <Link to="/cart" className="view-cart-btn" onClick={onClose}>
              View Cart
            </Link>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default MiniCart