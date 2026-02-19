import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        vehicleNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { fullName, email, phoneNumber, vehicleNumber, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters long");
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                fullName,
                email,
                phoneNumber,
                vehicleNumber,
                password
            });

            if (response.data.success) {
                alert("Registration successful! Redirecting to login...");
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-4 py-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

            <div className="w-full max-w-2xl relative">
                <div className="glass rounded-[2rem] p-10 sm:p-12 border border-white/40 shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl shadow-blue-500/30">
                            P
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
                        <p className="text-slate-500 mt-2 font-medium">Join ParkSmart today for effortless parking</p>
                    </div>

                    {error && (
                        <div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-sm font-medium mb-6 animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={fullName}
                                    onChange={onChange}
                                    placeholder="John Doe"
                                    className="input-modern"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    placeholder="john@example.com"
                                    className="input-smart"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={onChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="input-smart"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Vehicle Number</label>
                                <input
                                    type="text"
                                    name="vehicleNumber"
                                    value={vehicleNumber}
                                    onChange={onChange}
                                    placeholder="MH 12 AB 1234"
                                    className="input-smart"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        placeholder="••••••••"
                                        className="input-smart"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 font-bold text-xs"
                                    >
                                        {showPassword ? "HIDE" : "SHOW"}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Confirm Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={onChange}
                                    placeholder="••••••••"
                                    className="input-smart"
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center border-t border-slate-100 pt-8">
                        <p className="text-slate-500 font-medium">
                            Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
