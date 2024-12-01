function Footer() {
  return (
    <div className="w-full mx-auto mt-6 bg-gray-100 p-4 border-b-4 border-blue-500"> {/* Blue border added here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Column 1: Logo, Text, Image */}
        <div className="flex flex-col items-start mb-3 mt-8">
          <img
            src="/logo.png" // Replace with your logo image
            alt="Logo"
            className="max-w-full"
          />
          <p className="text-sm mt-1 mb-1">Best information about the company</p>
          <p className="text-sm mt-1 mb-1">Gies here lorem ipsum is</p>
          <img
            src="/icon.png" // Replace with your 200x32 image
            alt="Footer Image"
            className="w-[200px] h-[32px] mt-5"
          />
        </div>

        {/* Column 2 - 6: Images */}
        <div className="flex items-center justify-center">
          <img
            src="/about.png" // Replace with your image
            alt="Image 1"
            className="w-[81px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/partnership.png" // Replace with your image
            alt="Image 2"
            className="w-[90px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/info.png" // Replace with your image
            alt="Image 3"
            className="w-[108px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/user.png" // Replace with your image
            alt="Image 4"
            className="w-[78px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/app.png" // Replace with your image
            alt="Image 5"
            className="w-[124px] h-[129px] object-cover max-w-full"
          />
        </div>
      </div>

      {/* Footer Line */}
      <div className="mt-4 border-t border-gray-300 text-center pt-4">
        <p className="text-sm text-gray-500">© 2024 Developed by Syeda Aliza Masood.</p>
      </div>
    </div>
  );
}

export default Footer;
