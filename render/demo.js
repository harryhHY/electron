const btn = this.document.querySelector("#btn");
const BrowserWindow = require("electron").remote.BrowserWindow;
window.onload = function () {
  btn.onclick = () => {
    newWin = new BrowserWindow({
      width: 750,
      height: 500,
    });
    newWin.loadFile("yellow.html");
    newWin.on("close", () => {
      newWin = null;
    });
  };
};

const { remote } = require("electron");

var rigthTemplate = [
    {label:'粘贴',accelerator: `ctrl+c`},
    {label:'复制',accelerator: `ctrl+v`}
]

var m = remote.Menu.buildFromTemplate(rigthTemplate)

window.addEventListener("contextmenu", function (e) {
  //阻止当前窗口默认事件
  e.preventDefault();
  //把菜单模板添加到右键菜单
  m.popup({window:remote.getCurrentWindow()})
});
