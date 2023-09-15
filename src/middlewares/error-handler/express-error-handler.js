const { loggerConfig } = require('../../configs/logger');
const { ApiStatusCodes, HTTPStatusCodes } = require('../../constants');

const ExpressErrorHandler = async (error, req, res, next) => {
  const httpStatus = error.status ?? HTTPStatusCodes.SERVER_ERROR;
  const data = error?.data ?? {};
  res.status(httpStatus).send({
    status: ApiStatusCodes.FAILED,
    message: error?.message,
    data,
    stack: loggerConfig.logLevel === 'debug' ? error.stack : undefined,
  });
};

module.exports = { ExpressErrorHandler };
