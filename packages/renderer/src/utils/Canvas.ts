import Settings from '../utils/Settings';

export default class Canvas {
  static instance: Canvas;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  isPaused: boolean;
  shouldPause: boolean;
  isClicked: boolean;

  private constructor() {
    this.canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    this.canvas.style.width = `${Settings.CANVAS_WIDTH}px`;
    this.canvas.style.height = `${Settings.CANVAS_HEIGHT}px`;
    this.canvas.width = Settings.CANVAS_WIDTH;
    this.canvas.height = Settings.CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext('2d')!;
    this.isPaused = false;
    this.shouldPause = false;
    this.isClicked = false;
  }

  static getInstance(): Canvas {
    if (!Canvas.instance) {
      Canvas.instance = new Canvas();
    }
    return Canvas.instance;
  }
}
