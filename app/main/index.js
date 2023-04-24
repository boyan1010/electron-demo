// 主入口
const { app, BrowserWindow } = require("electron");
const { resolve } = require("path");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      // preload: resolve(__dirname, "../preload.js"),
      nodeIntegration: true,
      // 能够在renderer中使用window.require
      contextIsolation: false,
      // enableRemoteModule:true,
    },
  });
  //  线上线下的区分
  // dev加载
  win.loadURL("http://localhost:3000");
  // prod加载pages下的main/index.html
};
console.log(
  'resolve(__dirname, "../preload.js")',
  resolve(__dirname, "../preload.js")
);
app.whenReady().then(() => {
  createWindow();
});
