import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ selectedSlot, onBookingSuccess, onCancel }) => {
    const [occupantName, setOccupantName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post(`http://localhost:5000/api/book/${selectedSlot.id}`, {
                occupantName,
                vehicleNumber
            });
            onBookingSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Booking failed');
        } finally {
            setLoading(false);
        }
    };

    if (!selectedSlot) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
            <div className="w-full max-w-md animate-scale-in">
                <div className="glass rounded-[2rem] p-10 border border-white/40 shadow-2xl relative">
                    <button
                        onClick={onCancel}
                        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900"
                    >
                        ×
                    </button>

                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 shadow-lg shadow-blue-500/20">
                            P
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Slot {selectedSlot.number}</h2>
                        <p className="text-slate-500 font-medium text-sm">Fill in details to complete booking</p>
                    </div>

                    {error && (
                        <div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-sm font-medium mb-6 animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Driver Name</label>
                            <input
                                type="text"
                                value={occupantName}
                                onChange={(e) => setOccupantName(e.target.value)}
                                placeholder="Full name"
                                className="input-smart !py-2.5"
                                required
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Vehicle Number</label>
                            <input
                                type="text"
                                value={vehicleNumber}
                                onChange={(e) => setVehicleNumber(e.target.value)}
                                placeholder="MH 12 AB 1234"
                                className="input-smart !py-2.5"
                                required
                            />
                        </div>

                        <div className="pt-4 flex gap-3">
                            <button
                                type="button"
                                onClick={onCancel}
                                className="flex-1 py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                            >
                                {loading ? 'Booking...' : 'Book Now'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
