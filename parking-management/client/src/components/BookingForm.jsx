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
        <div className="booking-form-overlay">
            <div className="booking-form-container">
                <h2>Book Slot {selectedSlot.number}</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Driver Name:</label>
                        <input
                            type="text"
                            value={occupantName}
                            onChange={(e) => setOccupantName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Vehicle Number:</label>
                        <input
                            type="text"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
                        <button type="submit" disabled={loading} className="submit-btn">
                            {loading ? 'Booking...' : 'Book Now'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
