const { HTTPStatusCodes } = require('../../constants');

class BadRequestError extends Error {
  status;

  data;

  constructor(message, data = undefined) {
    super(message);
    this.status = HTTPStatusCodes.BAD_REQUEST;
    this.message = message;
    this.name = 'Bad Request';
    this.data = data;
  }
}

module.exports = {
  BadRequestError,
};
