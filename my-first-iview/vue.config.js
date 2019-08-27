module.exports = {
  lintOnSave: false,
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
          loader: 'vue-loader',
          options: {

          }
        },
        {
          loader: 'iview-loader',
          options: {
            // 参考资料 https://www.iviewui.com/docs/guide/iview-loader
            // 可以直接写 <Switch> 和 <Circle> 这两个标签；
            // 参数 prefix 设置为 true 后，所有 iView 组件标签名都可以使用前缀 i-，例如 <i-row>、<i-select></i-select>
            prefix: false 
          }
        }
      ]
    }]
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}