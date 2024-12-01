'use client'
import { useState } from "react";
import Navbar from "./NavBar";
import Secondbar from "./Secondbar";
import SubscribeSection from "./Subscribe";
import Footer from "./Footer";
import Image from 'next/image';


export default function ProductDetailsPage() {
  // Product details sample data
  const product = {
    id: 1,
    title: "Blender",
    price: "$699.99",
    description: "A high-performance blender with advanced features and sleek design.",
    specifications: {
      brand: "IVAS",
      model: "2024",
      color: "Maroon",
      warranty: "1 Year",
    },
    rating: 4.5,
    reviews: [
      { user: "Alice", comment: "Amazing product! Totally worth it." },
      { user: "Bob", comment: "Good value for the price." },
    ],
    image: "/images/14.png", // Corrected image path
  };

  // Related products sample data
  const relatedProducts = [
    {
      id: 2,
      name: "Juicer",
      price: "$1299.99",
      image: "/images/15.jpg", // Corrected image path
    },
    {
      id: 3,
      name: "Hand Mixer",
      price: "$199.99",
      image: "/images/18.jpg", // Corrected image path
    },
    {
      id: 4,
      name: "Iron",
      price: "$499.99",
      image: "/images/17.jpg", // Corrected image path
    },
    {
      id: 5,
      name: "Food Factory",
      price: "$699.99",
      image: "/images/19.jpg", // Corrected image path
    },
  ];

  const [zoom, setZoom] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Secondbar */}
      <Secondbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Large Product Image */}
          <div className="lg:w-1/2">
            <div
              className={`border rounded-lg overflow-hidden ${
                zoom ? "scale-105" : ""
              } transition-transform duration-300`}
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
            >
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-gray-800 font-semibold mb-4">
              {product.price}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* Specifications */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings & Reviews */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Ratings & Reviews:</h3>
              <p className="text-yellow-500">⭐ {product.rating}</p>
              <ul className="mt-2 space-y-2">
                {product.reviews.map((review, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-bold">{review.user}:</span> {review.comment}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div
                key={related.id}
                className="bg-white border rounded shadow p-4 hover:shadow-lg"
              >
                {/* Adjusted Image Size */}
                <Image
                  src={related.image}
                  alt={related.name}
                  className="w-full h-50 object-cover mb-2 rounded-lg" // Reduced size and added rounded corners
                />
                <h4 className="font-bold">{related.name}</h4>
                <p className="text-gray-700">{related.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Subscribe */}
       <SubscribeSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
