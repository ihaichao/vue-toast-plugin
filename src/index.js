/**
 * Vue toast plugin
 * Created by zhangzongzheng on 2017/7/6
 */

/**
 *
 * @param {HTMLElement} el target element
 * @param {string} text toast content
 * @param {string} [type='info']  toast type
 * @param {number} [duration=4000]  toast duration
 */
function toast (el, text, type = 'info', duration = 4000) {
  if (!el) {
    throw new Error('target element should be assigned.')
  } else {
    const d = document.createElement('div')
    try {
      d.appendChild(el.cloneNode(true))
      if (el.nodeType !== 1) {
        throw new Error('target element is not HTMLElement')
      }
    } catch (e) {
      throw new Error('target element is not HTMLElement')
    }
  }

  const toastEl = document.createElement('div')
  toastEl.innerHTML = text
  toastEl.className = `vue-toast ${type}`
  document.body.appendChild(toastEl)
}

export default {
  install (Vue, options) {
    if (!Vue.prototype.$toast) {
      Vue.prototype.$toast = toast
    }
  }
}
