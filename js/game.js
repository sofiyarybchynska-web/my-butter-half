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

appliances[7].image = appliancesImages.bowl;
appliances[8].image = appliancesImages.plate;
appliances[9].image = appliancesImages.tray;
appliances[10].image = appliancesImages.pot;
appliances[11].image = appliancesImages.pan;

//load default
// function checkCollision(character, appliance) {

// }

function update() {
  // Player 1 (WASD)
  let stepSize = 5;
  if (keys["w"]) {
    characters[0].locationY -= stepSize;
    characters[0].image = motherImages.up;
  }
  if (keys["s"]) {
    characters[0].locationY += stepSize;
    characters[0].image = motherImages.down;
  }
  if (keys["a"]) {
    characters[0].locationX -= 2*stepSize;
    characters[0].image = motherImages.left;
  }
  if (keys["d"]) {
    characters[0].locationX += 2*stepSize;
    characters[0].image = motherImages.right;
  }

  // Player 2 (Arrow keys)
  if (keys["ArrowUp"]) {
    characters[1].locationY -= stepSize;
    characters[1].image = childImages.up;
  }
  if (keys["ArrowDown"]) {
    characters[1].locationY += stepSize;
    characters[1].image = childImages.down;
  }
  if (keys["ArrowLeft"]) {
    characters[1].locationX -= 2*stepSize;
    characters[1].image = childImages.left;
  }
  if (keys["ArrowRight"]) {
    characters[1].locationX += 2*stepSize;
    characters[1].image = childImages.right;
  }
}

function draw(){
    //clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // draw appliances
    for (let i = 0; i < 6; i++) {
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
    //draw child
    ctx.drawImage(characters[1].image, characters[1].locationX * scaleX, characters[1].locationY * scaleY, characters[1].width * scaleX, characters[1].height * scaleY);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();