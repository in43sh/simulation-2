// const users = require('../models/users');
// let id = 1;
// simulation id 74M
module.exports = {
  register: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { username, pass } = req.body;
    console.log(username, pass);

    dbInstance.register_user([ username, pass])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }

  // login: ( req, res, next ) => {
  //   const { session } = req;
  //   const { username, password } = req.body;

  //   const user = users.find( user => user.username === username && user.password === password );

  //   if ( user ) {
  //     session.user.username = user.username;
  //     console.log(`${session.user.username}, you are logged.`);
  //     res.status(200).send(session.user);
  //   } else {
  //     res.status(500).send('Unauthorised.');
  //   }
  // },

  // register: ( req, res, next ) => {
  //   const { session } = req;
  //   const { username, password } = req.body;

  //   users.push({ id, username, password });
  //   id++;

  //   session.user.username = username;
  //   res.status(200).send( session.user );
  // },

  // logout: ( req, res, next ) => {
  //   const { session } = req;
  //   console.log('GAME OVER');
  //   session.destroy();

  //   res.status(200).send( req.session );
  // },

  // getUser: ( req, res, next ) => {
  //   const { session } = req;
  //   console.log(`${session.user}, you are logged.`);
  //   res.status(200).send( session.user );
  // }
};