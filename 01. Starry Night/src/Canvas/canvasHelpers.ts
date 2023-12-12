import { CANVAS_SIZE_WIDTH } from "../globalConstants";
import { CANVAS_SIZE_HEIGHT } from "../globalConstants";
import { IPoint } from "./Point/IPoint";
import { Color } from "./Color";

export function initializeCanvas(id: String): HTMLCanvasElement {
    const canvas = <HTMLCanvasElement>document.createElement('canvas');

    canvas.id = "canvas_" + id;
    canvas.width = CANVAS_SIZE_WIDTH;
    canvas.height = CANVAS_SIZE_HEIGHT;
    canvas.style.border = '1px solid'

    document.body.appendChild(canvas);

    return canvas;
}

export function drawLineBetween2DPoints(
    ctx: CanvasRenderingContext2D, 
    a: IPoint, 
    b: IPoint,
    color: Color,
    lineWidth: number): void {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}