---
title: Das Spielfeld für die Bausteine erstellen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

Dies ist der **6. Schritt** von 10 des [Gamedev-Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen würde, finden Sie unter [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

Nachdem wir die Spielmechanik angepasst haben, sind wir jetzt in der Lage zu verlieren — das ist großartig, da es bedeutet, dass sich das Spiel endlich mehr wie ein Spiel anfühlt. Es wird jedoch schnell langweilig, wenn alles, was man tun kann, darin besteht, den Ball von den Wänden und dem Schläger abprallen zu lassen. Was ein Breakout-Spiel wirklich braucht, sind einige Ziegelsteine, die der Ball zerstören kann, und genau das werden wir jetzt erstellen!

## Einrichtung der Ziegelstein-Variablen

Das übergeordnete Ziel dieser Lektion ist es, einige Codezeilen für die Ziegelsteine zu rendern, indem eine geschachtelte Schleife verwendet wird, die ein zweidimensionales Array durchläuft. Zuerst müssen wir jedoch einige Variablen einrichten, um Informationen über die Ziegelsteine wie ihre Breite und Höhe, Reihen und Spalten usw. zu definieren. Fügen Sie die folgenden Zeilen zu Ihrem Code hinzu, unterhalb der Variablen, die Sie zuvor in Ihrem Programm deklariert haben.

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

Hier haben wir die Anzahl der Reihen und Spalten der Ziegelsteine definiert, ihre Breite und Höhe, den Abstand zwischen den Ziegelsteinen, damit sie sich nicht berühren, sowie einen oberen und linken Versatz, damit sie nicht direkt vom Rand des Canvas gezeichnet werden.

Wir werden alle unsere Ziegelsteine in einem zweidimensionalen Array halten. Es wird die Ziegelsteinsäulen (c) enthalten, die wiederum die Ziegelsteinreihen (r) enthalten, die jeweils ein Objekt mit der `x`- und `y`-Position enthalten, um jeden Ziegelstein auf dem Bildschirm zu zeichnen. Fügen Sie das Folgende direkt unter Ihren Variablen hinzu:

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

Der obige Code wird durch die Reihen und Spalten gehen und die neuen Ziegelsteine erstellen. ACHTUNG: Die Ziegelstein-Objekte werden später auch für Zwecke der Kollisionserkennung verwendet.

## Zeichnen der Ziegelsteine

Lassen Sie uns nun eine Funktion erstellen, die alle Ziegelsteine im Array durchläuft und sie auf dem Bildschirm zeichnet. Unser Code könnte so aussehen:

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

Erneut durchlaufen wir die Reihen und Spalten, um die `x`- und `y`-Position jedes Ziegelsteins festzulegen, und malen bei jeder Schleifeniteration einen Ziegelstein auf das Canvas — Größe `brickWidth` x `brickHeight`. Das Problem ist, dass wir sie alle an einem Ort zeichnen, bei den Koordinaten `(0,0)`. Was wir tun müssen, ist einige Berechnungen einzubeziehen, die die `x`- und `y`-Position jedes Ziegelsteins für jede Schleifeniteration ermitteln:

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

Jede `brickX`-Position wird berechnet als `brickWidth` + `brickPadding`, multipliziert mit der Spaltennummer, `c`, plus dem `brickOffsetLeft`; die Logik für das `brickY` ist identisch, außer dass sie die Werte für die Reihennummer, `r`, `brickHeight` und `brickOffsetTop` verwendet. Jetzt kann jeder einzelne Ziegelstein in seiner richtigen Reihen- und Spaltenposition platziert werden, mit Abstand zwischen jedem Ziegelstein, gezeichnet mit einem Versatz von den linken und oberen Canvas-Kanten.

Die endgültige Version der `drawBricks()`-Funktion, nachdem die `brickX`- und `brickY`-Werte anstelle von `(0,0)` als Koordinaten zugewiesen wurden, sieht so aus — fügen Sie dies in Ihren Code unterhalb der `drawPaddle()`-Funktion hinzu:

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

## Tatsächlich die Ziegelsteine zeichnen

Das Letzte, was in dieser Lektion zu tun ist, ist einen Aufruf zu `drawBricks()` an einer Stelle in der `draw()`-Funktion hinzuzufügen, vorzugsweise zu Beginn, zwischen dem Löschen des Canvas und dem Zeichnen des Balls. Fügen Sie Folgendes direkt über dem Aufruf von `drawBall()` hinzu:

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
      if ((y = y - paddleHeight)) {
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
> Versuchen Sie, die Anzahl der Ziegelsteine in einer Reihe oder einer Spalte oder deren Positionen zu ändern.

## Nächste Schritte

Jetzt haben wir also Ziegelsteine! Aber der Ball interagiert überhaupt nicht mit ihnen — das werden wir ändern, wenn wir zum siebten Kapitel übergehen: [Kollisionserkennung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
