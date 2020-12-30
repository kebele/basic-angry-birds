class Ground extends Box {
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.body.isStatic = true;
    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(150)//white
        // rect(this.x, this.y, this.w, this.h)//kutuyu çizecek
        rectMode(CENTER);
        rect(0, 0, this.w, this.h)//kutuyu çizecek
        
        pop();
    }
}

