/* eslint-disable linebreak-style */

const NotesHandler = require('./handler');
const routes = require('./routes');

/* eslint-disable no-underscore-dangle */
module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
