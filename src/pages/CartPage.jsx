"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/CartPage.css"

function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [shippingMethod, setShippingMethod] = useState("standard")

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = shippingMethod === "express" ? 15 : 5
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart</h1>
        <p>Your cart is currently empty.</p>
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="product-cell">
                    <div className="product-info">
                      <img src={item.image || "/placeholder.svg"} alt={item.title} />
                      <div className="product-title">{item.title}</div>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-adjuster">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="quantity-btn">
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-item">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="shipping-options">
            <p>Shipping</p>
            <div className="shipping-option">
              <label>
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  checked={shippingMethod === "standard"}
                  onChange={() => setShippingMethod("standard")}
                />
                <span>Standard Shipping - $5.00</span>
              </label>
            </div>
            <div className="shipping-option">
              <label>
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  checked={shippingMethod === "express"}
                  onChange={() => setShippingMethod("express")}
                />
                <span>Express Shipping - $15.00</span>
              </label>
            </div>
          </div>

          <div className="total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage