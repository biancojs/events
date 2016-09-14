require('jsdom-global')()
const assert = require('assert')
const { add, remove, once } = require('./')
const $ = document.querySelectorAll.bind(document)

function fire(el, name) {
  var e = document.createEvent('HTMLEvents')
  e.initEvent(name, false, true)
  el.dispatchEvent(e)
}

function before() {
  var div = document.createElement('div')
  div.innerHTML = `
  <ul>
    <li class='item'>click me</li>
    <li>click me</li>
  </ul>
  `
  document.body.appendChild(div)
}

function beforeEach() {
  count = 0
}

before()

let count = 0,
  item = $('.item')[0],
  lis = $('li'),
  inc = _ => count++

// it works

add(item, 'click mouseenter', inc)
add(lis, 'mouseleave', inc)

fire(item, 'click')
fire(item, 'mouseenter')
fire(item, 'mouseleave')

assert.equal(count, 3)
beforeEach()

// it can remove properly the events

remove(item, 'click', inc)

fire(item, 'click')
fire(item, 'mouseenter')
fire(item, 'mouseleave')

assert.equal(count, 2)
beforeEach()

// it handles properly the once method

once(item, 'click', function(e) {
  assert.equal(typeof e, 'object')
  assert.equal(e.type, 'click')
  inc()
})

fire(item, 'click')
fire(item, 'click')
fire(lis[1], 'mouseleave')

assert.equal(count, 2)
beforeEach()





