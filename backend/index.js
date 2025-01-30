const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db');

const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/users', userRoutes);
app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;