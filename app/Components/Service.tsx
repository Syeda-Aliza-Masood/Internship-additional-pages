function ServiceSection() {
    return (
      <div className="mx-auto mt-6 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
          Our extra services
        </h2>
  
        {/* Grid of Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Box 1 */}
          <a href="https://example.com/service1" target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img
                src="/33.png"
                alt="Service 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </a>
  
          {/* Box 2 */}
          <a href="https://example.com/service2" target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img
                src="/34.png"
                alt="Service 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </a>
  
          {/* Box 3 */}
          <a href="https://example.com/service3" target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img
                src="/35.png"
                alt="Service 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </a>
  
          {/* Box 4 */}
          <a href="https://example.com/service4" target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img
                src="/36.png"
                alt="Service 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
  
  export default ServiceSection;
  