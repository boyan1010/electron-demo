npm config set ELECTRON_MIRROR https://cdn.npm.taobao.org/dist/electron/

由于需要设置 webpack，因此 cra 需要重写
视频中使用的是 customize-cra 和 react-app-rewired，在不 reject 的情况下可以修改 webpack ---- 需要测试

```javascript
cosnt { override} = require("customize-cra");
functon addRendererTarget(config) {
  config.target = "electron-renderer";
  return config;
}
module.exports = override(addRendererTarget)
```

建议重新配置 webpack

库：wait-on、 conccurrenly 自己玩命令行配置

也有其他的框架模板
