import Settings from '../utils/Settings';
import Particle from '../objects/particles/Particle';
import Canvas from './Canvas';
import Game from '../Game';
import Mouse from './Mouse';
import Utils from './Utils';
import Particles from '../objects/particles/Particles';


export function addEventListeners(): void {
  const c: Canvas = Canvas.getInstance();
  const g: Game = Game.getInstance();
  const m: Mouse = Mouse.getInstance();
  const u: Utils = Utils.getInstance();
  const particles: Particles = Particles.getInstance();

  window.addEventListener('resize', () => {
    c.canvas.width = Settings.CANVAS_WIDTH;
    c.canvas.height = Settings.CANVAS_HEIGHT;
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      (window as any).closeApp();
    } else if (event.key === ' ' || event.key === 'Spacebar') {
      c.isPaused = !c.isPaused;
      if (!c.isPaused) {
        g.animate();
      }
      event.preventDefault();
    } else if (event.key === 'p') {
      const dataUrl = c.canvas.toDataURL();
      u.downloadBase64File(dataUrl, `${Settings.PROJECT_NAME}.png`);
    } else if (event.key === 'c') {
      c.isClicked = !c.isClicked;
    } else if (event.key === '.') {
      c.isPaused = false;
      c.shouldPause = true;
      g.animate();
    }
  });

  window.addEventListener('click', (event) => {
    m.x = event.pageX;
    m.y = event.pageY;
    for (let i = 0; i < Settings.NUMBER_OF_PARTICLES; i++) {
      particles.particleList.push(new Particle(m.x ?? 0, m.y ?? 0));
    }
  });

  window.addEventListener('mousemove', (event) => {
    m.x = event.pageX;
    m.y = event.pageY;
    if (c.isClicked && !c.isPaused) {
      for (let i = 0; i < 1; i++) {
        if (Math.random() < 0.2) {
          particles.particleList.push(new Particle(m.x ?? 0, m.y ?? 0));
        }
      }
    }
  });
}
