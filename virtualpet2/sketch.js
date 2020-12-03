//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg, happyDogImg;
var milk, milkImage;
var milk;
var i;
var stray, strayImg;
function preload() {
  //load images here
  dogImg = loadImage("dog1.png");
  happyDogImg = loadImage("happydog.png");
  milkImage = loadImage("Milk.png");
  strayImage = loadImage("strayImg.png");
}

function setup() {
  createCanvas(800, 500);
  database = firebase.database();

  dog = createSprite(650, 200, 10, 10);
  dog.addImage("dogImg", dogImg);
  dog.scale = 0.2;

  foodStock = database.ref("food");
  foodStock.on("value", readStock);

  //feed = createButton("Feed The Dog");
  //feed.position(300, 300);
  //feed.mousePressed(feedDog);

  milk1 = createSprite(200, 200, 10, 10);
  milk1.addImage("milkImage", milkImage);
  milk1.scale = 0.1;
  milk2 = createSprite(220, 200, 10, 10);
  milk2.addImage("milkImage", milkImage);
  milk2.scale = 0.1;
  milk3 = createSprite(240, 200, 10, 10);
  milk3.addImage("milkImage", milkImage);
  milk3.scale = 0.1;
  milk4 = createSprite(260, 200, 10, 10);
  milk4.addImage("milkImage", milkImage);
  milk4.scale = 0.1;
  milk5 = createSprite(280, 200, 10, 10);
  milk5.addImage("milkImage", milkImage);
  milk5.scale = 0.1;
  milk6 = createSprite(300, 200, 10, 10);
  milk6.addImage("milkImage", milkImage);
  milk6.scale = 0.1;
  milk6 = createSprite(320, 200, 10, 10);
  milk6.addImage("milkImage", milkImage);
  milk6.scale = 0.1;
  milk7 = createSprite(340, 200, 10, 10);
  milk7.addImage("milkImage", milkImage);
  milk7.scale = 0.1;
  milk8 = createSprite(360, 200, 10, 10);
  milk8.addImage("milkImage", milkImage);
  milk8.scale = 0.1;
  milk9 = createSprite(380, 200, 10, 10);
  milk9.addImage("milkImage", milkImage);
  milk9.scale = 0.1;

  form = new Form();
}

function draw() {
  background(46, 139, 87);
  // if (feed.mousePressed()) {
  //dog.changeImage("happyDogImg", happyDogImg);
  //dog.addImage("happyDogImg", happyDogImg);
  //writeStock(foodStock);
  //}
  //if (keyWentDown(UP_ARROW)) {
  // addFood(foodStock);
  //}
  form.display();
  drawSprites();
  //add styles here
  textSize(15);
  //
  textSize(15);
  fill("yellow");
  text("FOOD REMAINING = " + foodStock, 400, 400);
  updateStock;
}
function readStock(data) {
  foodStock = data.val();
}

function writeStock(x) {
  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }
  database.ref("/").update({
    food: x,
  });
}

function updateStock() {
  input: 20;
}
function addFood(x) {
  database.ref("/").update({
    food: x + 1,
  });
}
function feedDog(x) {
  dog.changeImage("happyDogImg", happyDogImg);

  dog.addImage("happyDogImg", happyDogImg);
}
