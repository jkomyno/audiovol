const { exec } = require('child_process');

module.exports.execAsync = (command, options = {}) =>
  new Promise((resolve, reject) => {
    exec(command, options, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.toString());
      }
    });
  });
