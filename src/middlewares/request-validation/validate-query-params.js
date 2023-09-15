const {
  ApiStatusCodes,
  HTTPStatusCodes,
} = require('../../constants');

const validateQueryParams = (requestQuerySchema) => async (req, res, next) => {
  const { query } = req;

  try {
    await requestQuerySchema.validateAsync(query);
    next();
  } catch (error) {
    const { debug } = query;

    const response = {
      status: ApiStatusCodes.FAILED,
      message: error.message,
    };

    if (debug === 'true') {
      response.message = error.message;
    }

    res.status(HTTPStatusCodes.BAD_REQUEST).send(response);
  }
};

module.exports = {
  validateQueryParams,
};
