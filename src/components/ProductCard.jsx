"use client"
import { useCart } from "../context/CartContext"
import "../styles/ProductCard.css"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard