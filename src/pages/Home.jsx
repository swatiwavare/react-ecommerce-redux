import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">Shop Smart. Shop Easy.</h1>

            <p className="text-lg mb-8">
              Discover amazing products at unbeatable prices.
            </p>

            <Link
              to="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Start Shopping
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="shopping"
            className="rounded-lg shadow-lg mt-10 md:mt-0 md:w-1/2"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />

              <h3 className="mt-4 font-semibold text-sm line-clamp-2">
                {product.title}
              </h3>

              <p className="text-blue-600 font-bold mt-2">${product.price}</p>

              <Link
                to={`/products/${product.id}`}
                className="block mt-3 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
