require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const hc = require('./controller.js');

const checkForSession = require('./middlewares/checkForSession');

const app = express();
const{
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

app.use( bodyParser.json() );
massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    console.log("Database connected")
});

app.use(express.static(__dirname+'./../build'))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use( checkForSession );
app.post("/api/newuser", hc.create);
app.post("/api/user", hc.login);
// app.get("/api/user",hc.getOne);

const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

//  http://localhost:3005
