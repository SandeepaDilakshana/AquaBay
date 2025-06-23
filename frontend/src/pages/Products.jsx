import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { id: 1, name: 'Fish Food', count: 24 },
    { id: 2, name: 'Aquariums', count: 12 },
    { id: 3, name: 'Filters & Pumps', count: 18 },
    { id: 4, name: 'Decorations', count: 32 },
    { id: 5, name: 'Water Care', count: 15 },
  ];

  const products = [
    { id: 1, name: 'Premium Flake Food', price: 12.99, category: 'Fish Food' },
    { id: 2, name: '55 Gallon Tank Kit', price: 249.99, category: 'Aquariums' },
    { id: 3, name: 'Canister Filter', price: 89.99, category: 'Filters & Pumps' },
    { id: 4, name: 'Sunken Ship Decor', price: 24.99, category: 'Decorations' },
    { id: 5, name: 'Water Conditioner', price: 8.99, category: 'Water Care' },
    { id: 6, name: 'Algae Wafers', price: 6.99, category: 'Fish Food' },
    { id: 7, name: '10 Gallon Starter Kit', price: 79.99, category: 'Aquariums' },
    { id: 8, name: 'Air Pump', price: 15.99, category: 'Filters & Pumps' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <a href="#" className="flex justify-between hover:text-blue-600">
                    <span>{category.name}</span>
                    <span>({category.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product List */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">All Products</h1>
            <div>
              <select className="border rounded px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="bg-gray-100 h-48"></div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
                  <p className="text-blue-600 font-bold mt-2">Rs.{product.price.toFixed(2)}</p>
                  <div className="mt-4 flex justify-between">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                    <Link 
                      to={`/products/Rs.{product.id}`}
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex space-x-2">
              <a href="#" className="px-3 py-1 border rounded">1</a>
              <a href="#" className="px-3 py-1 border rounded">2</a>
              <a href="#" className="px-3 py-1 border rounded">3</a>
              <a href="#" className="px-3 py-1 border rounded">Next</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;