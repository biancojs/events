# next-events
Modern DOM events helpers written in es2015

This script will not be transpiled and it is only thought to be part of your build chain.

## Usage

```js
import { add, remove, once } from 'next-events'

add(dom, 'click mouseenter', function(e) {
  console.log('tadaaa!')
})
```

## API

- `add(dom, events, callback)` add a listener for one or more events space separated
- `remove(dom, events, callback)` remove a listener for one or more events space separated
- `once(dom, events, callback)` add a listener for one or more events space separated that will be triggered only once
