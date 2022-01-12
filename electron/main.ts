import {app, BrowserWindow } from 'electron'
import dotenv from 'dotenv'

const path = require('path')
dotenv.config();

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  })

    win.loadURL('http://localhost:3303/')


}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
