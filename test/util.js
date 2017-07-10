/**
 * trigger an event
 * mouseenter, mouseleave, mouseover, keyup, change, click...
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
function triggerEvent (el, name, ...opts) {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, ...opts)
  el.dispatchEvent
    ? el.dispatchEvent(evt)
    : el.fireEvent('on' + name, evt)

  return el
}

export {
  triggerEvent
}
