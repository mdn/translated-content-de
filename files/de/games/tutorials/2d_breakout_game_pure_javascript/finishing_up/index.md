---
title: Abschluss
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
l10n:
  sourceCommit: 942bbbe848b4b742a689de970f697d4c5b355bde
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

Dies ist der **10. und letzte Schritt** des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html) finden.

Es gibt immer Verbesserungsmöglichkeiten in jedem Spiel, das wir schreiben. Zum Beispiel könnten wir dem Spieler mehr als ein Leben anbieten. Sie könnten ein oder zwei Fehler machen und dennoch in der Lage sein, das Spiel zu beenden. Wir könnten auch unsere Code-Darstellung verbessern.

## Dem Spieler einige Leben geben

Die Implementierung von Leben ist ziemlich unkompliziert. Lassen Sie uns zuerst eine Variable hinzufügen, um die Anzahl der Leben am selben Ort zu speichern, an dem wir unsere anderen Variablen deklariert haben:

```js
let lives = 3;
```

Das Zeichnen des Lebenszählers sieht fast genauso aus wie das Zeichnen des Punktestands — fügen Sie die folgende Funktion in Ihren Code unterhalb der `drawScore()` Funktion ein:

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
```

Anstatt das Spiel sofort zu beenden, werden wir die Anzahl der Leben verringern, bis sie nicht mehr verfügbar sind. Wir können auch die Ball- und Schlägerpositionen zurücksetzen, wenn der Spieler mit seinem nächsten Leben beginnt. Ersetzen Sie in der `draw()` Funktion die folgenden drei Zeilen:

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
```

Damit können wir die Logik etwas komplexer gestalten, wie unten angegeben:

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

Jetzt, wenn der Ball den unteren Bildschirmrand erreicht, ziehen wir ein Leben von der `lives` Variablen ab. Wenn keine Leben mehr übrig sind, ist das Spiel verloren; wenn noch Leben übrig sind, werden die Positionen von Ball und Schläger zurückgesetzt, ebenso wie die Bewegung des Balls.

### Darstellung der Lebensanzeige

Jetzt müssen Sie einen Aufruf von `drawLives()` innerhalb der `draw()` Funktion hinzufügen und ihn unterhalb des `drawScore()` Aufrufs hinzufügen.

```js
drawLives();
```

## Verbesserung der Darstellung mit requestAnimationFrame()

Nun arbeiten wir an etwas, das nicht mit der Spielmechanik verbunden ist, sondern mit der Art und Weise, wie es dargestellt wird. [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) hilft dem Browser, das Spiel besser darzustellen als die feste Bildrate, die wir derzeit mit [`setInterval()`](/de/docs/Web/API/SetInterval) implementiert haben. Ersetzen Sie die folgende Zeile:

```js
interval = setInterval(draw, 10);
```

durch:

```js
draw();
```

und entfernen Sie jede Instanz von:

```js
clearInterval(interval); // Needed for Chrome to end game
```

Dann fügen Sie ganz am Ende der `draw()` Funktion (direkt vor der schließenden geschweiften Klammer) die folgende Zeile ein, die die `draw()` Funktion immer wieder aufruft:

```js
requestAnimationFrame(draw);
```

Die `draw()` Funktion wird nun innerhalb einer `requestAnimationFrame()` Schleife immer wieder ausgeführt, jedoch nicht mit der festen 10-Millisekunden-Bildrate. Wir überlassen dem Browser die Kontrolle der Bildrate. Er synchronisiert die Bildrate entsprechend und rendert die Formen nur bei Bedarf. Dies führt zu einer effizienteren und flüssigeren Animationsschleife als die ältere `setInterval()` Methode.

## Vergleichen Sie Ihren Code

Das war's — die endgültige Version des Spiels ist bereit und startklar!

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

const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let lives = 3;

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
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
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
      if (bricks[c][r].status == 1) {
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
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
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
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

document.getElementById("runButton").addEventListener("click", function () {
  draw();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, die Anzahl der Leben und den Winkel zu ändern, in dem der Ball vom Schläger abprallt.

## Spiel vorbei - vorerst!

Sie haben alle Lektionen abgeschlossen - Glückwunsch! An diesem Punkt sollten Sie jetzt die Grundlagen der Canvas-Manipulation und die Logik hinter 2D-Spielen kennen. Jetzt ist ein guter Zeitpunkt, um einige Frameworks zu lernen und die Spieleentwicklung fortzusetzen. Sie können das Gegenstück dieser Serie, [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) oder das [Cyber Orb in Phaser gebaut](/de/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation) Tutorial ausprobieren. Sie können auch den [Games-Bereich auf MDN](/de/docs/Games) durchstöbern, um Inspiration und mehr Wissen zu erhalten.

Sie könnten auch zur [Indexseite dieser Tutorial-Serie](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) zurückkehren. Viel Spaß beim Programmieren!

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
