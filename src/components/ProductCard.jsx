import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div style={styles.card}>
      <img src={product.image} style={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};
const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    width: "200px",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
};
export default ProductCard;
