---
title: Maussteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

Dies ist der **9. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html) finden.

Das Spiel an sich ist eigentlich fertig, also lassen Sie uns daran arbeiten, es zu verfeinern. Wir haben bereits Tastatursteuerung hinzugefügt, aber wir könnten problemlos auch Maussteuerung hinzufügen.

## Auf Mausbewegungen hören

Auf Mausbewegungen zu hören ist weniger komplex als auf Tastendrucke: Wir benötigen nur den Listener für das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis. Fügen Sie die folgende Zeile an derselben Stelle wie die anderen Ereignis-Listener hinzu, direkt unter dem `keyup-Ereignis`:

```js
document.addEventListener("mousemove", mouseMoveHandler);
```

## Verankerung der Schlägerbewegung an die Mausbewegung

Wir können die Schlägerposition basierend auf den Zeigerkoordinaten aktualisieren — die folgende Handlerfunktion erledigt genau das. Fügen Sie die folgende Funktion in Ihren Code ein, unterhalb der zuvor hinzugefügten Zeile:

```js
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

In dieser Funktion berechnen wir zuerst einen `relativeX`-Wert, der dem horizontalen Mausstandort im Viewport (`e.clientX`) minus dem Abstand zwischen der linken Kante der Leinwand und der linken Kante des Viewports (`canvas.offsetLeft`) entspricht – effektiv ist dies gleich dem Abstand zwischen der linken Kante der Leinwand und dem Mauszeiger. Wenn der relative X-Zeiger-Standort größer als Null und kleiner als die Canvas-Breite ist, befindet sich der Zeiger innerhalb der Canvas-Grenzen, und die `paddleX`-Position (verankert an der linken Kante des Schlägers) wird auf den `relativeX`-Wert minus die halbe Breite des Schlägers gesetzt, sodass die Bewegung tatsächlich relativ zur Mitte des Schlägers erfolgt.

Der Schläger wird nun der Position des Mauszeigers folgen, aber da wir die Bewegung auf die Größe der Canvas beschränken, wird er nicht vollständig an einer Seite verschwinden.

## Vergleichen Sie Ihren Code

Dies ist der aktuellste Stand des Codes zum Vergleich:

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Start game</button>
```

```css hidden
canvas {
  background: #eeeeee;
}
button {
  display: block;
}
```

```js hidden
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("mousemove", mouseMoveHandler);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); // Needed for Chrome to end game
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

function startGame() {
  interval = setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, die Grenzen der Schlägerbewegung anzupassen, sodass der ganze Schläger an beiden Rändern der Canvas sichtbar ist, anstatt nur zur Hälfte.

## Nächste Schritte

Jetzt haben wir ein vollständiges Spiel, und wir werden unsere Serie von Lektionen mit einigen weiteren kleinen Anpassungen abschließen — [Abschluss](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
