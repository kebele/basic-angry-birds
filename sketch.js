const {
    Engine,
    World,
    Bodies,
    Mouse,
    MouseConstraint,
    Constraint
} = Matter;

let ground;
// let box;
const boxes = [];
let bird;
let world, engine;
let mConstraint; //m = mouse
let slingshot;


let dotImg;
let boxImg;
function preload(){
    dotImg = loadImage('dot.png');
    boxImg = loadImage('equals.png');
}

function setup(){
    const canvas = createCanvas(600,400);
    // console.log(Matter);//Matter ın yüklendiğine emin olalım
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-10, width, 20)//(x,y,w,h)
    // box = new Box(450, 300, 50, 75);
    for(let i = 0; i < 3; i++){
        // boxes[i] = new Box(450, 300, 50, 75);
        boxes[i] = new Box(450, 300-i*75, 70, 70);
    }
    bird = new Bird(150, 300, 25);
    slingshot = new SlingShot(150, 300, bird.body);

    const mouse = Mouse.create(canvas.elt);
    const options = {
        mouse : mouse,
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}

function keyPressed(){
    if(key == ' '){
        // slingshot.fly();
        World.remove(world, bird.body)
        bird = new Bird(150, 300, 25);
        slingshot.attach(bird.body);
    }
}

function mouseReleased(){
    
    setTimeout(() => {slingshot.fly()},100);
}

function draw(){
    background(0);
    Matter.Engine.update(engine);
    ground.show();
    for(let box of boxes){
        box.show();
    }
    // box.show();
    slingshot.show();
    bird.show();
}