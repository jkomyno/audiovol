const volume = require('../');

it('Should be able to retrieve the current volume', async () => {
  const vol = await volume.get();
  console.log('vol', vol);
  expect(typeof vol).toBe('number');
  expect(vol).toBeGreaterThanOrEqual(0);
  expect(vol).toBeLessThanOrEqual(100);
});

it('Should be able to set the volume', () => {
  expect(async () => {
    await volume.set(100);
  }).not.toThrow();
});

describe('Should throw error if the volume to set is invalid', () => {
  it('Volume too high', async () => {
    const successCB = jest.fn();
    const failureCB = jest.fn();

    try {
      await volume.set(101);
      successCB();
    } catch (e) {
      failureCB(e.message);
    }

    expect(successCB).not.toBeCalled();
    expect(failureCB).toBeCalledWith('Expected a number between 0 and 100. Got 101');
  });

  it('Volume too low', async () => {
    const successCB = jest.fn();
    const failureCB = jest.fn();

    try {
      await volume.set(-1);
      successCB();
    } catch (e) {
      failureCB(e.message);
    }

    expect(successCB).not.toBeCalled();
    expect(failureCB).toBeCalledWith('Expected a number between 0 and 100. Got -1');
  });

  it('Volume NaN', async () => {
    const successCB = jest.fn();
    const failureCB = jest.fn();

    try {
      await volume.set('qwerty');
      successCB();
    } catch (e) {
      failureCB(e.message);
    }

    expect(successCB).not.toBeCalled();
    expect(failureCB).toBeCalledWith('Expected a number between 0 and 100. Got qwerty');
  });
});
