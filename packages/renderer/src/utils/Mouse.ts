export default class Mouse {
  static instance: Mouse;
  x: number | undefined;
  y: number | undefined;

  private constructor() {
    this.x = undefined;
    this.y = undefined;
  }

  static getInstance(): Mouse {
    if (!Mouse.instance) {
      Mouse.instance = new Mouse();
    }
    return Mouse.instance;
  }
}
