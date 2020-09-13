var electron = require("electron");

var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var globalShortcut = electron.globalShortcut;

var mainWindow = null;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 960,
    webPreferences: { nodeIntegration: true },
  });

  globalShortcut.register("ctrl+g", () => {
    mainWindow.loadURL("https://www.baidu.com/");
  });

  let isRegister = globalShortcut.isRegistered("ctrl+g") ? "tt" : "ff";
  console.log(isRegister);

  require("./main/menu");
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile("demo.html");

  // let BrowserView = electron.BrowserView
  // let view = new BrowserView();
  // mainWindow.setBrowserView(view);
  // view.setBounds({x:0,y:120,width:1920,height:960})
  // view.webContents.loadURL('https://www.baidu.com/');

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
app.on("quit", () => {
  globalShortcut.unregister("ctrl+g");
  globalShortcut.unregisterAll();
});
