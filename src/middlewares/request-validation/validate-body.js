const {
  ApiStatusCodes,
  HTTPStatusCodes,
} = require('../../constants');

const validateBody = (requestBodySchema) => async (req, res, next) => {
  const { body } = req;

  try {
    await requestBodySchema.validateAsync(body);
    next();
  } catch (error) {
    const { debug } = body;

    const response = {
      status: ApiStatusCodes.FAILED,
      message: error.message,
    };

    if (debug === true) {
      response.message = error.message;
    }

    res.status(HTTPStatusCodes.BAD_REQUEST).send(response);
  }
};

module.exports = {
  validateBody,
};
