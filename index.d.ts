export function add<
    Target extends EventTarget,
    Callback extends EventListenerOrEventListenerObject,
>(
  el: Target | Target[],
  eventName: string,
  callback: Callback,
  options?: AddEventListenerOptions | boolean,
): Target

export function once<
  Target extends EventTarget,
  Callback extends EventListenerOrEventListenerObject,
>(
  el: Target | Target[],
  eventName: string,
  callback: Callback,
  options?: AddEventListenerOptions | boolean,
): Target

export function remove<
  Target extends EventTarget,
  Callback extends EventListenerOrEventListenerObject,
>(
  el: Target | Target[],
  eventName: string,
  callback: Callback,
  options?: EventListenerOptions | boolean,
): Target