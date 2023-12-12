import { CANVAS_SIZE } from "../globalConstants";

export function initializeCanvas(id: String) {
    const canvas = <HTMLCanvasElement>document.createElement('canvas');

    canvas.id = "canvas_" + id;
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    canvas.style.border = '1px solid'

    document.body.appendChild(canvas);
}