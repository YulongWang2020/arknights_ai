const path = require('path')
const {app, BrowserWindow} = require('electron')

function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
}

    app.on('ready', createWindow)