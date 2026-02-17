const express = require('express');
const router = express.Router();
const slotController = require('../controllers/slotController');

router.get('/slots', slotController.getSlots);
router.post('/book/:id', slotController.bookSlot);
router.post('/free/:id', slotController.freeSlot);

module.exports = router;
