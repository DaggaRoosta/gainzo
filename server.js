//
// server.js
//

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

// const MONGODB_URI = 'mongodb+srv://admin:Oscysbtdel%241@cluster0-xicad.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gainzodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to gainzodb')
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))