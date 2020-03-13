class paddle{
    constructor(x,y,w,h,c){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
        this.speed = 2
    }
    draw(){
        fill(this.c)
        rect(this.x,this.y,this.w,this.h)
    }
    moveUp(){
        if(this<0)
            return
        this.y -= this.speed 
    }
    moveDown(){
        if((this.y + this.h) >= height)
            return
        this.y += this.speed
    }
}