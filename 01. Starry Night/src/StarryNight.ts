import { IPoint } from "./Canvas/Point/IPoint";
import { Point } from "./Canvas/Point/Point";
import { Star } from "./Star";

export class StarryNight {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly stars: Star[];

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

    private drawStars(){
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();    

        for (let i: number = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            star.update();
            star.draw(this.ctx);
        }
    }

    private getRandomStars(count: number): Star[] {
        let arr: Star[] = [];

        for(let i: number = 0; i < count; i++){
            let location: IPoint = new Point(
                Math.random() * this.canvas.width, 
                Math.random() * this.canvas.height);

            let star = new Star(location);            
            arr.push(star);
        }

        return arr;
    }

    private drawBackground(): void {
        this.ctx.beginPath
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}