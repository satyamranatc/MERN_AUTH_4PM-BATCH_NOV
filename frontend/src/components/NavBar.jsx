import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar({user}) {
  // PROBLEM: export default function GradientNavbar() {
    return (
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white px-6 py-4 shadow-xl">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="text-xl font-bold drop-shadow-md">
                    Logo
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to = "/" className="text-white hover:text-indigo-100 transition">Home</Link>
                    <Link to = "/products" className="text-white hover:text-indigo-100 transition">Products</Link>
                    {
                        user ? (
                            <Link to = "/profile" className="text-white hover:text-indigo-100 transition">Profile</Link>
                        ) : (
                            <Link to = "/auth" className="text-white hover:text-indigo-100 transition">Login</Link>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}