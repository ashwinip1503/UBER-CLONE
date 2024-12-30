
const express = require('express');
const  cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./Routes/user.routes');

dotenv.config();
const app = express();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/users', userRoutes);

module.exports = app;
