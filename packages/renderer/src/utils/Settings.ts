interface SettingsType {
  PROJECT_NAME: string,
  CANVAS_WIDTH: number,
  CANVAS_HEIGHT: number,
  MIN_SIZE: number,
  MAX_SIZE: number,
  SIZE_ACCELERATION: number,
  MAX_SPEED: number,
  MIN_SPEED: number,
  NUMBER_OF_PARTICLES: number,
  LINE_BETWEEN_MAX_DIST: number,
  LINE_BETWEEN_MIN_WIDTH_WEIGHT: number,
  LINE_BETWEEN_CHANCE_TO_FORM: number,
}

const settings: SettingsType = {
  PROJECT_NAME: 'new project',
  CANVAS_WIDTH: 768,
  CANVAS_HEIGHT: 768,
  MIN_SIZE: 5,
  MAX_SIZE: 20,
  SIZE_ACCELERATION: 0.005,
  MAX_SPEED: 13,
  MIN_SPEED: 1.5,
  NUMBER_OF_PARTICLES: 50,
  LINE_BETWEEN_MAX_DIST: 150,
  LINE_BETWEEN_MIN_WIDTH_WEIGHT: 3,
  LINE_BETWEEN_CHANCE_TO_FORM: 1,
};

export default settings;
