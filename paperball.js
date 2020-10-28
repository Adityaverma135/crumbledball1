class Paperball{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,20,options)
        //this.radius=20
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        //pos.x=mouseX
        //pos.y=mouseY
        fill("red")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,20,20)
    }
}