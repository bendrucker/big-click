# big-click [![Build Status](https://travis-ci.org/bendrucker/big-click.svg?branch=master)](https://travis-ci.org/bendrucker/big-click)

> Generate CSS to increase the click target of an element


## Install

```
$ npm install --save big-click
```


## Usage

```js
var bigClick = require('big-click')

bigClick('button', 10)
//=> {button: ..., button:after: ...}
//=> adds 10px in click area to buttons
```

Or get a CSS string:

```js
var css = require('big-click/string')('button', 10)
```

## API

#### `bigClick(selectors, size)` -> `object`

##### selectors

*Required*  
Type: `string` / `array[string]`

A CSS selector or an array of selectors.

##### size

*Required*  
Type: `number`

The number of pixels to use for the additional click area.


## License

MIT © [Ben Drucker](http://bendrucker.me)
