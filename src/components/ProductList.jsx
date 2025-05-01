"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import "../styles/ProductList.css"

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")

        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError("Error loading products. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="product-list loading">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="product-card-skeleton">
            <div className="image-skeleton"></div>
            <div className="title-skeleton"></div>
            <div className="price-skeleton"></div>
            <div className="button-skeleton"></div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList