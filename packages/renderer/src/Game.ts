import Canvas from './utils/Canvas';
import Particles from './objects/particles/Particles';

const c: Canvas = Canvas.getInstance();
const particles: Particles = Particles.getInstance();

export default class Game {
  static instance: Game;
  animate: () => void;

  private constructor() {
    this.animate = () => {
      if (c.isPaused) { return; }
      c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height);
      c.ctx.fillStyle = 'black';
      c.ctx.fillRect(0, 0, c.canvas.width, c.canvas.height);
      particles.handleParticles();
      if (c.shouldPause) {
        c.shouldPause = false;
        c.isPaused = true;
      }
      requestAnimationFrame(this.animate);
    };
  }

  static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}
