var electron = require("electron");
 
var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var globalShortcut = electron.globalShortcut;

var mainWindow = null;
app.on("ready", () => {
  console.log("ready")
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag:true
    },
  });
  //electron 的生命周期函数

  mainWindow.webContents.on("did-finish-load", () => {
    console.log("did-finish-load")  //导航完成时触发，即选项卡的旋转器将停止旋转，并指派onload事件后。
  })
  mainWindow.on("closed", () => {
    console.log('closed')
    mainWindow = null;
  });
  mainWindow.webContents.on('dom-ready', () => {
    console.log("dom-ready")
    //一个框架中的文本加载完成后触发该事件。
  })
  // globalShortcut.register("ctrl+g", () => {
  //   mainWindow.loadURL("https://www.baidu.com/");
  // });

  // let isRegister = globalShortcut.isRegistered("ctrl+g") ? "tt" : "ff";
  // console.log(isRegister);

  // require("./main/menu");
  mainWindow.webContents.openDevTools();
  // mainWindow.loadFile("demo.html");
  mainWindow.loadFile("webview.html");


});
app.on('window-all-closed', () => { //当所有窗口被关闭时触发
  console.log("window-all-closed")
  app.quit()
})
app.on('activate', () => {
  console.log("activate")
  //在关闭窗口都已经关闭并且应用程序退出时
})
app.on('before-quit', () => {
  console.log("before-quit")
  //在关闭窗口之前触发

})
app.on('will-quit', () => {
  console.log("will-quit")
  //在关闭窗口都已经关闭并且应用程序退出时
})

// app.on('did-finish-load', () => {
//   console.log("will-quit")
//   //导航完成时触发，即选项卡的旋转器将停止旋转，并指派onload事件后。
// })
app.on("quit", () => {
  console.log("quit")
  globalShortcut.unregister("ctrl+g");
  globalShortcut.unregisterAll();
});