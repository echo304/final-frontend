import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from './apis/product';
import Toast from './Toast';
import useToast from './hooks/useToast';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    async function fetchData() {
      const response = await getProduct(id);
      setProduct(response);
      checkIfInCart(response);
    }
    fetchData();
  }, [id]);

  const checkIfInCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      setIsInCart(true);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsInCart(true);
    showToast(`${product.name} has been added to your cart!`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-3">Product Detail</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img src={product.imgUrl} alt={product.name} className="max-w-full rounded-lg border border-gray-300 p-2" />
        </div>
        <div className="w-full md:w-2/3 p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-red-500 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <ul className="list-none mb-4">
            <li className="mb-2"><strong>Category:</strong> {product.category}</li>
          </ul>
          <div className="flex space-x-4">
            {!isInCart ? (
              <button
                onClick={addToCart}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
                Already in Cart
              </button>
            )}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Toast message={toast.message} show={toast.show} duration={toast.duration} onClose={hideToast} />
    </div>
  );
};

export default ProductDetail;
