class Bird{
    constructor(x,y,r){
        // this.x = x;//x ekseni
        // this.y = y;//y ekseni
        const options = {
            restitution:0.5
        }
        this.body = Matter.Bodies.circle(x,y,r, options);
        // Matter.Body.setMass(this.body, this.body.mass*3);
        Matter.World.add(world, this.body);
        this.r = r;//radius
    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //fill(255)//white
        // rect(this.x, this.y, this.w, this.h)//kutuyu çizecek
        //rectMode(CENTER);
        // circle(0, 0, this.r)//kutuyu çizecek
        imageMode(CENTER);
        image(dotImg, 0, 0, this.r*2, this.r*2)//kutu yerine image çizecek
        pop();
    }
}