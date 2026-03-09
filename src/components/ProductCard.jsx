import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductCard.css"; // Import a CSS file

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`} className="view-details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
