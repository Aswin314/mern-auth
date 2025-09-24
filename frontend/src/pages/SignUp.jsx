import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const HandleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                setError(data.message || "Something went wrong. Please try again.");
            } else {
                setError(null);
                // Optionally redirect or show success message here
                console.log(data);
            }
        } catch (err) {
            setLoading(false);
            setError("Network error. Please try again.");
            console.log(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Sign Up</h1>
                <form className="space-y-5" onSubmit={HandleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={HandleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={HandleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={HandleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow"
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                    {error && (
                        <p className="mt-2 text-center text-red-600 font-medium">{error}</p>
                    )}
                    <p className="mt-4 text-center text-gray-600">
                        Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
