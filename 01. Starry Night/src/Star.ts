import { IPoint } from "./Canvas/Point/IPoint";

export class Star {
    private readonly _location: IPoint;
    private readonly defaultRadius: number;
    private radius: number;

    constructor(
        location: IPoint,
        defaultRadius: number = 2){
        this._location = location;
        this.defaultRadius = defaultRadius;
        this.radius = this.defaultRadius;
    }

    public get location(): IPoint {
        return this._location;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.moveTo(this.location.x, this.location.y);
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
        this.radius = Math.random() * 2 + this.defaultRadius; // The radius will be between 2 and 4  
    }
}