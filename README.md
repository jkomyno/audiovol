# audiovol

> Toggle and get the system's volume. Compatible with Mac OS and Linux

## Install

```
$ npm i -S audiovol
```

Or, if you prefer using yarn:

```
$ yarn add audiovol
```

## Example

### Async / Await

```js
const audiovol = require('audiovol');

// get current audio level
try {
  const volume = await audiovol.get();
  console.log('volume', volume);
} catch (e) {
  console.error('error', error);
}

// set audio level
try {
  await audiovol.set(50);
  console.log('volume set!');
} catch (e) {
  console.error('error', error);
}
```

### Promises

```js
const audiovol = require('audiovol');

audiovol
  .get() // get current audio level
  .then((volume) => {
    console.log('volume', volume);
  })
  .catch((e) => {
    console.error('error', error);
  });

audiovol
  .set(50) // set audio level
  .then(() => {
    console.log('volume set!');
  })
  .catch((e) => {
    console.error('error', error);
  });
```

## API

### .get()

Returns a `Promise`. If it resolves, returns the current audio volume

### .set(volume: number)

Asynchronously sets the current audio volume
(volume must be a number between `0` and `100`).

## Contributing

PR are welcome, especially to add support to Windows OS.
Please ensure that the linting and unit tests pass before sending a Pull Request.

## Available scripts

- yarn lint: runs eslint
- yarn test: runs unit tests

## Related

* [audiovol-cli](https://github.com/jkomyno/audiovol-cli) - CLI for this module

## License

MIT © [Alberto Schiabel](https://github.com/jkomyno)
