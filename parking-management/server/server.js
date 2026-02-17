const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const slotRoutes = require('./routes/slotRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', slotRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
