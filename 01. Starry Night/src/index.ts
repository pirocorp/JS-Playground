
initializeCanvas('starry-night');


function initializeCanvas(id: String) {
    const canvas = <HTMLCanvasElement>document.createElement('canvas');

    canvas.id = "canvas_" + id;
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.border = '1px solid'

    document.body.appendChild(canvas);
}
