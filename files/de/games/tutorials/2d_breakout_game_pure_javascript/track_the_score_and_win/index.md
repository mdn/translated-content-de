---
title: Punkte zählen und gewinnen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

Dies ist der **8. Schritt** von 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Ziegelsteine zu zerstören ist wirklich cool, aber noch besser wäre es, wenn das Spiel Punkte für jeden getroffenen Ziegel vergeben und die Gesamtsumme der Punkte zählen würde.

## Punkte zählen

Wenn Sie während des Spiels Ihre Punkte sehen können, können Sie im Laufe der Zeit Ihre Freunde beeindrucken. Sie benötigen eine Variable, um die Punkte aufzuzeichnen. Fügen Sie das Folgende in Ihr JavaScript ein, nach den restlichen Variablen:

```js
let score = 0;
```

Sie benötigen auch eine `drawScore()` Funktion, um die Punktanzeige zu erstellen und zu aktualisieren. Fügen Sie das Folgende nach der `collisionDetection()` Funktion hinzu:

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}
```

Text auf einer Leinwand zu zeichnen ist ähnlich wie das Zeichnen einer Form. Die Schriftart-Definition sieht genauso aus wie die in CSS — Sie können die Größe und den Schriftarttyp in der [`font()`](/de/docs/Web/API/CanvasRenderingContext2D/font) Methode festlegen. Dann verwenden Sie [`fillStyle()`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um die Farbe der Schriftart festzulegen, und [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText), um den tatsächlichen Text festzulegen, der auf der Leinwand platziert wird, und wo er platziert wird. Der erste Parameter ist der Text selbst — der obige Code zeigt die aktuelle Anzahl der Punkte — und die letzten beiden Parameter sind die Koordinaten, an denen der Text auf der Leinwand platziert wird.

Um bei jedem Treffer eines Ziegels Punkte zu vergeben, fügen Sie der `collisionDetection()` Funktion eine Zeile hinzu, um den Wert der Punkte-Variable bei jeder erkannten Kollision zu erhöhen. Fügen Sie die folgende hervorgehobene Zeile in Ihren Code ein:

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

Der Aufruf von `drawScore()` aus der `draw()` Funktion hält die Punkteanzeige mit jedem neuen Frame aktuell — fügen Sie die folgende Zeile innerhalb von `draw()` hinzu, direkt unter dem Aufruf von `drawPaddle()`:

```js
drawScore();
```

## Eine Gewinnnachricht anzeigen, wenn alle Ziegel zerstört wurden

Das Sammeln der Punkte funktioniert gut, aber Sie werden sie nicht für immer sammeln — was passiert, wenn alle Ziegel zerstört wurden? Das ist schließlich das Hauptziel des Spiels, deshalb sollten Sie eine Gewinnnachricht anzeigen, wenn alle verfügbaren Punkte gesammelt wurden. Fügen Sie den folgenden hervorgehobenen Abschnitt in Ihre `collisionDetection()` Funktion ein:

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

Dank dessen können Ihre Benutzer tatsächlich das Spiel gewinnen, wenn sie alle Ziegel zerstören, was bei einem Spiel ziemlich wichtig ist. Die Funktion `document.location.reload()` lädt die Seite neu und startet das Spiel erneut, sobald der Alert-Button geklickt wird.

## Vergleichen Sie Ihren Code

Der letzte Code sieht so aus (und funktioniert), falls Sie ihn mit Ihrem vergleichen und gegenüberstellen möchten:

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
> Versuchen Sie, mehr Punkte pro getroffenem Ziegel zu vergeben, und geben Sie die Anzahl der gesammelten Punkte im Endspiel-Warnfeld aus.

## Nächste Schritte

Das Spiel sieht zu diesem Zeitpunkt ziemlich gut aus. In der nächsten Lektion werden Sie die Attraktivität des Spiels steigern, indem Sie [Maussteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls) hinzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
