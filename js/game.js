console.log("running");

let showSteps = [1,1,1,0, 0, 0, 0];
let doneSteps = [0,0,0,0,0,0,0];

let fridge = 0;
let onionsCut = 0;
let scaleX;
let scaleY;

function updateScale() {
  scaleX = canvas.width / 1920;
  scaleY = canvas.height / 1080;
}

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateScale();
}

// Get canvas from HTML
const canvas = document.getElementById("gameCanvas");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get drawing context
const ctx = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

//KEY INPUT
const keys = {};

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

//background object
const backgroundImage = new Image();
backgroundImage.src = "assets/Kitchen.png";

//mother object
const motherImages = {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image() 
}

//asign images
motherImages.up.src = "assets/mother_up.png";
motherImages.down.src = "assets/mother_down.png";
motherImages.left.src = "assets/mother_left.png";
motherImages.right.src = "assets/mother_right.png";

//load default
characters[0].image = motherImages.down;

//child object
const childImages = {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image() 
};

//asign images
childImages.up.src = "assets/child_up.png";
childImages.down.src = "assets/child_down.png";
childImages.left.src = "assets/child_left.png";
childImages.right.src = "assets/child_right.png";

//load default
characters[1].image = childImages.down;

//appliances object
const appliancesImages = {
    // stove: new Image(),
    // sink: new Image(),
    // oven: new Image(),
    // fridge: new Image(),
    // toaster: new Image(),
    // cuttingBoard: new Image(),
    // island: new Image(),
    bowl_empty: new Image(),
    plate: new Image(),
    tray: new Image(),
    pot_empty: new Image(),
    pan: new Image(),
    bowl_filled: new Image(),
    bowl_finished: new Image(),
    pot_filled: new Image(),
    cutting_board_filled: new Image(),
    canned_tomatoes: new Image(),
    waiting_time: new Image()
}

//assign images
appliancesImages.bowl_empty.src = "assets/bowl_empty.png";
appliancesImages.plate.src = "assets/plate_empty.png";
appliancesImages.tray.src = "assets/tray_empty.png";
appliancesImages.pot_empty.src = "assets/pot_empty.png";
appliancesImages.pan.src = "assets/pan_empty.png";

//TODO: ASSIGN
appliancesImages.bowl_filled.src = "assets/bowl_full_onion.png";
appliancesImages.bowl_finished.src = "assets/bowl_full_tomato.png";
appliancesImages.pot_filled.src = "assets/pot_full.png";
appliancesImages.cutting_board_filled.src = "assets/cutting_board.jpg";
appliancesImages.canned_tomatoes.src = "assets/tomato_can.png";
//appliancesImages.waiting_time.src = "assets/...";

let render = 
[
    {
        toDraw: 1,
        image: appliancesImages.bowl_empty,
        locationX: 70,
        locationY: 750,
        width: 130,
        height: 80
    },
    {
        toDraw: 1,
        image: appliancesImages.pot_empty,
        locationX: 45,
        locationY: 450,
        width: 170,
        height: 120
    },
    {
        toDraw: 0,
        image: appliancesImages.cutting_board_filled,
        locationX: slots[3].locationX,
        locationY: slots[3].locationY,
        width: slots[3].width,
        height: slots[3].height
    },
    {
        toDraw: 0,
        image: appliancesImages.pot_empty,
        locationX: slots[0].locationX,
        locationY: slots[0].locationY,
        width: slots[0].width,
        height: slots[0].height
    },
];

//appliances[8].image = appliancesImages.bowl;
appliances[8].image = appliancesImages.plate;
appliances[9].image = appliancesImages.tray;
//appliances[11].image = appliancesImages.pot;
appliances[10].image = appliancesImages.pan;

function getCharacterCenter(character) {
  return {
    x: character.locationX + character.width / 2,
    y: character.locationY + character.height / 2
  };
}

function getObjectCenter(obj) {
  return {
    x: obj.locationX + obj.width / 2,
    y: obj.locationY + obj.height / 2
  };
}

