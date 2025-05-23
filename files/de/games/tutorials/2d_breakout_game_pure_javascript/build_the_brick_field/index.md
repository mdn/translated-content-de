---
title: Erstellen des Clusters aus Bausteinen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

Dies ist der **6. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen würde, finden Sie unter [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

Nach der Anpassung der Spielmechanik sind wir nun in der Lage zu verlieren – das ist großartig, denn es bedeutet, dass sich das Spiel endlich mehr wie ein Spiel anfühlt. Allerdings wird es schnell langweilig, wenn man nur den Ball von den Wänden und dem Schläger abprallen lässt. Was ein Breakout-Spiel wirklich benötigt, sind einige Bausteine, die man mit dem Ball zerstören kann, und das werden wir jetzt erstellen!

## Einrichten der Variablen für die Bausteine

Das Gesamtziel dieser Lektion ist es, einige Zeilen Code für die Bausteine zu rendern, indem eine geschachtelte Schleife verwendet wird, die ein zweidimensionales Array durchläuft. Zuerst müssen wir jedoch einige Variablen einrichten, um Informationen über die Bausteine wie deren Breite und Höhe, Zeilen und Spalten usw. zu definieren. Fügen Sie die folgenden Zeilen zu Ihrem Code unterhalb der Variablen hinzu, die Sie zuvor in Ihrem Programm deklariert haben.

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

Hier haben wir die Anzahl der Zeilen und Spalten der Bausteine, deren Breite und Höhe, den Abstand zwischen den Bausteinen definiert, damit sie sich nicht berühren, sowie einen oberen und linken Offset, damit sie nicht direkt vom Rand der Leinwand gezeichnet werden.

Wir werden alle unsere Bausteine in einem zweidimensionalen Array halten. Es wird die Baustein-Spalten (c) enthalten, die wiederum die Baustein-Zeilen (r) enthalten, die wiederum jedes ein Objekt mit der `x`- und `y`-Position enthalten, um jeden Baustein auf dem Bildschirm zu zeichnen. Fügen Sie das Folgende direkt unter Ihren Variablen hinzu:

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

Der obige Code wird durch die Zeilen und Spalten schleifen und die neuen Bausteine erstellen. HINWEIS: Die Baustein-Objekte werden später auch für Zwecke der Kollisionserkennung verwendet.

## Zeichenlogik für die Bausteine

Lassen Sie uns nun eine Funktion erstellen, die alle Bausteine im Array durchläuft und sie auf dem Bildschirm zeichnet. Unser Code könnte so aussehen:

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

Wiederum durchlaufen wir die Zeilen und Spalten, um die `x`- und `y`-Position jedes Bausteins festzulegen, und malen auch einen Baustein auf die Leinwand — Größe `brickWidth` x `brickHeight` — mit jeder Schleifeniteration. Das Problem ist, dass wir sie alle an einem Ort malen, an den Koordinaten `(0,0)`. Was wir tun müssen, ist einige Berechnungen einzubeziehen, die die `x`- und `y`-Position jedes Bausteins für jede Schleifeniteration bestimmen:

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

Jede `brickX`-Position wird berechnet als `brickWidth` + `brickPadding`, multipliziert mit der Spaltennummer, `c`, plus das `brickOffsetLeft`; die Logik für das `brickY` ist identisch, außer dass es die Werte für die Zeilennummer, `r`, `brickHeight` und `brickOffsetTop` verwendet. Jetzt kann jeder Baustein an seinem richtigen Platz in Zeile und Spalte platziert werden, mit Abstand zwischen jedem Baustein, gezeichnet mit einem Offset von den oberen und linken Leinwandrändern.

Die endgültige Version der `drawBricks()`-Funktion, nachdem die `brickX`- und `brickY`-Werte als Koordinaten anstelle von `(0,0)` jedes Mal zugewiesen wurden, wird so aussehen — fügen Sie dies in Ihren Code unterhalb der `drawPaddle()`-Funktion ein:

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
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
```

## Die Bausteine tatsächlich zeichnen

Das Letzte, was in dieser Lektion zu tun ist, ist einen Aufruf an `drawBricks()` irgendwo in die `draw()`-Funktion einzufügen, vorzugsweise am Anfang, zwischen dem Löschen der Leinwand und dem Zeichnen des Balls. Fügen Sie das Folgende direkt über dem `drawBall()`-Aufruf hinzu:

```js
drawBricks();
```

## Vergleichen Sie Ihren Code

An diesem Punkt ist das Spiel wieder ein wenig interessanter geworden:

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

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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
      let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      if ((y -= paddleHeight)) {
        dy = -dy;
      }
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

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, die Anzahl der Bausteine in einer Reihe oder einer Spalte oder deren Positionen zu ändern.

## Nächste Schritte

Jetzt haben wir Bausteine! Aber der Ball interagiert überhaupt nicht mit ihnen — das werden wir ändern, wenn wir mit dem siebten Kapitel fortfahren: [Kollisionserkennung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
