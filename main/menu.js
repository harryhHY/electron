const { Menu, BrowserWindow } = require("electron");
var template = [
  {
    label: "首页",
    submenu: [
      {
        label: "会员中心",
        accelerator: `ctrl+f`,
        click: () => {
          var win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              nodeIntegration: true,
            },
          });
          win.loadFile("yellow.html");
          win.on("closed", () => {
            win = null;
          });
        },
      },
      {
        label: "商品种类",
      },
    ],
  },
  {
    label: "咨询中心",
    submenu: [
      {
        label: "人工客服",
      },
      {
        label: "常见问题",
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);
