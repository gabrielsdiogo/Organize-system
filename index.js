const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', () =>{

  mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    autoHideMenuBar: true,
    webPreferences:{
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`)

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})