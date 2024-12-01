'use client'
import { useState } from "react";
import Navbar from "./NavBar";
import Secondbar from "./Secondbar";
import SubscribeSection from "./Subscribe";
import Footer from "./Footer";

export default function ProductListingPage() {
  // Sample data for products with unique images and ratings
  const products = [
    { id: 1, name: "Sample Product 1", price: "$99.99", rating: 4.5, image: "/images/14.png" },
    { id: 2, name: "Sample Product 2", price: "$89.99", rating: 4.0, image: "/images/15.jpg" },
    { id: 3, name: "Sample Product 3", price: "$79.99", rating: 3.5, image: "/images/19.jpg" },
    { id: 4, name: "Sample Product 4", price: "$119.99", rating: 5.0, image: "/images/18.jpg" },
    { id: 5, name: "Sample Product 5", price: "$109.99", rating: 4.2, image: "/images/16.png" },
    { id: 6, name: "Sample Product 6", price: "$129.99", rating: 3.8, image: "/images/17.jpg" },
    { id: 7, name: "Sample Product 7", price: "$139.99", rating: 4.7, image: "/images/20.jpg" },
    { id: 8, name: "Sample Product 8", price: "$149.99", rating: 4.3, image: "/images/21.jpg" },
   
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Secondbar */}
      <Secondbar />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 bg-white shadow-lg p-4 max-h-[700px] overflow-y-auto mt-6 mb-5 border rounded-md">
          <h3 className="font-bold mb-4">Filters</h3>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Category</label>
            <select className="w-full border rounded p-2">
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Living</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Price Range</label>
            <input type="range" className="w-full" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Brand</label>
            <select className="w-full border rounded p-2">
              <option>All</option>
              <option>Brand A</option>
              <option>Brand B</option>
              <option>Brand C</option>
            </select>
          </div>
          <div className="flex space-x-4 mt-20">
            {/* Shopping Cart Button with Icon */}
            <div className="text-center">
              <img
                src="/images/shopping.png" // Replace with your cart icon image path
                alt="Shopping Cart"
                className="mx-auto mb-6 w-12 h-12"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Shopping Cart
              </button>
            </div>

            {/* User Account Button with Icon */}
            <div className="text-center">
              <img
                src="/images/user.jpg" // Replace with your user icon image path
                alt="User Account"
                className="mx-auto mb-6 w-12 h-12"
              />
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                User Account
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded shadow p-4 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 object-cover mb-2 rounded-lg"
                />
                <h4 className="font-bold">{product.name}</h4>
                <p className="text-gray-700">{product.price}</p>
                <p className="text-yellow-500">⭐ {product.rating}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              className={`px-3 py-1 border rounded ${currentPage === 1 ? "bg-gray-300" : "bg-white"}`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 border rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-white"}`}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </main>
      </div>
      {/* Subscribe */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
