import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Tropical Fish Food', price: 12.99, quantity: 2, image: 'fish-food.jpg' },
    { id: 2, name: 'Aquarium Filter', price: 29.99, quantity: 1, image: 'filter.jpg' }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row border-b border-gray-200 py-6">
                <div className="sm:w-1/4 mb-4 sm:mb-0">
                  <div className="bg-gray-100 h-32 w-full rounded-lg"></div>
                </div>
                <div className="sm:w-3/4 sm:pl-6">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 mt-1">Rs.{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-4">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border border-gray-300 px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="border-t border-b border-gray-300 px-4 py-1">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border border-gray-300 px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 font-semibold">
                    Rs.{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs.{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs.{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;