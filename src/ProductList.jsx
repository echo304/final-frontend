import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductSearch from './ProductSearch';
import { getAllProducts } from './apis/product';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Product List</h1>
        <Link to="/cart" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          View Cart
        </Link>
      </div>
      <ProductSearch setProducts={setProducts} />
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product, i) => (
          <Link to={`/product/${product.id}`} key={`Product_${product._id}`}>
            <div className="border rounded-lg p-4 shadow-lg w-64">
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <img src={product.imgUrl} className="w-56 h-56" />
              <p className="mt-2 text-lg font-bold">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
