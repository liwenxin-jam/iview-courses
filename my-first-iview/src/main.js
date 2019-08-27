import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'

import VueI18n from 'vue-i18n'

import en from 'iview/dist/locale/en-US'
import zh from 'iview/dist/locale/zh-CN'
Vue.use(VueI18n)
Vue.locale = () => {}
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
}
const i18n = new VueI18n({
  locale: 'zh',
  messages
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')