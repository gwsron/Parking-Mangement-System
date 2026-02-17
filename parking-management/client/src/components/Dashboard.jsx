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
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Parking Dashboard</h1>
                <div className="legend">
                    <span className="legend-item available">Available</span>
                    <span className="legend-item occupied">Occupied</span>
                </div>
            </header>

            <p className="dashboard-info">Click "Free Slot" to release an occupied parking space.</p>

            {loading ? (
                <p>Loading slots...</p>
            ) : (
                <div className="slots-grid">
                    {slots.map(slot => (
                        <div key={slot.id} className="slot-wrapper">
                            <ParkingSlot
                                slot={slot}
                                onSelect={() => { }} // No action on select in dashboard now
                            />
                            {slot.status === 'occupied' && (
                                <button
                                    className="free-btn"
                                    onClick={() => handleFreeSlot(slot.id)}
                                >
                                    Free Slot
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
