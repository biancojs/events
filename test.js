require('jsdom-global')()

const assert = require('assert')
const { add, remove, once } = require('./')
const $ = document.querySelectorAll.bind(document)
const body = document.body

function fire(el, name) {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(name, false, true)
  el.dispatchEvent(e)
}

describe('Bianco events', function() {

  let count, item, lis, inc // eslint-disable-line

  beforeEach(function() {
    const div = document.createElement('div')
    div.innerHTML = `
    <ul>
      <li class='item'>click me</li>
      <li>click me</li>
    </ul>
    `
    body.innerHTML = ''
    body.appendChild(div)
    count = 0
    item = $('.item')[0]
    lis = $('li')
    inc = () => count++
  })

  it('It can handle the "add" function properly', function() {
    add(item, 'click mouseenter', inc)
    add(lis, 'mouseleave', inc)

    fire(item, 'click')
    fire(item, 'mouseenter')
    fire(item, 'mouseleave')

    assert.equal(count, 3)
  })

  it('It can remove properly the events', function() {
    add(item, 'click mouseenter', inc)
    add(lis, 'mouseleave', inc)

    remove(item, 'click', inc)

    fire(item, 'click')
    fire(item, 'mouseenter')
    fire(item, 'mouseleave')

    assert.equal(count, 2)
  })

  it('It can handle properly the "once" method', function() {
    add(lis, 'mouseleave', inc)
    once(item, 'click', function(e) {
      assert.equal(typeof e, 'object')
      assert.equal(e.type, 'click')
      inc()
    })

    fire(item, 'click')
    fire(item, 'click')
    fire(lis[1], 'mouseleave')

    assert.equal(count, 2)
  })
})