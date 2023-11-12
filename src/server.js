const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const routeManagement = require('./routeManagement');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Failed to connect to MongoDB', error));



// Routes
routeManagement.RegisterAllRoutes(app);


// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () =>  console.log(`Server is running on port ${port}`));