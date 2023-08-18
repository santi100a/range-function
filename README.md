# Santi's Range Function

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/range-function/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100/range-function
[stars badge]: https://img.shields.io/github/stars/santi100a/range-function.svg
[license badge]: https://img.shields.io/github/license/santi100a/range-function.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100/range-function
[npm home]: https://npmjs.org/package/@santi100/range-function
[repo actions]: https://github.com/santi100a/range-function/actions
[repo url]: https://github.com/santi100a/range-function
[bundlephobia url]: https://bundlephobia.com/package/@santi100/range-function@latest

- 🚀 Lightweight and fast
- 👴 ES3-compliant
- 💻 Portable between the browser and Node.js

## What's this?

This is a simple package that exports a TypeScript implementation of the `range` function in Python,
using arrays. This is a very useful tool in Python and it may be helpful for you to have it in JavaScript
or TypeScript.

## Installation

- Via NPM: `npm install @santi100/range-function`
- Via Yarn: `yarn add @santi100/range-function`
- Via PNPM: `pnpm install @santi100/range-function`

## API

- `function range(start: number, end: number): number[];`

  Generates an array of numbers within a specified range.
  | Name | Type | Description | Optional? | Default |
  | ------ | -------- | -------------------------------- | --------- | ------- |
  |`start` | `number` | The starting value of the range. | No | _N/A_ |
  | `end` | `number` | The ending value of the range. | No | _N/A_ |

- `function range(start: number, end: number, step: number): number[];`

  Generates an array of numbers within a specified range.
  | Name | Type | Description | Optional? | Default |
  | ------ | -------- | -------------------------------- | --------- | ------- |
  |`start` | `number` | The starting value of the range. | No | _N/A_ |
  | `end` | `number` | The ending value of the range. | No | _N/A_ |
  | `step` | `number` | The increment or decrement value between each number in the range. | No | _N/A_ |

## Usage

```typescript
const range = require('@santi100/range-function'); // CommonJS
import range from '@santi100/range-function'; // ESM
import range = require('@santi100/range-function'); // TypeScript

function testRange() {
    try {
        const result1 = range(1, 10);
        console.log('Result 1:', result1);

        const result2 = range(0, -10, -2);
        console.log('Result 2:', result2);

        const result3 = range(1, 5, 0); // This should throw an error
        console.log('Result 3:', result3); // This line won't be reached due to the error
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testRange();
```

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100/range-function/issues) or [pull request](https://github.com/santi100/range-function/pulls)!
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).
You can also [sponsor me](https://github.com/sponsors/santi100a)! 💕💕

## Disclaimers

<sub>

_\*Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so._

_\^The source code is just a few kilobytes in size._

</sub>
