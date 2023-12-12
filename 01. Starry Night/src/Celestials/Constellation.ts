import { Point } from "../Canvas/Point/Point";
import { Star } from "./Star";
import { drawLineBetween2DPoints } from "../Canvas/canvasHelpers";
import { Color } from "../Canvas/Color";

export class Constellation {
    private readonly stars: Star[];

    constructor(stars: Star[] | null = null){
        this.stars = stars ?? this.getDefaultConstellation();
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        for (let i: number = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            star.update();
            star.draw(ctx);
        }

        this.drawConstellation(ctx);
    }

    public getMinX() {
        return Math.min(...this.stars.map(x => x.location.x))
    }

    public getMaxX(){
        return Math.max(...this.stars.map(x => x.location.x))
    }

    public getMinY() {
        return Math.min(...this.stars.map(x => x.location.y))
    }

    public getMaxY() {
        return Math.max(...this.stars.map(x => x.location.y))
    }

    private getDefaultConstellation(): Star[] {
        let stars: Star[] = [
            new Star(new Point(100, 300), 4),
            new Star(new Point(200, 305), 4),
            new Star(new Point(300, 350), 4),
            new Star(new Point(400, 400), 4),
            new Star(new Point(400, 500), 4),
            new Star(new Point(500, 500), 4),
            new Star(new Point(500, 400), 4),
        ];

        return stars;
    }    

    private drawConstellation(ctx: CanvasRenderingContext2D): void{
        for (let i: number = 1; i < this.stars.length; i++) {
            let prevStar = this.stars[i - 1];
            let currentStar = this.stars[i];

            this.drawLineBetweenStars(ctx, prevStar, currentStar);
        }

        let prevStar = this.stars[3];
        let currentStar = this.stars[6];
        
        this.drawLineBetweenStars(ctx, prevStar, currentStar);
    }

    private drawLineBetweenStars(ctx: CanvasRenderingContext2D, a: Star, b: Star): void {
        drawLineBetween2DPoints(ctx, a.location, b.location, Color.White, 4);
    }
}
