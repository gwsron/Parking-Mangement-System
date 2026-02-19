import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email: username,
                password
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            onLogin(response.data.user);
            navigate('/home');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-4">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

            <div className="w-full max-w-md relative">
                <div className="glass rounded-[2rem] p-10 border border-white/40 shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl shadow-blue-500/30">
                            P
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h2>
                        <p className="text-slate-500 mt-2 font-medium">Log in to manage your parking</p>
                    </div>

                    {error && (
                        <div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-sm font-medium mb-6 animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="name@company.com"
                                className="input-smart"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="input-smart"
                                required
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98]"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center border-t border-slate-100 pt-8">
                        <p className="text-slate-500 font-medium">
                            New here? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
