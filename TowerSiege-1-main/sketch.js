const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var floor,floor1,floor2;
var pox,pox1,pox2,pox3,pox4,pox5,pox6;
var box,box1,box2,box3;
var cox,cox1,cox2,cox3,cox4,cox5,cox6;
var rox,rox1,rox2,rox3,rox4;
var s,s1,s2;
var r,r1;

var b,b1,b2;
var n,n1;
var m;

var sling;
var hex;

var gameState = "onSling";



function setup(){
    var canvas = createCanvas(800,600);
    

    engine = Engine.create();
    world = engine.world;

    floor = new Floor(150,400,180,10);
    pox = new Boxp(80,380,20,30);
    pox1 = new Boxp(102,380,20,30);
    pox2 = new Boxp(124,380,20,30);
    pox3 = new Boxp(146,380,20,30);
    pox4 = new Boxp(168,380,20,30);
    pox5 = new Boxp(190,380,20,30);
    pox6 = new Boxp(212,380,20,30);
    cox = new Box(95,350,20,30);
    cox1 = new Box(135,350,20,30);
    cox2 = new Box(157,350,20,30);
    cox3 = new Box(179,350,20,30);
    cox4 = new Box(201,350,20,30);
    cox5 = new Box(106,350,20,30);
    rox = new Boxp(100,320,20,30);
    rox1 = new Boxp(115,320,20,30);
    rox2 = new Boxp(130,320,20,30);
    rox3 = new Boxp(170,320,20,30);
    rox4 = new Boxp(195,320,20,30);
    box = new Box(107,290,20,30);
    box1 = new Box(122,290,20,30);
    box2 = new Box(147,290,20,30);
    box3 = new Box(162,290,20,30);
    s = new Boxp(112,260,20,30);
    s1 = new Boxp(137,260,20,30);
    s2 = new Boxp(152,260,20,30);
    r = new Box(128,230,20,30);
    r1 = new Box(145,230,20,30);
    cox6 = new Boxp(133,200,20,30);


    floor1 = new Floor(500,300,100,10);
    b = new Box(471,280,20,30);
    b1 = new Box(500,280,20,30);
    b2 = new Box(528,280,20,30);
    n = new Boxp(486,250,20,30);
    n1 = new Boxp(514,250,20,30);
    m = new Box(500,220,20,30);

    floor2 = new Floor(400,600,800,10);
    hex = new Hex(-50,-50,50,50);
    sling = new SlingShot(hex.body,{x:200, y:60});

}

function draw(){
    background("black");
    Engine.update(engine);


    floor.display();
    floor1.display();
    floor2.display();
    pox.display();
    pox1.display();
    pox2.display();
    pox3.display();
    pox4.display();
    pox5.display();
    pox6.display();
    cox.display();
    cox1.display();
    cox2.display();
    cox3.display();
    cox4.display();
    cox5.display();
    rox.display();
    rox1.display();
    rox2.display();
    rox3.display();
    rox4.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    s.display();
    s1.display();
    s2.display();
    r.display();
    r1.display();
    cox6.display();
    b.display();
    b1.display();
    b2.display();
    n.display();
    n1.display();
    m.display();
    hex.display();
    sling.display();

    mouseDragged();

}

function mouseDragged(){
    if(gameState !== "launched")
    Matter.Body.setPosition(hex.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
    gameState = "launched"
}