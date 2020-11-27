const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;
var particles = [];
var plinkos = [];
//var divisions = [];


var divisionHeight = 300;
var frameCount;


function setup() {
  createCanvas(480,800);

  engine= Engine.create();
  world= engine.world;

  ground = new Ground(1,790,1000,10);

  division1 = new Divisions(0,684,12,200);
  division2 = new Divisions(80,684,12,200);
  division3 = new Divisions(160,684,12,200);
  division4 = new Divisions(240,684,12,200);
  division5 = new Divisions(320,684,12,200);
  division6 = new Divisions(400,684,12,200);
  division7 = new Divisions(480,684,12,200);


 

  for (var j = 30; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  } 
  for (var j = 35; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();




for(var i =0; i<plinkos.length; i++){
  plinkos[i].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10))
}

for(var j =0; j < particles.length; j++){
  particles[j].display();
}


}
