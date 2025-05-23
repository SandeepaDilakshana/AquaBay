import React from 'react'

function MainContent() {
  return (
    <div className="bg-[#F0F9FF] py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-[#006A71] mb-4">
        Premium Aquatic Supplies
      </h1>
      <p className="text-lg text-[#006A71] mb-8 max-w-2xl mx-auto">
        Discover everything you need for your aquarium - from exotic fish to high-quality 
        equipment, all at competitive prices.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-[#48A6A7] hover:bg-[#006A71] text-white px-6 py-2 rounded-full transition">
          Shop Now
        </button>
        <button className="border-2 border-[#48A6A7] text-[#006A71] hover:bg-[#9ACBD0]/20 px-6 py-2 rounded-full transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default MainContent