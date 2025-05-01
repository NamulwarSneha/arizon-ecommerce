import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Categories from "../components/Categories"
import "../styles/HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}

export default HomePage