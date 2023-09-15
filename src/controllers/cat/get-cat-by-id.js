const { getCatById } = require('../../services/cat/get-cat-by-id');

const getCatByIdHandler = async (req, res) => {
  const {
    id,
  } = req.params;

  const params = {
    id,
  };

  const response = await getCatById(params);

  const {
    httpStatus,
    apiStatus,
    message,
    data,
  } = response;

  res.status(httpStatus).send({
    status: apiStatus,
    message,
    data,
  });
};

module.exports = {
  getCatByIdHandler,
};
