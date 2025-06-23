const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AquaBay</h3>
            <p className="text-blue-200">
              Your one-stop shop for all aquarium needs. We provide quality products for fish lovers.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="/products" className="text-blue-200 hover:text-white">Products</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-blue-200 not-italic">
              <p>123 Aqua Street</p>
              <p>Fishville, FA 12345</p>
              <p>Email: info@aquaworld.com</p>
              <p>Phone: 0768354420</p>
            </address>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
          <p>Copyright &copy; {new Date().getFullYear()} AquaBay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;