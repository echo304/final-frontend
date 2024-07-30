import React, { useEffect, useState } from 'react';
import Toast from './Toast';
import useToast from './hooks/useToast';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    showToast('Item removed from cart.');
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const orderAllAndClearCart = () => {
    showToast('Thank you for your purchase!');
    localStorage.removeItem('cart');
    setCart([]);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-none">
            {cart.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center">
                  <img src={item.imgUrl} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded-lg border border-gray-300 p-2" />
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p>${item.price}</p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-600">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
            <button
              onClick={orderAllAndClearCart}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Order All
            </button>
          </div>
        </>
      )}
      <Toast message={toast.message} show={toast.show} duration={toast.duration} onClose={hideToast} />
    </div>
  );
};

export default Cart;
