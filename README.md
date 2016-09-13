# bianco-events

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Modern DOM events helpers written in es2015

This script will not be transpiled and it is only thought to be part of your build chain.

## Usage

```js
import { add, remove, once } from 'bianco-events'

add(dom, 'click mouseenter', function(e) {
  console.log('tadaaa!')
})
```

## API

- `add(dom, events, callback)` add a listener for one or more events space separated
- `remove(dom, events, callback)` remove a listener for one or more events space separated
- `once(dom, events, callback)` add a listener for one or more events space separated that will be triggered only once


[travis-image]:https://img.shields.io/travis/GianlucaGuarini/bianco-events.svg?style=flat-square
[travis-url]:https://travis-ci.org/GianlucaGuarini/bianco-events

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/bianco-events.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/bianco-events.svg?style=flat-square
[npm-url]:https://npmjs.org/package/bianco-events