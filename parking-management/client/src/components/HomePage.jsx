import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white pt-16 pb-32 lg:pt-32 lg:pb-48">
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-50/50"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                                <span className="block">Parking management</span>
                                <span className="block text-blue-600">made effortless.</span>
                            </h1>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                                Simplify your campus parking experience with real-time tracking,
                                instant booking, and a seamless visual dashboard.
                                Secure your spot in seconds.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                                <Link
                                    to="/booking"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                                >
                                    Book a Slot <span aria-hidden="true">&rarr;</span>
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
                                >
                                    Live Dashboard
                                </Link>
                            </div>
                        </div>

                        <div className="relative mt-12 lg:col-span-6 lg:mt-0 flex items-center justify-center">
                            <div className="relative mx-auto w-full max-w-lg">
                                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                                <div className="relative glass rounded-3xl p-8 border border-white/40 shadow-2xl">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                            <span className="text-slate-500 font-medium">Available Spots</span>
                                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">42 Active</span>
                                        </div>
                                        <div className="grid grid-cols-4 gap-3">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className={`h-12 rounded-lg ${i % 3 === 0 ? 'bg-rose-100 border border-rose-200' : 'bg-emerald-50 border border-emerald-100'}`}></div>
                                            ))}
                                        </div>
                                        <div className="bg-blue-50 rounded-2xl p-4 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                                🚗
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-blue-900">Your Reserved Spot</p>
                                                <p className="text-xs text-blue-700">Level 2, Slot B-12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {[
                        { label: 'Parking Spots', value: '500+', icon: '🅿️' },
                        { label: 'Active Users', value: '2k+', icon: '👥' },
                        { label: 'Success Rate', value: '99.9%', icon: '✅' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-50 flex items-center gap-6">
                            <div className="text-4xl">{stat.icon}</div>
                            <div>
                                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest">Efficiency</h2>
                        <p className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                            Everything you need to park smarter.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Real-time Tracking', desc: 'Visual dashboard shows available spots instantly. No more circling around.', icon: '🛰️', color: 'blue' },
                            { title: 'Easy Booking', desc: 'Secure your spot in seconds from any device. Simple and fast.', icon: '⚡', color: 'amber' },
                            { title: 'Secure & Safe', desc: 'Monitored environment providing maximum safety for your vehicle.', icon: '🛡️', color: 'emerald' }
                        ].map((feature, i) => (
                            <div key={i} className="group relative bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${feature.color}-50 text-4xl mb-8 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 pt-20 pb-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-slate-800 pb-12">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                                <span className="text-xl font-bold text-white">ParkSmart</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The ultimate solution for modern parking management.
                                Secure, fast, and user-friendly.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                            <div>
                                <h4 className="text-white font-bold mb-6">Product</h4>
                                <ul className="space-y-4 text-slate-400 text-sm">
                                    <li><Link to="/booking" className="hover:text-blue-400 transition-colors">Booking</Link></li>
                                    <li><Link to="/dashboard" className="hover:text-blue-400 transition-colors">Live Status</Link></li>
                                    <li><Link to="/home" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-6">Support</h4>
                                <ul className="space-y-4 text-slate-400 text-sm">
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
                                    <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-xs">
                            &copy; {new Date().getFullYear()} ParkSmart System. Built for efficiency.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
