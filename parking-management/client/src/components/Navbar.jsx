import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/home" className="logo">Parking System</Link>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/booking">Book Slot</Link></li>
                    <li>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
