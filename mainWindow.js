// Modules
const {BrowserWindow} = require('electron');

// BrowserWindoe instance
exports.win

// mainWindow createWindow fn
exports.createWindow = () => {
  this.win = new BrowserWindow({
      width: 500,
      height: 600,
      minWidth: 350,
      maxWidth: 650,
      minHeight: 310
    })

    // Devtools
    this.win.webContents.openDevTools()
    // load main window content
    this.win.loadURL(`file://${__dirname}/renderer/main.html`)

    // Handle window closed
    this.win.on('closed', () =>{
      this.win = null;
    })
}
