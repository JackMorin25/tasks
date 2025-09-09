    const { app, BrowserWindow } = require('electron');
    const path = require('path');


    function createWindow() {
      const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true, // Enable Node.js integration in the renderer process
          contextIsolation: false, // Disable context isolation for simpler IPC (consider security for production)
        },
      });

      // Load React app in development or production
      if (process.env.ELECTRON_START_URL) {
        mainWindow.loadURL(process.env.ELECTRON_START_URL);
      } else {
        mainWindow.loadURL(`file://${path.join(__dirname, './build/index.html')}`);
      }
    }

    app.whenReady().then(createWindow);

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });