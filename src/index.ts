import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720,
});

window.addEventListener("resize",()=>{
const scaleX = window.innerWidth / app.screen.width;
const scaleY = window.innerHeight / app.screen.height; 
const scale = Math.min (scaleX , scaleY);

const gameWidth = Math.round (app.screen.width * scale);
const gameHeight = Math.round (app.screen.height * scale); 

const marginHorizontal = Math.floor ((window.innerWidth - gameWidth)/2);
const marginVertical = Math.floor ((window.innerHeight - gameHeight)/2);

app.view.style.width = gameWidth + "px" ;
app.view.style.height = gameHeight + "px";

app.view.style.marginLeft = marginHorizontal + "px";
app.view.style.marginRight = marginHorizontal + "px";
app.view.style.marginTop = marginVertical + "px";
app.view.style.marginBottom = marginVertical + "px";

});

window.dispatchEvent(new Event("resize"));

Loader.shared.add({url:"./malakian.png", name: "myMalakian"});
Loader.shared.add({url:"./impresionismo.png", name:"outerspace"});

Loader.shared.onComplete.add(()=>{

const Malakian: Sprite = Sprite.from("myMalakian");

Malakian.anchor.set(0.5,0.5);

Malakian.x = 640;
Malakian.y = 360;

Malakian.scale.set(0.3);

const impresionismo: Sprite = Sprite.from ("outerspace")

impresionismo.anchor.set (0.5,0.5);


impresionismo.x = 640;
impresionismo.y = 360;

impresionismo.scale.set(1);
app.stage.addChild(impresionismo);
app.stage.addChild(Malakian);


});

Loader.shared.load();