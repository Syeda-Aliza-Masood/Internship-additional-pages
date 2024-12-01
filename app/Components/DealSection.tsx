const DealsSection = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-[1180px] h-auto md:h-[240px] flex flex-col md:flex-row mt-1 mb-1 rounded-md overflow-hidden">
        {/* Left Section - Title or Text (Deals and Offers) */}
        <div className="w-full md:w-1/4 h-auto md:h-full flex flex-col items-start justify-start bg-white p-4 border-b md:border-b-0 md:border-r border-gray-300 rounded-t-md md:rounded-l-md">
          {/* Deals and Offers Title */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Deals and Offers</h2>

          {/* Hygiene Equipment Text */}
          <p className="text-sm text-gray-600 mt-1">Hygiene Equipments</p>

          {/* Dark Grey Boxes with Text and Space Between */}
          <div className="w-full mt-6 md:mt-10 flex space-x-2 md:space-x-4">
            <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
              <span>04</span>
              <span>Days</span>
            </div>
            <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
              <span>13</span>
              <span>Hours</span>
            </div>
            <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
              <span>34</span>
              <span>Mins</span>
            </div>
            <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
              <span>56</span>
              <span>Sec</span>
            </div>
          </div>
        </div>

        {/* Right Section - 5 Image Parts */}
        <div className="w-full md:w-3/4 h-auto md:h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 rounded-b-md md:rounded-r-md p-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center bg-white border-b md:border-b-0 md:border-r border-gray-300 p-2`}
            >
              <img
                src={`${index + 1}.png`}
                alt={`Deal ${index + 1}`}
                className={`w-full max-h-[150px] object-cover rounded-md transition-transform duration-300 hover:scale-105`}
              />
              <p className="mt-2 text-sm md:text-base text-center">
                {["Smart Watches", "Laptops", "GoPro Cameras", "Headphones", "Canon Cameras"][index]}
              </p>
              <div className="mt-1 bg-red-500 text-white text-xs py-1 px-3 rounded-full opacity-80">
                {["-25%", "-15%", "-40%", "-25%", "-25%"][index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
