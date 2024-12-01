"use client";

function Navbar() {
    return (
        <nav className="bg-white text-black  ">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo with Image */}
                <div className="text-2xl font-bold">
                    <a href="#" className="hover:text-gray-300">
                        <img
                            src="../logo.png" // Replace with your logo image URL
                            alt="MyWebsite Logo"
                            className="h-10 w-auto"
                        />
                    </a>
                </div>

                {/* Search Bar with Dropdown and Search Button */}
                <div className="flex-1 hidden md:flex justify-center">
                    <div className="flex w-[90%] md:w-[70%]">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-1 px-4 bg-white text-black rounded-l-lg border border-gray-300 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Dropdown */}
                        <select className="py-1 px-2 bg-white text-black text-sm border border-gray-300 rounded-none focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All category</option>
                            <option>Automobiles</option>
                            <option>Clothes and wear</option>
                            <option>Home interiors</option>
                            <option>Computer and tech</option>
                            <option>Tools, equipments</option>
                            <option>Sports and outdoor</option>
                            <option>Animal and pets</option>
                            <option>Machinery tools</option>
                            <option>More category</option>
                        </select>

                        {/* Search Button */}
                        <button
                            className="py-1 px-4 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Links Section */}
                <div className="hidden md:flex items-center justify-end space-x-6 flex-shrink-0">
                    <ul className="flex space-x-6">
                        <li className="flex flex-col items-center">
                            <a href="#" className="text-sm hover:text-gray-300 flex flex-col items-center">
                                <img src="../pro.png" alt="Profile" className="h-5 w-5 mb-1" />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li className="flex flex-col items-center">
                            <a href="#" className="text-sm hover:text-gray-300 flex flex-col items-center">
                                <img src="../msg.png" alt="Message" className="h-5 w-5 mb-1" />
                                <span>Message</span>
                            </a>
                        </li>
                        <li className="flex flex-col items-center">
                            <a href="#" className="text-sm hover:text-gray-300 flex flex-col items-center">
                                <img src="../order.png" alt="Order" className="h-5 w-5 mb-1" />
                                <span>Order</span>
                            </a>
                        </li>
                        <li className="flex flex-col items-center">
                            <a href="#" className="text-sm hover:text-gray-300 flex flex-col items-center">
                                <img src="../my cart.png" alt="My Cart" className="h-5 w-5 mb-1" />
                                <span>My Cart</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden block text-gray-300 hover:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className="md:hidden">
                <ul className="space-y-4 p-4 bg-white">
                    <li>
                        <a href="#" className="text-sm text-black hover:text-blue-600">Profile</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-black hover:text-blue-600">Message</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-black hover:text-blue-600">Order</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-black hover:text-blue-600">My Cart</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-black hover:text-blue-600">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
