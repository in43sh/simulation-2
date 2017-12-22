const express = require('express');
const bodyParser = require('body-parser');
// simulation id 74C
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');

require('dotenv').config();

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// Controllers
const auth_controller = require('./controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

// simulation id 70C
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

// massive(process.env.CONNECTION_STRING).then(
//   (dbInstance) => {
//     app.set('db', dbInstance)
//   }).catch(err => console.log(err));

//   app.post('/api/auth/register', (req, res) => {
//     const db = req.app.get('db')

//     db.register_user([
//       req.body.username,
//       req.body.password]).then((newUser) => {
//         console.log(`new user is ${newUser}`);

//         res.send(newUser);
//       })
//   })

// simulation id 75C
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use( checkForSession );

app.post( '/api/auth/register', auth_controller.register );

// Authorisation
// app.post( '/api/auth/login', auth_controller.login );

// app.post( '/api/auth/logout', auth_controller.logout );
// app.get( '/api/auth/user', auth_controller.getUser );

const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );