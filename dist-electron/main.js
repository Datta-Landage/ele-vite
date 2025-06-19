// electron/main.ts
import { app, BrowserWindow } from 'electron';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
// --- add these two lines to emulate __dirname/__filename ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload.js will be in your dist-electron folder
            preload: join(__dirname, 'preload.js'),
        },
    });
    if (app.isPackaged) {
        // production build
        win.loadFile(join(__dirname, '../dist/index.html'));
    }
    else {
        // dev server
        win.loadURL('http://localhost:5173');
    }
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
//# sourceMappingURL=main.js.map