function getDistance(a, b) {
  return Math.sqrt(
    (a.x - b.x) ** 2 +
    (a.y - b.y) ** 2
  );
}

function nextStep(character, object){
    if(character.inventory == null && object.name == "Bowl Place"){
        //grab the bowl
        render[0].toDraw = 0;
        character.inventory = render[0].image;
    }

    if(character.inventory == null && object.name == "Fridge Place"){
        if(fridge==0){
            //grab the onions and garlic
            character.inventory = appliancesImages.bowl_filled;
            fridge = 1;
            doneSteps[0] = 1;
        } else {
            character.inventory = appliancesImages.canned_tomatoes;
            onionsCut = 1;
        }
    }
    
    if(character.inventory == appliancesImages.bowl_filled && object.name == "Cutting Board Place"){
        character.inventory = null;
        render[2].toDraw = 1;
        doneSteps[1] = 1;
    } else {
        if(character.inventory == appliancesImages.canned_tomatoes && object.name == "Stove Burner"){
        character.inventory = null;
        render[3].image = appliancesImages.pot_filled;
        doneSteps[3] = 1;
        } else {
            if(onionsCut == 1 && character.inventory == null && object.name == "Cutting Board Place"){
                render[2].toDraw = 0;
                character.inventory = render[2].image;
            }
        }
    }

    if(character.inventory == null && object.name == "Pot Place"){
        render[1].toDraw = 0;
        character.inventory = render[1].image;
    }

    if(character.inventory == render[1].image && object.name == "Stove Burner"){
        character.inventory = null;
        render[3].toDraw = 1;
        doneSteps[2] = 1;
    }

    if(character.inventory == render[0].image && object.name == "Stove Burner" && render[0].toDraw == 0){
        render[3].image = appliancesImages.pot_empty;
        character.inventory = appliancesImages.bowl_finished;
        console.log("in");
    }

    if(character.inventory == render[2].image && object.name == "Stove Burner"){
      character.inventory = null;
      doneSteps[4] = 1;
    }

    

    if(character.inventory == appliancesImages.bowl_finished && object.name == "Tray Place"){
        appliances[9].image = appliancesImages.bowl_finished;
        character.inventory = null;
        doneSteps[5] = 1;
    }

    if(character.inventory == null && object.name == "Stove Burner" && appliances[9].image == appliancesImages.bowl_finished){
        character.inventory = render[1].image;
        render[3].toDraw = 0;
    }

    if(character.inventory == render[1].image && object.name == "Sink Place" && appliances[9].image == appliancesImages.bowl_finished){
        character.inventory = null;
        doneSteps[6] = 1;
    }

}

function tryInteract(character) {

  const charCenter = getCharacterCenter(character);

  for (let i = 0; i < slots.length; i++) {

    const objCenter = getObjectCenter(slots[i]);
    const distance = getDistance(charCenter, objCenter);

    if (distance < 180) {   // interaction range
      console.log("Interacting with:", slots[i].name);
      nextStep(character, slots[i]);
      return;
    }
  }
}

//load default
// function checkCollision(character, appliance) {

// }

// function checkCollision(a, b){
//     return(
//         a.locationX < b.locationX + b.width &&
//         a.locationX + a.width > b.locationX &&
//         a.locationY < b.locationY + b.height &&
//         a.locationY + a.height > b.locationY
//     );
// }

function isCollidingBottom(character, rect) {

  const bottomLeft = {
    x: character.locationX+100,
    y: character.locationY + character.height - 30
  };

  const bottomRight = {
    x: character.locationX + character.width - 100,
    y: character.locationY + character.height - 30
  };

  return (
    pointInRect(bottomLeft, rect) ||
    pointInRect(bottomRight, rect)
  );
}

function pointInRect(point, rect) {
  return (
    point.x >= rect.locationX &&
    point.x <= rect.locationX + rect.width &&
    point.y >= rect.locationY &&
    point.y <= rect.locationY + rect.height
  );
}

function moveCharacter(character, newX, newY) {

  let temp = {
    locationX: newX,
    locationY: newY,
    width: character.width,
    height: character.height
  };

  let collision = false;

  for (let i = 0; i < 8; i++) {
    if (isCollidingBottom(temp, appliances[i])) {
      collision = true;
      break;
    }
  }

  if (!collision) {
    character.locationX = newX;
    character.locationY = newY;
  }
}

// function update() {
//   // Player 1 (WASD)
//   let stepSize = 5;
//   if (keys["w"]) {
//     characters[0].locationY -= stepSize;
//     characters[0].image = motherImages.up;
//   }
//   if (keys["s"]) {
//     characters[0].locationY += stepSize;
//     characters[0].image = motherImages.down;
//   }
//   if (keys["a"]) {
//     characters[0].locationX -= 2*stepSize;
//     characters[0].image = motherImages.left;
//   }
//   if (keys["d"]) {
//     characters[0].locationX += 2*stepSize;
//     characters[0].image = motherImages.right;
//   }

//   // Player 2 (Arrow keys)
//   if (keys["ArrowUp"]) {
//     characters[1].locationY -= stepSize;
//     characters[1].image = childImages.up;
//   }
//   if (keys["ArrowDown"]) {
//     characters[1].locationY += stepSize;
//     characters[1].image = childImages.down;
//   }
//   if (keys["ArrowLeft"]) {
//     characters[1].locationX -= 2*stepSize;
//     characters[1].image = childImages.left;
//   }
//   if (keys["ArrowRight"]) {
//     characters[1].locationX += 2*stepSize;
//     characters[1].image = childImages.right;
//   }
// }

function update() {

  let stepSize = 5;

  // Player 1
  let p1 = characters[0];
  let newX1 = p1.locationX;
  let newY1 = p1.locationY;

  if (keys["w"]) {
    newY1 -= stepSize;
    p1.image = motherImages.up;
  }
  if (keys["s"]) {
    newY1 += stepSize;
    p1.image = motherImages.down;
  }
  if (keys["a"]) {
    newX1 -= 2 * stepSize;
    p1.image = motherImages.left;
  }
  if (keys["d"]) {
    newX1 += 2 * stepSize;
    p1.image = motherImages.right;
  }
  if (keys[" "]){
    tryInteract(characters[0]);
  }
  

  moveCharacter(p1, newX1, newY1);


  // Player 2
  let p2 = characters[1];
  let newX2 = p2.locationX;
  let newY2 = p2.locationY;

  if (keys["ArrowUp"]) {
    newY2 -= stepSize;
    p2.image = childImages.up;
  }
  if (keys["ArrowDown"]) {
    newY2 += stepSize;
    p2.image = childImages.down;
  }
  if (keys["ArrowLeft"]) {
    newX2 -= 2 * stepSize;
    p2.image = childImages.left;
  }
  if (keys["ArrowRight"]) {
    newX2 += 2 * stepSize;
    p2.image = childImages.right;
  }
  if(keys["Enter"]){
    tryInteract(characters[1]);
  }

  moveCharacter(p2, newX2, newY2);
}

function drawDynamics(object){
    if(object.toDraw == 1){
        ctx.drawImage(object.image, object.locationX*scaleX, object.locationY*scaleY, object.width*scaleX, object.height*scaleY);
    }
}

