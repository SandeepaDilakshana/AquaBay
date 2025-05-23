function ProductShowcase() {
  const products = [
    {
      name: "Marine Coral Pack",
      price: "Rs.450.oo",
      image: "🪸"
    },
    {
      name: "Betta Fish Starter Kit",
      price: "Rs.650.00",
      image: "🐟"
    },
    {
      name: "LED Aquarium Light",
      price: "Rs.700.00",
      image: "💡"
    }
  ];

  return (
    <div className="py-16 px-6 bg-[#F0F9FF]">
      <h2 className="text-3xl font-bold text-center text-[#006A71] mb-12">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg text-center hover:transform hover:scale-105 transition"
          >
            <div className="text-6xl mb-4">{product.image}</div>
            <h3 className="text-xl font-medium mb-2">{product.name}</h3>
            <p className="text-lg font-bold text-[#48A6A7] mb-4">{product.price}</p>
            <button className="bg-[#9ACBD0] hover:bg-[#48A6A7] text-[#006A71] px-4 py-1 rounded-full text-sm">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase