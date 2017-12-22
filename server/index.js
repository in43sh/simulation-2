const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

require('dotenv').config();

const app = express();
app.use( bodyParser.json() );

app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.get('/api/test', (req, res)=> {
  res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
})

const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );