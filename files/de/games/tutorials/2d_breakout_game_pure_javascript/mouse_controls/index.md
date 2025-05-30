---
title: Maussteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

Dies ist der **9. Schritt** von 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html).

Das Spiel selbst ist eigentlich fertig, also lassen Sie uns daran arbeiten, es zu verfeinern. Wir haben bereits Tastatursteuerungen hinzugefügt, aber wir könnten ebenso leicht Maussteuerungen hinzufügen.

## Auf Mausbewegungen hören

Auf Mausbewegungen zu hören ist noch einfacher als auf Tastendrücke: Alles, was wir benötigen, ist ein Listener für das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis. Fügen Sie die folgende Zeile an derselben Stelle wie die anderen Event-Listener hinzu, direkt unter dem `keyup-Ereignis`:

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## Verankerung der Paddelbewegung an die Mausbewegung

Wir können die Paddelposition basierend auf den Zeigerkoordinaten aktualisieren — die folgende Handler-Funktion wird genau das tun. Fügen Sie die folgende Funktion zu Ihrem Code hinzu, unter der zuvor hinzugefügten Zeile:

```js
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

In dieser Funktion ermitteln wir zunächst einen `relativeX`-Wert, der gleich der horizontalen Mausposition im Ansichtsfenster (`e.clientX`) minus dem Abstand zwischen dem linken Rand des Canvas und dem linken Rand des Ansichtsfensters (`canvas.offsetLeft`) ist — effektiv entspricht dies dem Abstand zwischen dem linken Rand des Canvas und dem Mauszeiger. Wenn die relative X-Zeigerposition größer als null und kleiner als die Canvas-Breite ist, befindet sich der Zeiger innerhalb der Canvas-Grenzen, und die `paddleX`-Position (verankert an der linken Kante des Paddels) wird auf den `relativeX`-Wert minus die halbe Breite des Paddels gesetzt, sodass die Bewegung tatsächlich relativ zur Mitte des Paddels erfolgt.

Das Paddel folgt nun der Position des Mauszeigers, aber da wir die Bewegung auf die Größe des Canvas einschränken, wird es nicht vollständig auf einer der beiden Seiten verschwinden.

## Vergleichen Sie Ihren Code

Dies ist der aktuelle Stand des Codes, mit dem Sie vergleichen können:

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Start game</button>
```

```css hidden
canvas {
  background: #eee;
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

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

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
  ctx.fillText("Score: " + score, 8, 20);
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
> Versuchen Sie, die Grenzen der Paddelbewegung anzupassen, sodass das gesamte Paddel an beiden Rändern des Canvas sichtbar ist, anstatt nur die Hälfte davon.

## Nächste Schritte

Jetzt haben wir ein vollständiges Spiel und werden unsere Reihe von Lektionen mit einigen weiteren kleinen Anpassungen abschließen — [Abschluss](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