function draw(){
    //clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // draw appliances
    // for (let i = 0; i < 8; i++) {
    //     ctx.fillStyle = "gray";
    //     ctx.fillRect(appliances[i].locationX*scaleX, appliances[i].locationY*scaleY, appliances[i].width*scaleX, appliances[i].height*scaleY);
    //     // draw label
    //     ctx.fillStyle = "black";
    //     ctx.font = "10px Arial";
    //     ctx.fillText(
    //     appliances[i].name,
    //     appliances[i].locationX * scaleX,
    //     appliances[i].locationY * scaleY - 5
    // );
    // }

    //draw slots
    // for (let i = 0; i < slots.length; i++) {
    //     ctx.fillStyle = "gray";
    //     ctx.fillRect(slots[i].locationX*scaleX, slots[i].locationY*scaleY, slots[i].width*scaleX, slots[i].height*scaleY);
    //     // draw label
    //     ctx.fillStyle = "black";
    //     ctx.font = "10px Arial";
    //     ctx.fillText(
    //     slots[i].name,
    //     slots[i].locationX * scaleX,
    //     slots[i].locationY * scaleY - 5
    // );
    // }

    for(let i = 8; i < appliances.length; i++) {
         ctx.drawImage(appliances[i].image, appliances[i].locationX*scaleX, appliances[i].locationY*scaleY, appliances[i].width*scaleX, appliances[i].height*scaleY);
    }

    //draw dynamics

    for(let i=0; i<render.length; i++){
        drawDynamics(render[i]);
    }

    //draw mother
    ctx.drawImage(characters[0].image, characters[0].locationX * scaleX, characters[0].locationY * scaleY, characters[0].width * scaleX, characters[0].height * scaleY);
    //draw inventory
    // ctx.strokeStyle = "red";
    // ctx.strokeRect(
    //     (characters[0].locationX + characters[0].width / 4) * scaleX,
    //     (characters[0].locationY + characters[0].height / 1.5) * scaleY,
    //     (characters[0].width / 2) * scaleX,
    //     (characters[0].height / 5) * scaleY
    // );
    if(characters[0].inventory != null){
        ctx.drawImage(
        characters[0].inventory,
        (characters[0].locationX + characters[0].width / 4) * scaleX,
        (characters[0].locationY + characters[0].height / 1.5) * scaleY,
        (characters[0].width / 2) * scaleX,
        (characters[0].height / 5) * scaleY
    );
    }

    // ctx.strokeStyle = 'red';      // Set border color
    // ctx.lineWidth = 1;           // Set border thickness
    // ctx.strokeRect(characters[0].locationX * scaleX+30, characters[0].locationY * scaleY, characters[0].width * scaleX-50, characters[0].height * scaleY-30);

    //draw child
    // ctx.strokeStyle = 'red';      // Set border color
    // ctx.lineWidth = 1;           // Set border thickness
    // ctx.strokeRect(characters[1].locationX * scaleX+30, characters[1].locationY * scaleY, characters[1].width * scaleX-50, characters[1].height * scaleY-30);
    ctx.drawImage(characters[1].image, characters[1].locationX * scaleX, characters[1].locationY * scaleY, characters[1].width * scaleX, characters[1].height * scaleY);
    //draw inventory
    // ctx.strokeStyle = "red";
    // ctx.strokeRect(
    //     (characters[1].locationX + characters[1].width / 4) * scaleX,
    //     (characters[1].locationY + characters[1].height / 1.7) * scaleY,
    //     (characters[1].width / 2) * scaleX,
    //     (characters[1].height / 6) * scaleY
    // );

    if(characters[1].inventory != null){
        ctx.drawImage(
        characters[1].inventory,
        (characters[1].locationX + characters[1].width / 4) * scaleX,
        (characters[1].locationY + characters[1].height / 1.5) * scaleY,
        (characters[1].width / 2) * scaleX,
        (characters[1].height / 5) * scaleY
    );
    }
}

function updateSteps(){
  if(doneSteps[2]==1){
    showSteps[3]=1;
  }
  if(doneSteps[1]==1 && doneSteps[2] == 1){
    showSteps[4] = 1;
  }
  if(doneSteps[3] == 1 && doneSteps[4]==1){
    showSteps[5] = 1;
  }
  if(doneSteps[5] == 1){
    showSteps[6] = 1;
  }
}

function displaySteps(){
  for(let i=0; i<showSteps.length; i++){
    if(showSteps[i]==1){
      document.getElementById("step"+(i+1)).style.display = "list-item";
    } else {
      document.getElementById("step"+(i+1)).style.display = "none";
    }

    if(doneSteps[i]==1){
      document.getElementById("step"+(i+1)).style.textDecoration = "line-through";
    }
  }
}

function gameLoop() {
    update();
    draw();
    updateSteps();
    displaySteps();
    requestAnimationFrame(gameLoop);
}

gameLoop();