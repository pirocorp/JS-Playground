import { CANVAS_SIZE_WIDTH } from "../globalConstants";
import { CANVAS_SIZE_HEIGHT } from "../globalConstants";

export function initializeCanvas(id: String) {
    const canvas = <HTMLCanvasElement>document.createElement('canvas');

    canvas.id = "canvas_" + id;
    canvas.width = CANVAS_SIZE_WIDTH;
    canvas.height = CANVAS_SIZE_HEIGHT;
    canvas.style.border = '1px solid'

    document.body.appendChild(canvas);
}