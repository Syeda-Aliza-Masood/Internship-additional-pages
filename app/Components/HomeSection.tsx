'use client'
import { useRouter } from "next/navigation"
function HomeSection() {

  const router=useRouter()
  const handleHomeAppliances =()=>{router.push("/HomeAppliances")}
  return (
    <div className="w-full h-auto flex justify-center items-center mt-3 mb-3 px-4">
      <div className="w-full max-w-[1180px] h-full flex flex-col md:flex-row bg-gray-100 rounded-md shadow-lg">
        {/* Left Section - Single Box with Image */}
        <div className="w-full md:w-1/4 bg-custom-image bg-cover bg-center flex flex-col items-start justify-center p-6 md:p-4 rounded-t-md md:rounded-l-md">
          <p className="text-black font-bold text-lg md:text-xl mb-3">
            Home and<span className="block">Outdoor</span>
          </p>
          <button onClick = {handleHomeAppliances} className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition-colors">
            Source Now
          </button>
        </div>

        {/* Right Section - 8 Boxes */}
        <div className="w-full md:w-3/4 h-full flex flex-col p-4 rounded-b-md md:rounded-r-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {/* All 8 Boxes */}
            {[6, 7, 8, 9, 10, 11, 12, 13].map((num, index) => (
              <div key={index} className="relative">
                <img
                  src={`${num}.png`}
                  alt={`Box ${index + 1}`}
                  className="w-full h-36 md:h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
