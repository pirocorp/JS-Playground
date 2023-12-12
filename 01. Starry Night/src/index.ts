import { initializeCanvas } from "./Canvas/canvasHelpers";
import { StarryNight } from "./StarryNight";

const canvas = initializeCanvas('starry-night');
const starryNight = new StarryNight(canvas);
starryNight.draw();