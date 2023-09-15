const logResponse = (params, response) => {
  const {
    logger,
  } = params;

  logger?.debug('HTTP RESPONSE:', JSON.stringify(response));
};

module.exports = {
  logResponse,
};
