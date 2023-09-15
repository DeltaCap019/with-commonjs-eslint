const { HTTPStatusCodes } = require('../../constants');

class UnauthorizedError extends Error {
  status;

  data;

  constructor(message, data = undefined) {
    super(message);
    this.status = HTTPStatusCodes.UNAUTHORIZED;
    this.message = message;
    this.name = 'Unauthorized';
    this.data = data;
  }
}

module.exports = {
  UnauthorizedError,
};
