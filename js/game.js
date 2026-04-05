console.log("running");

// Get canvas from HTML
const canvas = document.getElementById("gameCanvas");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get drawing context
const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//KEY INPUT
const keys = {};

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function update() {
  // Player 1 (WASD)
  if (keys["w"]) characters[0].locationY -= 3;
  if (keys["s"]) characters[0].locationY += 3;
  if (keys["a"]) characters[0].locationX -= 3;
  if (keys["d"]) characters[0].locationX += 3;

  // Player 2 (Arrow keys)
  if (keys["ArrowUp"]) characters[1].locationY -= 3;
  if (keys["ArrowDown"]) characters[1].locationY += 3;
  if (keys["ArrowLeft"]) characters[1].locationX -= 3;
  if (keys["ArrowRight"]) characters[1].locationX += 3;
}

function draw(){
    //clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background

    //draw appliances
    for (let i = 0; i < appliances.length; i++) {
    ctx.fillStyle = "gray";
    ctx.fillRect(appliances[i].locationX, appliances[i].locationY, 50, 50);
}
    // for (let i = 0; i < appliances.length; i++) {
    //     ctx.drawImage(appliances[i].image, appliances[i].locationX, appliances[i].locationY, 50, 50);
    // }

    //draw characters
    ctx.fillStyle = "red";
    ctx.fillRect(characters[0].locationX, characters[0].locationY, 50, 50);

    ctx.fillStyle = "blue";
    ctx.fillRect(characters[1].locationX, characters[1].locationY, 50, 50);
    /*
    ctx.fillStyle = "red";
    ctx.drawImage(characters[0].image, characters[0].locationX, characters[0].locationY, 50, 50);
    ctx.fillStyle = "blue";
    ctx.drawImage(characters[1].image, characters[1].locationX, characters[1].locationY, 50, 50);
    */
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();