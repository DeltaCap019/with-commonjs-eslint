const { getDogs } = require('../../services/dog/get-dogs');

const getDogsHandler = async (req, res, next) => {
  const {
    page,
    limit,
  } = req.query;

  const params = {
    page: (!Number.isNaN(Number(page))) ? Number(page) : undefined,
    limit: (!Number.isNaN(Number(limit))) ? Number(limit) : undefined,
  };

  const response = await getDogs(params);

  res.locals = response;
  next();
};

module.exports = {
  getDogsHandler,
};
