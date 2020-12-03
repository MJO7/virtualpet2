class Form {
  constructor() {}
  display() {
    //var button2 = createButton("Reset");
    //button2.position(300, 400);
    //button2.mousePressed(function () {
    //deductFood(x);

    var button2 = createButton("Feed The Dog");
    button2.position(900, 50);
    button2.mousePressed(function () {
      dog.changeImage("happyDogImg", happyDogImg);
      dog.addImage("happyDogImg", happyDogImg);
      milk1.changeImage("strayImage", strayImage);
      milk1.addImage("strayImage", strayImage);
      database.ref("/").update({
        food: foodStock - 10,
      });
    });
    var button3 = createButton("Add Food For The Dog");
    button3.position(700, 50);
    button3.mousePressed(function () {
      milk1.changeImage("milkImage", milkImage);
      milk1.addImage("milkImage", milkImage);
      database.ref("/").update({
        food: foodStock + 10,
      });
    });
    // });
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  deductFood(x) {
    database.ref("/").update({
      food: x - 1,
    });
  }
}
