require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
const massive = require('massive');
const hc = require('./controller.js');

const app = express();
const{
    CONNECTION_STRING
} = process.env;

app.use( bodyParser.json() );
massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    console.log("Database connected")
});

const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );