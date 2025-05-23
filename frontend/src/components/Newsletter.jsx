function Newsletter() {
  return (
    <div className="py-12 px-6 bg-sky-50 text-black text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-6 max-w-xl mx-auto">
        Subscribe to get exclusive offers and aquarium care tips
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Your email address"
          className="px-4 py-2 rounded-full text-gray-800 flex-grow"
        />
        <button className="bg-[#48A6A7] hover:bg-[#9ACBD0] px-6 py-2 rounded-full font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter