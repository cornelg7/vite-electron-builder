import './style.scss';
import Game from './Game';
import { addEventListeners } from './utils/WindowEventListeners';

addEventListeners();
Game.getInstance().animate();
