const fs = require('fs');
const https = require('https');
const { logger } = require('../../utils/logger');

const downloadFile = async (outputFileName, outputFilePath, remoteUrl) => {
  const response = {
    downloadStatus: 1,
    error: undefined,
  };

  const promise = new Promise((resolve) => {
    https.get(remoteUrl, (res) => {
      // Open file in local filesystem
      const localFile = `${outputFilePath}/${outputFileName}`;
      // const localFile = `${outputFilePath}/`;
      const file = fs.createWriteStream(localFile);

      // Write data into local file
      res.pipe(file);

      // Close the file
      file.on('finish', () => {
        file.close();
        logger.info('File downloaded!');
        resolve(response);
      });
    }).on('error', (error) => {
      logger.error('Error: ', error.message);
      response.downloadStatus = 0;
      response.error = error;
      resolve(response);
    });
  });

  await promise;
  return response;
};

module.exports = {
  downloadFile,
};
