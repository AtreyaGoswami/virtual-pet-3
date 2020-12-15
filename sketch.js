
var dogI,happyI,

function preload()
{
  dogI = loadImage("images/dogimg.png");
  happyI = loadImage("images/dogimg.png");
  
  

}

function setup() {
  database = firebase.database();
  createCanvas(1200, 500);
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock,showError);
  
  dog = createSprite(180,200,20,20);
  dog.addImage(normalDog);

  dog.scale = 0.25;

  feed = createSprite("Feed the dog");
  feed.position(670,95);
  feed.mousePressed(feedDog);

  addFood = createBut("Add Food");
  addFood.position(790,95);
  addFood.mousePressed(addFoods);

  player = createButton("Play")
  player.position(1090,95);
  player.mousePressed(play);

  foodObject = new Food();
}

  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogI);
  dog.scale = 0.15;




function draw() {  
  background("black")
  if(foodObject.lastFed >= 12){
    text("Last Feed : " + foodObject.lastFed%12 + " PM", 350,30);
  }else if(foodObject.lastFed == 0){
    text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed :" + foodObject.lastFed + " AM",350,30);
  }

  fill("white");
  //text("Note: Press the up arrow to feed the dog milk!",130,20)
  text("Food Remaining: " + foodObject.foodStock,550,130);


 
  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyI);

  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogI);
  }

}

