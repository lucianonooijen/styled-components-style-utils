# Styled Components Style Utils

Several style utils for styled components. SASS mixins converted to JS functions in ES6.

## Installation

To install, run

```sh
yarn add styled-components-style-utils
```

or

```sh
npm i styled-components-style-utils
```

## Import

To import methods, use

```js
import { method1, method } from 'styled-components-style-utils';
```

or

```js
const { method1, method } = require('styled-components-style-utils');
```

## Usage

| Method call | Arguments | What the method does |
| --- | --- | --- |
| reset() | - | Will return CSS for CSS reset |
| debug() | - | Will add CSS debug mode |
| center(type) | type(string): both\|vertical\|horizontal | Will add flexbox CSS to center children vertically, horizontally, or both |
| Truncate() | - | Will add truncate CSS for text, width must be set separately

### Why

I made this package because I often use these utils, and wanted them to store somewhere centrally, and open for others to use.

### License

MIT
