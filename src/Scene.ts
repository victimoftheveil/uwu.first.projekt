import { Container } from "pixi.js";

export class SpaceMalakian extends Container {

    constructor ()
     { super(); 
        const outspaceMalakian: SpaceMalakian = new SpaceMalakian();

        outspaceMalakian.x = 640;
        outspaceMalakian.y = 360;

        this.addChild(outspaceMalakian);
    }
};