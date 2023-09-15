const { HTTPStatusCodes } = require('../../constants');

const heathCheckHandler = (req, res) => {
  res.status(HTTPStatusCodes.OK).send({
    time: new Date().getTime(),
  });
};

module.exports = {
  heathCheckHandler,
};
