const {
  ApiStatusCodes,
  HTTPStatusCodes,
} = require('../../constants');

const validateParams = (requestParamsSchema) => async (req, res, next) => {
  const { params } = req;

  try {
    await requestParamsSchema.validateAsync(params);
    next();
  } catch (error) {
    const { debug } = params;

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
  validateParams,
};
