/**
 * Split a string into several items separed by spaces
 * @param   { String } list - events list
 * @returns { Array } all the events detected
 */
const split = list => list.split(/\s/)

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement } el     - DOM node where the listeners will be bound
 * @param   { String }      evList - list of events we want to bind or unbind space separated
 * @param   { Function }    cb     - listeners callback
 * @param   { String }      method - either 'addEventListener' or 'removeEventListener'
 */
function manageEvents(el, evList, cb, method) {
  split(evList).forEach((e) => {
    el[method](e, cb, false)
  })
}

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement } el     - DOM node where the listeners will be bound
 * @param   { String }      evList - list of events we want to bind space separated
 * @param   { Function }    cb     - listeners callback
 * @returns { HTMLElement } DOM node and first argument of the function
 */
export function add(el, evList, cb) {
  manageEvents(el, evList, cb, 'addEventListener')
  return el
}

/**
 * Set a listener using from a list of events triggering the callback only once
 * @param   { HTMLElement } el     - DOM node where the listeners will be bound
 * @param   { String }      evList - list of events we want to bind space separated
 * @param   { Function }    cb     - listeners callback
 * @returns { HTMLElement } DOM node and first argument of the function
 */
export function once(el, evList, cb) {
  var handleEvent = function() {
    cb.apply(el, [el, evList, handleEvent])
    remove(el, evList, handleEvent)
  }

  manageEvents(el, evList, handleEvent, 'addEventListener')
  return el
}

/**
 * Remove all the listeners for the events received separated by spaces
 * @param   { HTMLElement } el     - DOM node where the events will be unbind
 * @param   { String }      evList - list of events we want unbind space separated
 * @param   { Function }    cb     - listeners callback
 * @returns { HTMLElement } DOM node and first argument of the function
 */
export function remove(el, evList, cb) {
  manageEvents(el, evList, cb, 'removeEventListener')
  return el
}

export default {
  add,
  once,
  remove
}

