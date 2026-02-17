import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Smart Parking System</h1>
                    <p className="hero-subtitle">Simplify your campus parking experience with real-time tracking and instant booking.</p>
                    <div className="hero-actions">
                        <Link to="/booking" className="btn btn-primary btn-lg">Book a Slot Now</Link>
                        <Link to="/dashboard" className="btn btn-outline btn-lg">View Dashboard</Link>
                    </div>
                </div>
                <div className="hero-shape"></div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Parking Spots</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Surveillance</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Hassle-Free</span>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="section-header">
                    <h2>Why Choose Us?</h2>
                    <p>Experience the future of parking management.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚗</div>
                        <h3>Real-time Tracking</h3>
                        <p>Visual dashboard shows available spots instantly. No more circling around.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Easy Booking</h3>
                        <p>Secure your spot in seconds from any device. Simple and fast.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3>Secure & Safe</h3>
                        <p>Monitored environment providing safety for your vehicle.</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="how-it-works-section">
                <div className="section-header">
                    <h2>How It Works</h2>
                    <p>Get started in 3 simple steps.</p>
                </div>
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Check Availability</h3>
                        <p>View the dashboard to find open slots in real-time.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Book Your Spot</h3>
                        <p>Fill out the simple form to reserve your space.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Park & Go</h3>
                        <p>Arrive and park hassle-free. We handle the rest.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="cta-section">
                <h2>Ready to park smarter?</h2>
                <Link to="/booking" className="btn btn-white btn-lg">Get Started Today</Link>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">SmartParking</div>
                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/booking">Booking</Link>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Smart Parking System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
