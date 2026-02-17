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
        <div className="booking-page">
            <div className="booking-container">
                <h2>Book a Parking Slot</h2>
                {message && <p className={`message ${message.includes('Successful') ? 'success' : 'error'}`}>{message}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Select Slot</label>
                        <select
                            value={selectedSlotId}
                            onChange={(e) => setSelectedSlotId(e.target.value)}
                            required
                        >
                            <option value="">-- Choose an available slot --</option>
                            {availableSlots.map(slot => (
                                <option key={slot.id} value={slot.id}>{slot.number}</option>
                            ))}
                        </select>
                        {availableSlots.length === 0 && <p className="warning">No slots available!</p>}
                    </div>

                    <div className="form-group">
                        <label>Driver Name</label>
                        <input
                            type="text"
                            value={occupantName}
                            onChange={(e) => setOccupantName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Vehicle Number</label>
                        <input
                            type="text"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading || !selectedSlotId}>
                        {loading ? 'Booking...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingPage;
