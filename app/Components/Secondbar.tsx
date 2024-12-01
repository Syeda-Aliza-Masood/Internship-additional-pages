"use client";

import Link from "next/link";

function Secondbar() {
    return (
        <section className="bg-white py-2 border border-gray-300 sm:border-2 md:border-2 lg:border-2 xl:border-2 rounded">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                {/* Left Content */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full md:w-auto">
                    <img src="/menu.png" alt="Category Icon" className="h-6 w-6 mb-2 md:mb-0" />
                    <Link href="/All Category" className="text-sm text-black hover:text-blue-600">
                        All Category
                    </Link>
                    <Link href="/Hot Offers" className="text-sm text-black hover:text-blue-600">
                        Hot Offers
                    </Link>
                    <Link href="/Gift Boxes" className="text-sm text-black hover:text-blue-600">
                        Gift Boxes
                    </Link>
                    <Link href="/Projects" className="text-sm text-black hover:text-blue-600">
                        Projects
                    </Link>
                    <Link href="/Menu Item" className="text-sm text-black hover:text-blue-600">
                        Menu Item
                    </Link>

                    {/* Dropdown for Help, FAQ, Contact */}
                    <select className="px-1 py-1 bg-white text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Help</option>
                        <option>FAQ</option>
                        <option>Contact</option>
                    </select>
                </div>

                {/* Right Content */}
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
                    {/* Language Dropdown */}
                    <select className="px-4 py-2 bg-white text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>English, USD</option>
                        <option>Spanish, EUR</option>
                        <option>French, GBP</option>
                    </select>

                    {/* Ship To Dropdown */}
                    <select className="px-4 py-2 bg-white text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Ship To</option>
                        <option>China</option>
                        <option>UAE</option>
                        <option>US</option>
                        <option>Germany</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default Secondbar;