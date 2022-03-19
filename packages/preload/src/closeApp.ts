import { ipcRenderer } from 'electron';
import {exposeInMainWorld} from './exposeInMainWorld';

function closeApp() {
  ipcRenderer.send('close-app');
}

exposeInMainWorld('closeApp', closeApp);
