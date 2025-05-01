import { Link } from "react-router-dom"
import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Summer Collection 2023</h1>
        <p>Discover the latest trends and styles for your wardrobe</p>
        <div className="hero-buttons">
          <Link to="/products" className="shop-now-btn">
            Shop Now
          </Link>
          <Link to="#" className="learn-more-btn">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero