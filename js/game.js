console.log("running");

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
    bowl: new Image(),
    plate: new Image(),
    tray: new Image(),
    pot: new Image(),
    pan: new Image()
}

//assign images
appliancesImages.bowl.src = "assets/bowl_empty.png";
appliancesImages.plate.src = "assets/plate_empty.png";
appliancesImages.tray.src = "assets/tray_empty.png";
appliancesImages.pot.src = "assets/pot_empty.png";
appliancesImages.pan.src = "assets/pan_empty.png";

appliances[8].image = appliancesImages.bowl;
appliances[9].image = appliancesImages.plate;
appliances[10].image = appliancesImages.tray;
appliances[11].image = appliancesImages.pot;
appliances[12].image = appliancesImages.pan;

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
    x: character.locationX,
    y: character.locationY + character.height
  };

  const bottomRight = {
    x: character.locationX + character.width,
    y: character.locationY + character.height
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

  for (let i = 0; i < appliances.length; i++) {
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

  moveCharacter(p2, newX2, newY2);
}

function draw(){
    //clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // draw appliances
    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "gray";
        ctx.fillRect(appliances[i].locationX*scaleX, appliances[i].locationY*scaleY, appliances[i].width*scaleX, appliances[i].height*scaleY);
        // draw label
        ctx.fillStyle = "black";
        ctx.font = "10px Arial";
        ctx.fillText(
        appliances[i].name,
        appliances[i].locationX * scaleX,
        appliances[i].locationY * scaleY - 5
    );
    }

    // for(let i = 6; i < appliances.length; i++) {
    //     ctx.drawImage(appliances[i].image, appliances[i].locationX, appliances[i].locationY, appliances[i].width, appliances[i].height);
    // }

    //draw mother
    ctx.drawImage(characters[0].image, characters[0].locationX * scaleX, characters[0].locationY * scaleY, characters[0].width * scaleX, characters[0].height * scaleY);

    ctx.strokeStyle = 'red';      // Set border color
    ctx.lineWidth = 1;           // Set border thickness
    ctx.strokeRect(characters[0].locationX * scaleX, characters[0].locationY * scaleY, characters[0].width * scaleX, characters[0].height * scaleY);

    //draw child
    ctx.strokeStyle = 'red';      // Set border color
    ctx.lineWidth = 1;           // Set border thickness
    ctx.strokeRect(characters[1].locationX * scaleX, characters[1].locationY * scaleY, characters[1].width * scaleX, characters[1].height * scaleY);
    ctx.drawImage(characters[1].image, characters[1].locationX * scaleX, characters[1].locationY * scaleY, characters[1].width * scaleX, characters[1].height * scaleY);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();