const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

require('dotenv').config();

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// Controllers
const auth_controller = require('./controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use( checkForSession );

// Authorisation
app.post( '/api/auth/login', auth_controller.login );
app.post( '/api/auth/register', auth_controller.register );
app.post( '/api/auth/logout', auth_controller.logout );
app.get( '/api/auth/user', auth_controller.getUser );

const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );