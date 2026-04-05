// Get canvas from HTML
const canvas = document.getElementById("gameCanvas");

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Get drawing context
const ctx = canvas.getContext("2d");

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
  if (keys["w"]) player1.y -= 3;
  if (keys["s"]) player1.y += 3;
  if (keys["a"]) player1.x -= 3;
  if (keys["d"]) player1.x += 3;

  // Player 2 (Arrow keys)
  if (keys["ArrowUp"]) player2.y -= 3;
  if (keys["ArrowDown"]) player2.y += 3;
  if (keys["ArrowLeft"]) player2.x -= 3;
  if (keys["ArrowRight"]) player2.x += 3;
}

function draw(){
    //clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background

    //draw appliances
    for (let i = 0; i < appliances.length; i++) {
        ctx.drawImage(appliances[i].image, appliances[i].locationX, appliances[i].locationY, 50, 50);
    }

    //draw characters
    ctx.fillStyle = "red";
    ctx.drawImage(characters[0].image, characters[0].locationX, characters[0].locationY, 50, 50);
    ctx.fillStyle = "blue";
    ctx.drawImage(characters[1].image, characters[1].locationX, characters[1].locationY, 50, 50);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();