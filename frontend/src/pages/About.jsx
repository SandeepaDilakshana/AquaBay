const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About AquaBay</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, AquaBay began as a small local fish store with a passion for aquatic life. 
            What started as a humble shop with a few tanks has grown into one of the leading aquarium 
            supply retailers in the country.
          </p>
          <p className="text-gray-700">
            Our mission has always been to provide high-quality products and expert advice to help both 
            beginners and experienced aquarists create beautiful, healthy aquatic environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Quality products from trusted brands</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Expert advice from experienced aquarists</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Commitment to animal welfare</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Exceptional customer service</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
  );
};

export default About;