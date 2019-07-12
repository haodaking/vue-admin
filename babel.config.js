const plugins = []

if (process.env.NODE_ENV === 'production') {
  // 移除console
  plugins.push('transform-remove-console')
  // 移除debugger
  plugins.push('transform-remove-debugger')
}

module.exports = {
  presets: ['@vue/app'],
  plugins
}
