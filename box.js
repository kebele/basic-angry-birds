class Box{
    constructor(x,y,w,h){
        //this.x = x;//x ekseni
        //this.y = y;//y ekseni
        const options = {
            restitution:0.5
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h, options);
        Matter.World.add(world, this.body);
        this.w = w;//width
        this.h = h;//height
        
    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255)//white
        // rect(this.x, this.y, this.w, this.h)//kutuyu çizecek
        rectMode(CENTER);
        // rect(0, 0, this.w, this.h)//kutuyu çizecek
        imageMode(CENTER);
        image(boxImg, 0, 0, this.w, this.h)//kutuyu çizecek
        pop();
    }
}