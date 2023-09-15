const { getCats } = require('../../services/cat/get-cats');

const getCatsHandler = async (req, res, next) => {
  const {
    page,
    limit,
  } = req.query;

  const params = {
    page: (!Number.isNaN(Number(page))) ? Number(page) : undefined,
    limit: (!Number.isNaN(Number(limit))) ? Number(limit) : undefined,
  };

  const response = await getCats(params);

  res.locals = response;
  next();
};

module.exports = {
  getCatsHandler,
};
