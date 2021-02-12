//Create variables here
var dog, database, foodS, foodStock;
var dogImg,happyDogImg;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

 
  
  createCanvas(500, 500);
  dog = createSprite(200,300,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.3;

}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);

  }
  drawSprites();
  //add styles here

  textSize(20);
  fill(0,0,255);
  stroke(255,0,0);
  text("Note: Press UP Arrow Key To Feed The Dog Milk !!",40,90);

  text("Food remaining :" + foodS,170,200);
}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
    
  })
 
}
