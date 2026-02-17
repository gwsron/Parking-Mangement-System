const Slot = require('../models/Slot');

exports.getSlots = (req, res) => {
    try {
        const slots = Slot.find();
        res.status(200).json(slots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.bookSlot = (req, res) => {
    try {
        const { id } = req.params;
        const { occupantName, vehicleNumber } = req.body;

        if (!occupantName || !vehicleNumber) {
            return res.status(400).json({ message: "Name and Vehicle Number are required" });
        }

        const updatedSlot = Slot.findByIdAndUpdate(id, {
            status: "occupied",
            occupantName,
            vehicleNumber
        });

        if (!updatedSlot) {
            return res.status(404).json({ message: "Slot not found" });
        }

        res.status(200).json({ message: "Slot booked successfully", slot: updatedSlot });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.freeSlot = (req, res) => {
    try {
        const { id } = req.params;

        const updatedSlot = Slot.findByIdAndUpdate(id, {
            status: "available",
            occupantName: "",
            vehicleNumber: ""
        });

        if (!updatedSlot) {
            return res.status(404).json({ message: "Slot not found" });
        }

        res.status(200).json({ message: "Slot freed successfully", slot: updatedSlot });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
