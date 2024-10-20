const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const TrackRouter = require('./controllers/trackRoute')

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
});

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/tracks', TrackRouter)



app.listen(3000,() => {
    console.log('we are redy to party hardy')
})