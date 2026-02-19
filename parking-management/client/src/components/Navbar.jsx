import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 glass border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to={user ? "/home" : "/login"} className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">P</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">
                                Park<span className="text-blue-600">Smart</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {user ? (
                                <>
                                    <li><Link to="/home" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link></li>
                                    <li><Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Dashboard</Link></li>
                                    <li><Link to="/booking" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Book Slot</Link></li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="ml-4 px-5 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200 active:scale-95"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/login" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Login</Link></li>
                                    <li>
                                        <Link
                                            to="/signup"
                                            className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                                        >
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
