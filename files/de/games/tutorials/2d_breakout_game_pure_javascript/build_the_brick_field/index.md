---
title: Erstellen Sie das Ziegel-Feld
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

Dies ist der **6. Schritt** von insgesamt 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen würde, unter [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html) finden.

Nach der Änderung der Spielmechanik können wir nun verlieren – das ist großartig, da das Spiel sich endlich mehr wie ein echtes Spiel anfühlt. Es wird jedoch schnell langweilig, wenn Sie nur den Ball von den Wänden und dem Schläger abprallen. Was ein Breakout-Spiel wirklich braucht, sind einige Ziegel, die durch den Ball zerstört werden können, und genau das werden wir jetzt erstellen!

## Einrichten der Ziegel-Variablen

Das Hauptziel dieser Lektion ist es, ein paar Zeilen Code für die Ziegel zu rendern, indem eine verschachtelte Schleife verwendet wird, die durch ein zweidimensionales Array arbeitet. Zuerst müssen wir jedoch einige Variablen festlegen, um Informationen über die Ziegel wie ihre Breite und Höhe, Reihen und Spalten usw. zu definieren. Fügen Sie die folgenden Zeilen zu Ihrem Code unterhalb der Variablen hinzu, die Sie zuvor in Ihrem Programm deklariert haben.

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

Hier haben wir die Anzahl der Reihen und Spalten der Ziegel definiert, ihre Breite und Höhe sowie den Abstand zwischen den Ziegeln, damit sie sich nicht berühren, und ein oberes und linkes Offset, damit sie nicht direkt vom Rand der Canvas gezeichnet beginnen.

Wir werden alle unsere Ziegel in einem zweidimensionalen Array halten. Es wird die Ziegelspalten (c) enthalten, die wiederum die Ziegelreihen (r) enthalten, die wiederum jedes ein Objekt enthalten, das die `x`- und `y`-Position enthält, um jeden Ziegel auf dem Bildschirm zu malen. Fügen Sie das Folgende direkt unter Ihren Variablen hinzu:

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

Der obige Code wird durch die Reihen und Spalten schleifen und die neuen Ziegel erstellen. HINWEIS: Die Ziegelobjekte werden später auch für die Kollisionsdetektion verwendet.

## Ziegel-Zeichnungslogik

Lassen Sie uns nun eine Funktion erstellen, um durch alle Ziegel im Array zu schleifen und sie auf dem Bildschirm zu zeichnen. Unser Code könnte so aussehen:

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

Wiederum schleifen wir durch die Reihen und Spalten, um die `x`- und `y`-Position jedes Ziegels festzulegen, und wir malen auch einen Ziegel auf die Canvas – Größe `brickWidth` x `brickHeight` – mit jedem Schleifendurchlauf. Das Problem ist, dass wir sie alle an einem Ort malen, an den Koordinaten `(0,0)`. Was wir tun müssen, ist einige Berechnungen einzuschließen, die die `x`- und `y`-Position jedes Ziegels für jede Schleifeniteration ermitteln:

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

Jede `brickX`-Position wird als `brickWidth` + `brickPadding` berechnet, multipliziert mit der Spaltennummer, `c`, plus dem `brickOffsetLeft`; die Logik für die `brickY` ist identisch, außer dass sie die Werte für die Reihennummer, `r`, `brickHeight` und `brickOffsetTop` verwendet. Nun kann jeder einzelne Ziegel an seinen richtigen Platz in Reihe und Spalte mit Abstand zwischen jedem Ziegel platziert werden, gezeichnet ausgerichtet vom linken und oberen Rand der Canvas.

Die endgültige Version der `drawBricks()`-Funktion, nachdem die `brickX`- und `brickY`-Werte als Koordinaten anstelle von `(0,0)` zugeordnet wurden, sieht so aus – fügen Sie dies in Ihren Code unterhalb der `drawPaddle()`-Funktion hinzu:

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

## Tatsächliches Zeichnen der Ziegel

Das Letzte, was in dieser Lektion zu tun ist, ist einen Aufruf zu `drawBricks()` irgendwo in der `draw()`-Funktion hinzuzufügen, vorzugsweise am Anfang, zwischen dem Löschen der Canvas und dem Zeichnen des Balls. Fügen Sie das Folgende direkt über dem `drawBall()`-Aufruf hinzu:

```js
drawBricks();
```

## Vergleichen Sie Ihren Code

An diesem Punkt ist das Spiel wieder ein bisschen interessanter geworden:

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
> Versuchen Sie, die Anzahl der Ziegel in einer Reihe oder einer Spalte oder deren Positionen zu ändern.

## Nächste Schritte

Jetzt haben wir also Ziegel! Aber der Ball interagiert noch nicht mit ihnen — das werden wir ändern, wenn wir zum siebten Kapitel fortfahren: [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
