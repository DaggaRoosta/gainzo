//
// server.js
//

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
// const routes = require('./routes/api')
const exerciseRoute = require('./routes/exercise.route');
const config = require('./DB.js');
require('dotenv').config();      

mongoose.connect(process.env.MONGODB_URI || config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to gainzodb')
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));

// HTTP request logger
// app.use('/api', routes)
app.use('/exercise', exerciseRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))