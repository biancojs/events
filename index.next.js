import domToArray from 'bianco.dom-to-array'

/**
 * Split a string into several items separed by spaces
 * @param   { string } l - events list
 * @returns { Array } all the events detected
 * @private
 */
const split = l => l.split(/\s/)

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement|NodeList|Array } els     - DOM node/s where the listeners will be bound
 * @param   { string }                     evList  - list of events we want to bind or unbind space separated
 * @param   { Function }                   cb      - listeners callback
 * @param   { string }                     method  - either 'addEventListener' or 'removeEventListener'
 * @param   { Object }                     options - event options (capture, once and passive)
 * @returns { undefined }
 * @private
 */
function manageEvents(els, evList, cb, method, options) {
  els = domToArray(els)

  split(evList).forEach((e) => {
    els.forEach(el => el[method](e, cb, options || false))
  })
}

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement|Array } els    - DOM node/s where the listeners will be bound
 * @param   { string }            evList - list of events we want to bind space separated
 * @param   { Function }          cb     - listeners callback
 * @param   { Object }            options - event options (capture, once and passive)
 * @returns { HTMLElement|NodeList|Array } DOM node/s and first argument of the function
 */
export function add(els, evList, cb, options) {
  manageEvents(els, evList, cb, 'addEventListener', options)
  return els
}

/**
 * Set a listener using from a list of events triggering the callback only once
 * @param   { HTMLElement|Array } els     - DOM node where the listeners will be bound
 * @param   { string }            evList  - list of events we want to bind space separated
 * @param   { Function }          cb      - listeners callback
 * @param   { Object }             options - event options (capture, once and passive)
 * @returns { HTMLElement|NodeList|Array }  DOM node/s and first argument of the function
 */
export function once(els, evList, cb, options) {
  manageEvents(els, evList, cb, 'addEventListener', Object.assign(options || {}, { once: true }))
  return els
}

/**
 * Remove all the listeners for the events received separated by spaces
 * @param   { HTMLElement|Array } els     - DOM node/s where the events will be unbind
 * @param   { string }            evList  - list of events we want unbind space separated
 * @param   { Function }          cb      - listeners callback
 * @param   { Object }             options - event options (capture, once and passive)
 * @returns { HTMLElement|NodeList|Array }  DOM node/s and first argument of the function
 */
export function remove(els, evList, cb, options) {
  manageEvents(els, evList, cb, 'removeEventListener', options)
  return els
}

export default {
  add,
  once,
  remove
}

