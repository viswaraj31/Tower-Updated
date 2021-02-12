class Box {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Capture1.PNG");
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
        }
      }
}