import { IPoint } from "./Canvas/Point/IPoint";

export class Star {
    private readonly location: IPoint;
    private radius: number;

    constructor(location: IPoint){
        this.location = location;
        this.radius = 2;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.moveTo(this.location.x, this.location.y);
        ctx.beginPath;
        ctx.fillStyle = 'white';
        ctx.arc(
            this.location.x,
            this.location.y,
            this.radius,
            0,
            Math.PI * 2);
        ctx.fill();
    }

    public update(): void {
        this.radius = Math.random() * 2 + 2; // The radius will be between 2 and 4  
    }
}