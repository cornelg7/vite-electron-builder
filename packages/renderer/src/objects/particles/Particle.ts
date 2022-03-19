import Settings from '../../utils/Settings';

export default class Particle {
  public x: number;
  public y: number;
  public size: number;
  private sizeAccelerationAccumulator: number;
  private speedX: number;
  private speedY: number;
  private decelerationX: number;
  private decelerationY: number;
  private minSpeed: number;

  constructor(mouseX: number, mouseY: number) {
    this.x = mouseX;
    this.y = mouseY;
    this.size = Math.random() * Settings.MAX_SIZE + Settings.MIN_SIZE;
    this.sizeAccelerationAccumulator = 0;
    this.speedX = Math.random() * Settings.MAX_SPEED * 2 - Settings.MAX_SPEED;
    this.speedY = Math.random() * Settings.MAX_SPEED * 2 - Settings.MAX_SPEED;
    this.decelerationX = 0.05;
    this.decelerationY = 0.05;
    this.minSpeed = Settings.MIN_SPEED;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (Math.abs(this.speedX - this.minSpeed) > 0) {
      this.speedX = this.speedX < 0
      ? this.speedX + this.decelerationX
      : this.speedX - this.decelerationX;
    }
    if (Math.abs(this.speedY - this.minSpeed) > 0) {
      this.speedY = this.speedY < 0
        ? this.speedY + this.decelerationY
        : this.speedY - this.decelerationY;
    }
    this.sizeAccelerationAccumulator += Settings.SIZE_ACCELERATION;
    this.size -= this.sizeAccelerationAccumulator;
    if (this.size <= 0) {
      this.size = 0;
    }
  }

  draw(ctx: any) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
