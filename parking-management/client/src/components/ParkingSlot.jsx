import React from 'react';

const ParkingSlot = ({ slot, onSelect }) => {
    const isOccupied = slot.status === 'occupied';

    return (
        <div
            className={`
                relative h-32 rounded-3xl p-6 transition-all duration-300 cursor-pointer overflow-hidden border-2
                ${isOccupied
                    ? 'bg-rose-50 border-rose-100 text-rose-700 cursor-not-allowed group-hover:scale-[0.98]'
                    : 'bg-white border-slate-100 text-slate-900 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 active:scale-95'
                }
            `}
            onClick={() => !isOccupied && onSelect(slot)}
        >
            <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 translate-x-4 -translate-y-4 rounded-full ${isOccupied ? 'bg-rose-600' : 'bg-blue-600'}`}></div>

            <span className="block text-xs font-black uppercase tracking-widest opacity-40 mb-1">Slot</span>
            <h3 className="text-2xl font-black tracking-tight">{slot.number}</h3>

            <div className={`mt-3 flex items-center gap-1.5`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isOccupied ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                <p className="text-[10px] font-bold uppercase tracking-wider">
                    {isOccupied ? 'Occupied' : 'Launch Available'}
                </p>
            </div>
        </div>
    );
};

export default ParkingSlot;
