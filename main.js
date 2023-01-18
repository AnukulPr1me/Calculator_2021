const { app, BrowserWindow } = require('electron')

function createwindow () {
    const win = new BrowserWindow({
        width: 480,
        height: 720
    });
    win.loadFile('src/index.html');
}

app.whenReady().then(createwindow);

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') app.quit();
})