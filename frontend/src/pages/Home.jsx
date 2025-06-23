import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Premium Fish Food', price: 15.99, image: 'fish-food.jpg' },
    { id: 2, name: 'Aquarium Starter Kit', price: 89.99, image: 'starter-kit.jpg' },
    { id: 3, name: 'Live Plants Bundle', price: 24.99, image: 'plants.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AquaBay</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your premier destination for all aquarium supplies and fish care products
          </p>
          <Link 
            to="/products" 
            className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-gray-100 h-48"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold mt-2">Rs.{product.price.toFixed(2)}</p>
                <Link 
                  to={`/products/Rs.{product.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About AquaBay</h2>
            <p className="text-lg mb-6">
              Founded in 2010, AquaBay has been providing aquarium enthusiasts with high-quality products 
              and expert advice. Our team of passionate fish keepers is dedicated to helping you create 
              the perfect aquatic environment.
            </p>
            <Link 
              to="/about" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;