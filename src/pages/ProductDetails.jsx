import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Import a CSS file for styling

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-price">Price: ₹{product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
