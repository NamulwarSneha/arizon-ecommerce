import ProductList from "../components/ProductList"
import "../styles/ProductsPage.css"

function ProductsPage() {
  return (
    <div className="products-page">
      <h1>All Products</h1>
      <ProductList />
    </div>
  )
}

export default ProductsPage