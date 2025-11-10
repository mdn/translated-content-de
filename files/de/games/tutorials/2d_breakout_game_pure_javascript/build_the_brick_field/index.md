---
title: Baue das Spielfeld mit Ziegeln
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

Dies ist der **6. Schritt** von 10 im [Gamedev Canvas Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen würde, unter [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

Nachdem wir die Spielmechaniken modifiziert haben, können wir nun verlieren — das ist großartig, da es bedeutet, dass sich das Spiel endlich mehr wie ein Spiel anfühlt. Es wird jedoch schnell langweilig, wenn alles, was Sie tun, darin besteht, den Ball von den Wänden und dem Schlagholz abprallen zu lassen. Was ein Breakout-Spiel wirklich braucht, sind einige Ziegelsteine, um sie mit dem Ball zu zerstören, und genau das werden wir jetzt erstellen!

## Einrichtung der Ziegel-Variablen

Das übergeordnete Ziel dieser Lektion ist es, einige Codezeilen für die Ziegel zu rendern, mithilfe einer verschachtelten Schleife, die durch ein zweidimensionales Array arbeitet. Zuerst müssen wir jedoch einige Variablen einrichten, um Informationen über die Ziegel zu definieren, wie z.B. deren Breite und Höhe, Reihen und Spalten etc. Fügen Sie die folgenden Zeilen unterhalb der Variablen hinzu, die Sie zuvor in Ihrem Programm deklariert haben.

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

Hier haben wir die Anzahl der Reihen und Spalten von Ziegeln definiert, deren Breite und Höhe, den Abstand zwischen den Ziegeln, damit sie sich nicht berühren, sowie einen oberen und linken Versatz, damit sie nicht direkt vom Rand des Canvas gezeichnet werden.

Wir werden alle unsere Ziegel in einem zweidimensionalen Array halten. Es wird die Ziegelspalten (c) enthalten, die wiederum die Ziegelreihen (r) enthalten, die wiederum jedes ein Objekt enthalten, das die `x` und `y` Position enthält, um jeden Ziegel auf dem Bildschirm zu zeichnen. Fügen Sie das Folgende direkt unterhalb Ihrer Variablen hinzu:

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

Der obige Code wird durch die Reihen und Spalten schleifen und die neuen Ziegel erstellen. HINWEIS: Die Ziegelobjekte werden später auch für Zwecke der Kollisionsdetektion verwendet.

## Ziegel-Zeichenlogik

Nun lassen Sie uns eine Funktion erstellen, die alle Ziegel im Array durchläuft und sie auf dem Bildschirm zeichnet. Unser Code könnte so aussehen:

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

Erneut schleifen wir durch die Reihen und Spalten, um die `x` und `y` Position jedes Ziegels festzulegen, und wir malen auch einen Ziegel auf dem Canvas — Größe `brickWidth` x `brickHeight` — mit jeder Schleifeniteration. Das Problem ist, dass wir sie alle an einem Ort zeichnen, bei den Koordinaten `(0,0)`. Was wir tun müssen, ist einige Berechnungen einzuschließen, die die `x` und `y` Position jedes Ziegels für jede Schleifeniteration ermitteln:

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

Jede `brickX` Position wird berechnet als `brickWidth` + `brickPadding`, multipliziert mit der Spaltennummer, `c`, plus dem `brickOffsetLeft`; die Logik für das `brickY` ist identisch, außer dass sie die Werte für die Zeilennummer, `r`, `brickHeight` und `brickOffsetTop` verwendet. Nun kann jeder einzelne Ziegel an seiner richtigen Stelle in Reihe und Spalte platziert werden, mit Abstand zwischen jedem Ziegel, und mit einem Versatz von den linken und oberen Canvas-Rändern gezeichnet werden.

Die endgültige Version der `drawBricks()` Funktion, nachdem die `brickX` und `brickY` Werte als Koordinaten anstelle von `(0,0)` jedes Mal zugewiesen wurden, sieht so aus — fügen Sie dies in Ihren Code unterhalb der `drawPaddle()` Funktion hinzu:

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

Das Letzte, was in dieser Lektion zu tun ist, ist ein Aufruf von `drawBricks()` irgendwo in der `draw()` Funktion hinzuzufügen, vorzugsweise am Anfang, zwischen dem Löschen des Canvas und dem Zeichnen des Balls. Fügen Sie das Folgende direkt über dem `drawBall()` Aufruf hinzu:

```js
drawBricks();
```

## Vergleichen Sie Ihren Code

An diesem Punkt ist das Spiel wieder etwas interessanter geworden:

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

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

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

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, die Anzahl der Ziegel in einer Reihe oder einer Spalte oder ihre Positionen zu ändern.

## Nächste Schritte

Jetzt haben wir also Ziegel! Aber der Ball interagiert überhaupt nicht mit ihnen — das werden wir ändern, während wir weitermachen zum siebten Kapitel: [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
