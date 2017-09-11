
const { execAsync } = require('../utils');

module.exports.get = () =>
  new Promise(async (resolve, reject) => {
    const cmd = 'osascript -e \'output volume of (get volume settings)\'';
    try {
      const out = await execAsync(cmd);
      resolve(parseInt(out));
    } catch (e) {
      reject(e);
    }
  });

module.exports.set = (vol) => {
  if (typeof vol !== 'number' || vol < 0 || vol > 100) {
    return Promise.reject(new Error(`Expected a number between 0 and 100. Got ${vol}`));
  }

  return new Promise(async (resolve, reject) => {
    const cmd = `osascript -e 'set volume output volume ${vol}'`;
    try {
      await execAsync(cmd);
    } catch (e) {
      reject(e);
    }
  });
};
