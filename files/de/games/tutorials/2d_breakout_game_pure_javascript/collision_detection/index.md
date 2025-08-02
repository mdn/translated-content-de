---
title: Kollisionsdetektion
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Dies ist der **7. Schritt** von 10 des [Gamedev Canvas Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html).

Die Ziegel erscheinen bereits auf dem Bildschirm, aber das Spiel ist immer noch nicht _so_ interessant, da der Ball durch sie hindurchgeht. Wir müssen über die Hinzufügung einer Kollisionsdetektion nachdenken, damit der Ball von den Ziegeln abprallen und sie zerstören kann.

Es liegt an uns, wie wir dies umsetzen, jedoch kann es schwierig sein zu berechnen, ob der Ball das Rechteck berührt, da es dafür keine Hilfsfunktionen in Canvas gibt. Für diesen Leitfaden werden wir es auf die einfachste Weise tun. Wir werden prüfen, ob das Zentrum des Balls mit einem der gegebenen Ziegel kollidiert. Dies wird nicht jedes Mal ein perfektes Ergebnis liefern und es gibt weitaus ausgefeiltere Methoden zur Kollisionsdetektion, aber es wird ausreichen, um Ihnen die grundlegenden Konzepte zu vermitteln.

## Eine Funktion zur Kollisionsdetektion

Um dies zu starten, möchten wir eine Funktion zur Kollisionsdetektion erstellen, die alle Ziegel durchläuft und die Position jedes einzelnen Ziegels mit den Ballkoordinaten vergleicht, während jeden Frame gezeichnet wird. Für bessere Lesbarkeit des Codes werden wir die Variable `b` definieren, um das Ziegelobjekt in jeder Schleife der Kollisionsdetektion zu speichern:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      // calculations
    }
  }
}
```

Wenn sich das Zentrum des Balls innerhalb der Koordinaten eines unserer Ziegel befindet, ändern wir die Richtung des Balls. Damit das Zentrum des Balls innerhalb des Ziegels liegt, müssen alle vier der folgenden Bedingungen wahr sein:

- Die x-Position des Balls ist größer als die x-Position des Ziegels.
- Die x-Position des Balls ist kleiner als die x-Position des Ziegels plus dessen Breite.
- Die y-Position des Balls ist größer als die y-Position des Ziegels.
- Die y-Position des Balls ist kleiner als die y-Position des Ziegels plus dessen Höhe.

Lassen Sie uns das im Code festhalten:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
      }
    }
  }
}
```

Fügen Sie den obigen Codeblock zu Ihrem Code unterhalb der `keyUpHandler()` Funktion hinzu.

## Die Ziegel verschwinden lassen, nachdem sie getroffen wurden

Der oben genannte Code funktioniert wie gewünscht und der Ball ändert seine Richtung. Das Problem ist, dass die Ziegel dort bleiben, wo sie sind. Wir müssen einen Weg finden, um die zu entfernen, die wir bereits mit dem Ball getroffen haben. Wir können dies tun, indem wir ein zusätzliches Parameter hinzufügen, das angibt, ob wir jeden Ziegel auf dem Bildschirm zeichnen wollen oder nicht. In dem Teil des Codes, in dem wir die Ziegel initialisieren, fügen wir jedem Ziegelobjekt eine `status`-Eigenschaft hinzu. Aktualisieren Sie den folgenden Teil des Codes entsprechend der hervorgehobenen Zeile:

```js
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

Als nächstes prüfen wir den Wert jeder `status`-Eigenschaft des Ziegels in der `drawBricks()` Funktion, bevor wir ihn zeichnen — wenn `status` `1` ist, dann zeichnen wir ihn, aber wenn er `0` ist, wurde er vom Ball getroffen und wir wollen ihn nicht mehr auf dem Bildschirm haben. Aktualisieren Sie Ihre `drawBricks()` Funktion wie folgt:

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
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
}
```

## Verfolgen und Aktualisieren des Status in der Kollisionsdetektionsfunktion

Nun müssen wir die `status`-Eigenschaft des Ziegels in die `collisionDetection()` Funktion einbeziehen: wenn der Ziegel aktiv ist (sein Status ist `1`), prüfen wir, ob die Kollision stattfindet; wenn eine Kollision auftritt, setzen wir den Status des Ziegels auf `0`, sodass er nicht mehr auf dem Bildschirm gezeichnet wird. Aktualisieren Sie Ihre `collisionDetection()` Funktion wie unten angegeben:

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
        }
      }
    }
  }
}
```

## Aktivierung unserer Kollisionsdetektion

Der letzte Schritt ist das Hinzufügen eines Aufrufs der `collisionDetection()` Funktion zu unserer Haupt-`draw()` Funktion. Fügen Sie die folgende Zeile zur `draw()` Funktion, direkt unter dem `drawPaddle()` Aufruf, hinzu:

```js
collisionDetection();
```

## Vergleichen Sie Ihren Code

Die Kollisionsdetektion des Balls wird nun bei jedem Frame, mit jedem Ziegel geprüft. Jetzt können wir Ziegel zerstören! :-)

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
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();

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

## Nächste Schritte

Wir nähern uns definitiv dem Ziel; lassen Sie uns weitermachen! Im achten Kapitel werden wir uns ansehen, wie wir [den Punktestand verfolgen und gewinnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win) können.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
