const { ipcRenderer } = require('electron');

ipcRenderer.on('idle-tick', (event, arg) => {
    document.getElementById('idle-time').innerText = arg;
});
