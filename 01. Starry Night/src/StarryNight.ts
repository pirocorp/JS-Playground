import { IPoint } from "./Canvas/Point/IPoint";
import { Point } from "./Canvas/Point/Point";
import { Constellation } from "./Celestials/Constellation";
import { Star } from "./Celestials/Star";

export class StarryNight {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly stars: Star[];
    private readonly constellation = new Constellation();

    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")!;
        this.stars = this.getRandomStars(50); 

        this.drawStars = this.drawStars.bind(this);
        this.drawBackground();     
    }

    public draw(): void { 
        setInterval(this.drawStars, 1000/30);
    }

    private drawStars(): void {
        this.ctx.beginPath();
        this.drawBackground();    

        for (let i: number = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            star.update();
            star.draw(this.ctx);
        }

        this.constellation.draw(this.ctx);
    }

    private getRandomStars(count: number): Star[] {
        let arr: Star[] = [];

        for(let i: number = 0; i < count; i++){
            let coordinates: IPoint = this.generateCoordinatesAvoidingConstellation();

            let star = new Star(coordinates);            
            arr.push(star);
        }

        return arr;
    }

    private drawBackground(): void {
        
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private generateCoordinatesAvoidingConstellation(): IPoint {
        let x = Math.random() * this.canvas.width;
        let y = Math.random() * this.canvas.height;

        while (
            x >= this.constellation.getMinX()
            && x <= this.constellation.getMaxX()
            && y >= this.constellation.getMinY()
            && y <= this.constellation.getMaxY()) {
            x = Math.random() * this.canvas.width;
            y = Math.random() * this.canvas.height;
        }

        let coordinates: IPoint = new Point(x, y);
        return coordinates;
    }
}