"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import "../styles/FeaturedProducts.css"

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products?limit=8")

        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Discover our handpicked selection of the finest products, curated just for you.</p>
        </div>

        {loading ? (
          <div className="product-list loading">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="product-card-skeleton">
                <div className="image-skeleton"></div>
                <div className="title-skeleton"></div>
                <div className="price-skeleton"></div>
                <div className="button-skeleton"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts