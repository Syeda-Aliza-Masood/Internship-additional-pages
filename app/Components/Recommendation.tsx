function Recommendation() {
    return (
      <div className="w-full max-w-[1180px] mx-auto mt-3 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
          Recommended Items
        </h2>
  
        {/* Grid of Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {/* Recommended Item Boxes */}
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className="w-full h-[310px] bg-white rounded-lg shadow-md flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`${23 + index}.png`}
                alt={`Recommended Item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Recommendation;
  