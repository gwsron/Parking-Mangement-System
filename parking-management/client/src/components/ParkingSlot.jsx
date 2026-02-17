import React from 'react';

const ParkingSlot = ({ slot, onSelect }) => {
    const isOccupied = slot.status === 'occupied';

    return (
        <div
            className={`parking-slot ${isOccupied ? 'occupied' : 'available'}`}
            onClick={() => !isOccupied && onSelect(slot)}
        >
            <h3>{slot.number}</h3>
            <p>{isOccupied ? 'Occupied' : 'Available'}</p>
        </div>
    );
};

export default ParkingSlot;
