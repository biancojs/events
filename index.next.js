import domToArray from 'bianco.dom-to-array'

/**
 * Split a string into several items separed by spaces
 * @param   { String } l - events list
 * @returns { Array } all the events detected
 */
const split = l => l.split(/\s/)

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement|NodeList|Array } els     - DOM node/s where the listeners will be bound
 * @param   { String }                     evList  - list of events we want to bind or unbind space separated
 * @param   { Function }                   cb      - listeners callback
 * @param   { String }                     method  - either 'addEventListener' or 'removeEventListener'
 */
function manageEvents(els, evList, cb, method) {
  els = domToArray(els)

  split(evList).forEach((e) => {
    for (let el of els) el[method](e, cb, false)
  })
}

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement|Array } els    - DOM node/s where the listeners will be bound
 * @param   { String }            evList - list of events we want to bind space separated
 * @param   { Function }          cb     - listeners callback
 * @returns { HTMLElement|NodeList|Array } DOM node/s and first argument of the function
 */
export function add(els, evList, cb) {
  manageEvents(els, evList, cb, 'addEventListener')
  return els
}

/**
 * Set a listener using from a list of events triggering the callback only once
 * @param   { HTMLElement|Array } els     - DOM node where the listeners will be bound
 * @param   { String }            evList  - list of events we want to bind space separated
 * @param   { Function }          cb      - listeners callback
 * @returns { HTMLElement|NodeList|Array }  DOM node/s and first argument of the function
 */
export function once(els, evList, cb) {
  var handleEvent = function(e) {
    cb(e)
    remove(els, evList, handleEvent)
  }

  manageEvents(els, evList, handleEvent, 'addEventListener')
  return els
}

/**
 * Remove all the listeners for the events received separated by spaces
 * @param   { HTMLElement|Array } els     - DOM node/s where the events will be unbind
 * @param   { String }            evList  - list of events we want unbind space separated
 * @param   { Function }          cb      - listeners callback
 * @returns { HTMLElement|NodeList|Array }  DOM node/s and first argument of the function
 */
export function remove(els, evList, cb) {
  manageEvents(els, evList, cb, 'removeEventListener')
  return els
}

export default {
  add,
  once,
  remove
}

