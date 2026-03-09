import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css"; // Import a CSS file for styles

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="products-container">
      <h2 className="products-title">Products</h2>

      {/* Search Input */}
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Product List */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
