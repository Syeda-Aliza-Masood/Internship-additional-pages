function Suplier() {
    return (
      <div className="w-full max-w-[1177px] mx-auto mt-6 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
          Suppliers by Region
        </h2>
  
        {/* Flags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { flag: "item-country.png", link: "https://example.com/country1" },
            { flag: "item-country-1.png", link: "https://example.com/country2" },
            { flag: "item-country-2.png", link: "https://example.com/country3" },
            { flag: "item-country-3.png", link: "https://example.com/country4" },
            { flag: "item-country-4.png", link: "https://example.com/country5" },
            { flag: "item-country-5.png", link: "https://example.com/country6" },
            { flag: "item-country-6.png", link: "https://example.com/country7" },
            { flag: "item-country-7.png", link: "https://example.com/country8" },
            { flag: "item-country-8.png", link: "https://example.com/country9" },
            { flag: "item-country-9.png", link: "https://example.com/country10" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
            >
              {/* Link with Flag */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.flag}
                  alt={`Flag ${index + 1}`}
                  className="w-[120px] h-auto md:w-[221px] md:h-[36px] object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Suplier;
  