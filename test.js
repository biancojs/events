require('jsdom-global')()
const assert = require('assert')
const { add, remove, once } = require('./')
const $ = document.querySelector.bind(document)

function fire(el, name) {
  var e = document.createEvent('HTMLEvents')
  e.initEvent(name, false, true)
  el.dispatchEvent(e)
}

function setup() {
  var div = document.createElement('div')
  div.innerHTML = `
  <ul>
    <li>click me</li>
  </ul>
  `
  document.body.appendChild(div)
}

setup()

let count = 0,
  li = $('li'),
  inc = _ => count++

add(li, 'click mouseenter', inc)

fire(li, 'click')
fire(li, 'mouseenter')

assert.equal(count, 2)

remove(li, 'click', inc)

fire(li, 'click')
fire(li, 'mouseenter')

assert.equal(count, 3)

once(li, 'click', inc)

fire(li, 'click')
fire(li, 'click')

assert.equal(count, 4)



