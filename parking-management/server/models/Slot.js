const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/slots.json');

const getSlotsData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
};

const saveSlotsData = (data) => {
    const stringifyData = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataPath, stringifyData);
};

const Slot = {
    find: () => {
        return getSlotsData();
    },
    findByIdAndUpdate: (id, update) => {
        const slots = getSlotsData();
        const slotIndex = slots.findIndex(slot => slot.id === parseInt(id));
        
        if (slotIndex === -1) return null;

        const updatedSlot = { ...slots[slotIndex], ...update };
        slots[slotIndex] = updatedSlot;
        
        saveSlotsData(slots);
        return updatedSlot;
    }
};

module.exports = Slot;
