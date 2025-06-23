import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // In a real app, you would fetch product data based on the ID
  const product = {
    id: 1,
    name: 'Premium Tropical Fish Food',
    price: 15.99,
    description: 'High-quality nutrition for all tropical fish. Contains essential vitamins and minerals to promote vibrant colors and healthy growth.',
    category: 'Fish Food',
    rating: 4.5,
    reviews: 42,
    inStock: true,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 h-96 rounded-lg mb-4"></div>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gray-100 h-20 rounded"></div>
            <div className="bg-gray-100 h-20 rounded"></div>
            <div className="bg-gray-100 h-20 rounded"></div>
            <div className="bg-gray-100 h-20 rounded"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-gray-600">{product.reviews} reviews</span>
          </div>

          <p className="text-2xl font-bold text-blue-600 mb-6">Rs.{product.price.toFixed(2)}</p>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity:</label>
            <div className="flex">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border border-gray-300 px-3 py-1 rounded-l"
              >
                -
              </button>
              <span className="border-t border-b border-gray-300 px-4 py-1">
                {quantity}
              </span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="border border-gray-300 px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mr-4">
            Add to Cart
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Buy Now
          </button>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold mb-2">Category:</h3>
            <p className="text-gray-600">{product.category}</p>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-blue-500 font-medium">
              Description
            </button>
            <button className="py-4 px-1 text-gray-500 hover:text-gray-700">
              Reviews ({product.reviews})
            </button>
            <button className="py-4 px-1 text-gray-500 hover:text-gray-700">
              Shipping & Returns
            </button>
          </nav>
        </div>

        <div className="py-6">
          <h3 className="font-bold text-lg mb-4">Detailed Description</h3>
          <p className="text-gray-700">
            Our Premium Tropical Fish Food is formulated with high-quality ingredients to provide complete 
            nutrition for all tropical fish species. This floating pellet food is enriched with vitamins, 
            minerals, and color enhancers to support vibrant colors, healthy growth, and optimal health.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Contains natural color enhancers for vibrant fish colors</li>
            <li>Highly digestible formula reduces waste</li>
            <li>Fortified with essential vitamins and minerals</li>
            <li>Suitable for all tropical freshwater fish</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;