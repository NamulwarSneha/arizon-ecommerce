import { Link } from "react-router-dom"
import "../styles/Categories.css"

const categories = [
  {
    id: 1,
    name: "Men's Clothing",
    image: "/placeholder.jpg",
    url: "/products",
  },
  {
    id: 2,
    name: "Women's Clothing",
    image: "/placeholder.jpg",
    url: "/products",
  },
  {
    id: 3,
    name: "Jewelry",
    image: "/placeholder.jpg",
    url: "/products",
  },
  {
    id: 4,
    name: "Electronics",
    image: "/placeholder.jpg",
    url: "/products",
  },
]

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Browse our wide selection of products across various categories</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link key={category.id} to={category.url} className="category-card">
              <div className="category-image-container">
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="category-image" />
                <div className="category-overlay">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories