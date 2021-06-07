class Ball{
    constructor(x,y,d,c){
        this.x = x
        this.y = y
        this.d = d
        this.c = c
    }
    draw(){
        push()
        noStroke()
        fill(this.c)
        ellipse(this.x,this.y,this.d,this.d)
        pop()
    }
    move(){
        this.y += this.speed
        this.x += this.speed
    }
}
