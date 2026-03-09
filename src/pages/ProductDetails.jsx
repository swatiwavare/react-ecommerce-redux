import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const [product, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  if (!product) return <p>Loading.....</p>;
  return (
    <div>
      <h2>{product.title}</h2>

      <img src={product.image} width="200" />

      <p>Price: ₹{product.price}</p>

      <p>{product.description}</p>
    </div>
  );
}
export default ProductDetail;
