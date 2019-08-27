import Vue from 'vue'
import iView from 'iview'

// import locale from 'iview/dist/locale/en-US'

// 全局配置参考 https://www.iviewui.com/docs/guide/global
// Vue.use(iView)
Vue.use(iView, {
  size: 'large',
  transfer: false, // 默认false，设为true，在body节点下生成，防止父级设置了overflow:hidden被隐藏了
  // locale: locale
})

// import 'iview/dist/styles/iview.css'

import '../custom.less';
