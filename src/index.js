/**
 * Vue toast plugin
 * Created by zhangzongzheng on 2017/7/6
 */

import './index.css'

/**
 * @param {HTMLElement} el target element
 * @param {string} text content of the toast
 * @param {string} type  type of the toast  "success" || "warning" || "info" || "error"
 * @param {number} duration  time before the toast vanishes, in millisecond
 * @param {number} top toast top
 * @param {number} left toast left
 */
function toast (el, text, type, duration, top, left) {
  if (!el) {
    throw new Error('target element should be assigned.')
  } else {
    var d = document.createElement('div')
    try {
      d.appendChild(el.cloneNode(true))
      if (el.nodeType !== 1) {
        throw new Error('target element is not HTMLElement.')
      }
    } catch (e) {
      throw new Error('target element is not HTMLElement.')
    }
  }

  if (text && typeof text !== 'string') {
    throw new Error('toast content is not string.')
  }

  if (type && ['success', 'warning', 'info', 'error'].indexOf(type) === -1) {
    throw new Error('toast type should be one of "success, warning, info, error".')
  }

  duration = duration || 4000
  if (isNaN(Number(duration))) {
    throw new Error('toast duration should be number.')
  }

  if (top && isNaN(Number(top))) {
    throw new Error('toast top should be number.')
  }

  if (left && isNaN(Number(left))) {
    throw new Error('toast left should be number.')
  }

  var toastEl = document.createElement('div')
  var rect = el.getBoundingClientRect()
  var scrollLeft = (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft
  var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

  toastEl.style.top = (Number(top) || rect.top + rect.height + scrollTop) + 'px'
  toastEl.style.left = (Number(left) || rect.left + rect.width + scrollLeft) + 'px'

  toastEl.innerHTML = text
  toastEl.className = 'vue-toast ' + type
  document.body.appendChild(toastEl)

  setTimeout(function () {
    toastEl.className += ' hide'
    setTimeout(function () {
      toastEl.parentNode.removeChild(toastEl)
    }, 450)
  }, Number(duration))
}

export default {
  install: function (Vue, options) {
    if (!Vue.prototype.$toast) {
      Vue.prototype.$toast = toast
    }
  }
}
