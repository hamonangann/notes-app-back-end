/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const ClientError = require('./ClientError');

class InvariantError extends ClientError {
  constructor(message) {
    super(message, 400);
    this.name = 'InvariantError';
  }
}

module.exports = InvariantError;
