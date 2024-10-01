import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../services/api";
import ImgSlider from "../components/ImgSlider";
import PlayStore from "../components/PlayStore";
import ProductCard from "../components/ProductCart";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData.slice(0, 9));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <ImgSlider />
        <div className="home text-center p-4">
          <h1 className="text-4xl text-teal-800 font-bold mb-10 mt-6">
            Featured Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="mt-10 bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 px-6 rounded"
          >
            View All Products
          </button>
        </div>
        <br />
        <PlayStore />
        <br />
      </div>
    </>
  );
};

export default Home;
