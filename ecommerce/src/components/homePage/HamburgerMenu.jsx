import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const HamburgerMenu = ({shopOpen,setShopOpen,menuOpen})=>{
 
  

  return(
    <>
        {/* Mobile Menu */}
        {menuOpen && (
            <nav className="flex flex-col items-center gap-6 py-8 md:hidden">
            <Link to="/" className="text-lg text-gray-600">
                Home
            </Link>

            <Link to="/" className="text-lg text-gray-600">
                Product
            </Link>

            <Link to="/" className="text-lg text-gray-600">
                Pricing
            </Link>

            {/* Shop dropdown */}
            <button
                onClick={() => setShopOpen(!shopOpen)}
                className="flex items-center gap-2 text-lg text-gray-600"
            >
                Shop
                <ChevronDown className="w-4 h-4" />
            </button>

            {shopOpen && (
                <div className="flex flex-col items-center gap-3">
                <Link to="/shop1" className="text-gray-500">
                    Shop 1
                </Link>
                <Link to="/shop2" className="text-gray-500">
                    Shop 2
                </Link>
                <Link to="/shop3" className="text-gray-500">
                    Shop 3
                </Link>
                </div>
            )}

            <Link to="/" className="text-lg text-gray-600">
                About
            </Link>

            <Link to="/" className="text-lg text-gray-600">
                Blog
            </Link>

            <Link to="/contact" className="text-lg text-gray-600">
                Contact
            </Link>

            <Link to="/" className="text-lg text-gray-600">
                Pages
            </Link>

            {/* Login / Register */}
            <div className="flex  gap-2 text-sm text-blue-600">
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/register">Register</Link>
            </div>
            </nav>
        )}
      </>
  )

}