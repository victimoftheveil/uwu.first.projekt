import { Container, Sprite } from "pixi.js";

export class SpaceMalakian extends Container {

    contructor () {
        super();

const Malakian: Sprite = Sprite.from("myMalakian");

Malakian.anchor.set(0.5,0.5);

Malakian.scale.set(0.3);

const impresionismo: Sprite = Sprite.from ("outerspace")

impresionismo.anchor.set (0.5,0.5);


impresionismo.scale.set(1);

this.addChild(impresionismo);
this.addChild(Malakian);

    }
};