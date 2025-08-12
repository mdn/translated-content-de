---
title: Verfolgen der Punkte und Gewinn
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

Dies ist der **8. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Die Zerstörung der Steine ist wirklich cool, aber um das Spiel noch beeindruckender zu machen, könnte es Punkte für jeden getroffenen Stein vergeben und die Gesamtpunktzahl zählen.

## Zählen der Punkte

Wenn Sie Ihre Punkte während des Spiels sehen können, können Sie irgendwann Ihre Freunde beeindrucken. Sie benötigen eine Variable, um die Punkte aufzuzeichnen. Fügen Sie das Folgende in Ihr JavaScript ein, nach dem Rest Ihrer Variablen:

```js
let score = 0;
```

Sie benötigen auch eine `drawScore()` Funktion, um die Anzeige der Punkte zu erstellen und zu aktualisieren. Fügen Sie das Folgende nach der `collisionDetection()` Funktion hinzu:

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}
```

Text auf einem Canvas zu zeichnen, ist ähnlich wie das Zeichnen einer Form. Die Schriftartdefinition sieht genau wie die in CSS aus — Sie können die Größe und den Schriftarttyp in der [`font()`](/de/docs/Web/API/CanvasRenderingContext2D/font) Methode festlegen. Verwenden Sie dann [`fillStyle()`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um die Farbe der Schriftart festzulegen, und [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText), um den tatsächlichen Text festzulegen, der auf das Canvas platziert wird, und wo er platziert wird. Der erste Parameter ist der Text selbst — der obige Code zeigt die aktuelle Anzahl der Punkte — und die letzten zwei Parameter sind die Koordinaten, an denen der Text auf das Canvas platziert wird.

Um Punkte zu vergeben, jedes Mal wenn ein Stein getroffen wird, fügen Sie eine Zeile zur `collisionDetection()` Funktion hinzu, um den Wert der Punktzahlvariable bei jedem erkannten Zusammenstoß zu erhöhen. Fügen Sie die folgende hervorgehobene Zeile zu Ihrem Code hinzu:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
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
        }
      }
    }
  }
}
```

Der Aufruf von `drawScore()` aus der `draw()` Funktion hält die Punktzahl mit jedem neuen Frame aktuell — fügen Sie die folgende Zeile innerhalb von `draw()` hinzu, direkt unter dem Aufruf von `drawPaddle()`:

```js
drawScore();
```

## Anzeige einer Gewinnmeldung, wenn alle Steine zerstört sind

Das Sammeln der Punkte funktioniert gut, aber Sie werden diese nicht für immer hinzufügen — was passiert, wenn alle Steine zerstört sind? Dies ist schließlich der Hauptzweck des Spiels, also sollten Sie eine Gewinnmeldung anzeigen, wenn alle verfügbaren Punkte gesammelt wurden. Fügen Sie den folgenden hervorgehobenen Abschnitt in Ihre `collisionDetection()` Funktion ein:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
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
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}
```

Dank dessen können Ihre Benutzer das Spiel tatsächlich gewinnen, wenn sie alle Steine zerstören, was bei Spielen ziemlich wichtig ist. Die Funktion `document.location.reload()` lädt die Seite neu und startet das Spiel erneut, sobald die Alarmtaste geklickt wird.

## Vergleichen Sie Ihren Code

Der neueste Code sieht (und funktioniert) so aus, falls Sie ihn mit Ihrem vergleichen möchten:

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

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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
> Versuchen Sie, mehr Punkte pro Stein getroffen hinzuzufügen, und geben Sie die Anzahl der gesammelten Punkte in der Endspiel-Warnbox aus.

## Nächste Schritte

Das Spiel sieht an diesem Punkt ziemlich gut aus. In der nächsten Lektion werden Sie die Attraktivität des Spiels erhöhen, indem Sie [Maussteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls) hinzufügen.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
