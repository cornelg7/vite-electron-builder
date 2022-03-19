import Settings from '../../utils/Settings';
import Canvas from '../../utils/Canvas';
import type Particle from './Particle';

export default class Particles {
  static instance: Particles;
  particleList: Particle[];
  handleParticles: () => void;

  private constructor() {
    const c: Canvas = Canvas.getInstance();
    this.particleList = [];
    this.handleParticles = () => {
      for (let i = 0; i < this.particleList.length; i++) {
        this.particleList[i].update();
        this.particleList[i].draw(c.ctx);
        if (this.particleList[i].size <= 0) {
          this.particleList.splice(i, 1);
          i--;
          continue;
        }
        for (let j = i+1; j < this.particleList.length; j++) {
          const dx = Math.abs(this.particleList[i].x - this.particleList[j].x);
          const dy = Math.abs(this.particleList[i].y - this.particleList[j].y);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minSize = Math.min(
            this.particleList[i].size,
            this.particleList[j].size,
          );
          const maxDist = Settings.LINE_BETWEEN_MAX_DIST;
          const lineWidth = (1 - dist/maxDist ) * (minSize / Settings.LINE_BETWEEN_MIN_WIDTH_WEIGHT);
          if (dist < maxDist && Math.random() < Settings.LINE_BETWEEN_CHANCE_TO_FORM) {
            c.ctx.beginPath();
            c.ctx.strokeStyle = 'white';
            c.ctx.lineWidth = lineWidth;
            c.ctx.moveTo(this.particleList[i].x, this.particleList[i].y);
            c.ctx.lineTo(this.particleList[j].x, this.particleList[j].y);
            c.ctx.stroke();
          }
        }
      }
    };
  }

  static getInstance(): Particles {
    if (!Particles.instance) {
      Particles.instance = new Particles();
    }
    return Particles.instance;
  }
}
