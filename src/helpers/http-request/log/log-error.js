const logError = (params, error) => {
  const {
    logger,
  } = params;

  let errorObj = error;

  if (typeof error === 'string') {
    errorObj = {
      error,
    };
  }
  logger?.error('HTTP ERROR:', errorObj);
};

module.exports = {
  logError,
};
