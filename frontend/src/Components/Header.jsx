import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow-md rounded-b-lg">
            <div className="flex justify-between items-center px-8 py-4">
                <div className="flex items-center space-x-3">
                    {/* Example logo/icon */}
                    <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-sm">
                        MA
                    </span>
                    <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">Mern Auth</h1>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="p-2 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="p-2 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors font-medium">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="p-2 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors font-medium">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="p-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold shadow">
                                Sign Up
                            </Link>
                        </li>   
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
