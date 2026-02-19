import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParkingSlot from './ParkingSlot';

const Dashboard = () => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSlots = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/slots');
            setSlots(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching slots:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSlots();
    }, []);

    const handleFreeSlot = async (slotId) => {
        if (window.confirm("Are you sure you want to free this slot?")) {
            try {
                await axios.post(`http://localhost:5000/api/free/${slotId}`);
                fetchSlots();
            } catch (error) {
                console.error("Error freeing slot:", error);
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Parking Dashboard</h1>
                    <p className="text-slate-500 font-medium">Monitor real-time space availability and manage active sessions.</p>
                </div>
                <div className="flex gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Available</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-xl">
                        <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                        <span className="text-sm font-bold text-rose-700 uppercase tracking-wider">Occupied</span>
                    </div>
                </div>
            </header>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-24">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-6 text-slate-500 font-bold animate-pulse">Syncing live data...</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {slots.map(slot => (
                        <div key={slot.id} className="group relative">
                            <ParkingSlot
                                slot={slot}
                                onSelect={() => { }} // No action on select in dashboard now
                            />
                            {slot.status === 'occupied' && (
                                <button
                                    className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90 z-10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleFreeSlot(slot.id);
                                    }}
                                    title="Free Slot"
                                >
                                    <span className="text-lg">×</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
