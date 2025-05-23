function Header() {
  return (
    <div class="flex bg-sky-50 h-12 items-center justify-between px-4">
     AquaBay
      
      <div class="flex space-x-2">
        {['Home', 'Store', 'Cart', 'About Us', 'Contact Us'].map((item) => (
          <div 
            key={item}
            class="px-2 text-sm text-center rounded-full  hover:bg-teal-600 transition-colors cursor-pointer flex items-center justify-center h-6"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;