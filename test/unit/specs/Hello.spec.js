import Vue from 'vue'
import Toast from 'Src/index'
import App from '@/App'
import { triggerEvent } from '../../util'

Vue.use(Toast)

describe('Toast', () => {
  it('should create toast', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    triggerEvent(vm.$el.querySelector('.btn'), 'click')
    expect(document.querySelector('.vue-toast')).to.exist
  })
})
