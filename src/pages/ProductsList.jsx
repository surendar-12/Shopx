import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "../components/ProductCard";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  if (status === "loading") return <p className="loading-msg">Loading products...</p>;
  if (status === "failed") return <p className="error-msg">Error: {error}</p>;

  return (
    <div className="products-list">
      {items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
