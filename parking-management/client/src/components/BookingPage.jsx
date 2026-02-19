import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const [slots, setSlots] = useState([]);
    const [selectedSlotId, setSelectedSlotId] = useState('');
    const [occupantName, setOccupantName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchSlots();
    }, []);

    const fetchSlots = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/slots');
            setSlots(response.data);
        } catch (error) {
            console.error("Error fetching slots", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await axios.post(`http://localhost:5000/api/book/${selectedSlotId}`, {
                occupantName,
                vehicleNumber
            });
            setMessage('Booking Successful! Redirecting...');
            setTimeout(() => navigate('/dashboard'), 1500);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Booking failed');
        } finally {
            setLoading(false);
        }
    };

    const availableSlots = slots.filter(slot => slot.status === 'available');

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-4 py-12">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

            <div className="w-full max-w-xl relative">
                <div className="glass rounded-[2rem] p-10 sm:p-12 border border-white/40 shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl shadow-blue-500/30">
                            P
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Reserve a Spot</h2>
                        <p className="text-slate-500 mt-2 font-medium">Quickly secure your parking space</p>
                    </div>

                    {message && (
                        <div className={`px-4 py-3 rounded-xl text-sm font-medium mb-6 animate-fade-in ${message.includes('Successful')
                            ? 'bg-emerald-50 border border-emerald-100 text-emerald-600'
                            : 'bg-rose-50 border border-rose-100 text-rose-600'
                            }`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Select Available Slot</label>
                            <div className="relative">
                                <select
                                    value={selectedSlotId}
                                    onChange={(e) => setSelectedSlotId(e.target.value)}
                                    required
                                    className="input-smart appearance-none cursor-pointer"
                                >
                                    <option value="">-- Choose a location --</option>
                                    {availableSlots.map(slot => (
                                        <option key={slot.id} value={slot.id}>Parking Slot {slot.number}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">
                                    ↓
                                </div>
                            </div>
                            {availableSlots.length === 0 && <p className="text-rose-500 text-xs font-bold mt-1">⚠️ No slots available at the moment!</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Driver's Full Name</label>
                            <input
                                type="text"
                                value={occupantName}
                                onChange={(e) => setOccupantName(e.target.value)}
                                placeholder="Enter driver name"
                                className="input-smart"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Vehicle License Plate</label>
                            <input
                                type="text"
                                value={vehicleNumber}
                                onChange={(e) => setVehicleNumber(e.target.value)}
                                placeholder="e.g. MH 12 AB 1234"
                                className="input-smart"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading || !selectedSlotId}
                            >
                                {loading ? 'Processing...' : 'Confirm Reservation'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
