---
title: Kollisionserkennung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
l10n:
  sourceCommit: d06189f1c718262044a0d0b92e690ebed83b65be
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Dies ist der **7. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html) finden.

Wir haben bereits die Steine auf dem Bildschirm, aber das Spiel ist immer noch nicht _so_ interessant, da der Ball einfach durch sie hindurchgeht. Wir müssen darüber nachdenken, eine Kollisionserkennung hinzuzufügen, damit der Ball abprallen und sie zerstören kann.

Natürlich liegt es an uns, wie wir dies implementieren, aber es kann schwierig sein zu berechnen, ob der Ball das Rechteck berührt oder nicht, da es im Canvas dafür keine Hilfsfunktionen gibt. Im Rahmen dieses Tutorials werden wir den einfachsten Weg wählen. Wir werden prüfen, ob das Zentrum des Balls mit einem der angegebenen Steine kollidiert. Dies wird zwar nicht jedes Mal ein perfektes Ergebnis liefern und es gibt viel ausgefeiltere Methoden zur Kollisionserkennung, aber es wird ausreichen, um Ihnen die grundlegenden Konzepte beizubringen.

## Eine Kollisionserkennungsfunktion

Um damit anzufangen, möchten wir eine Kollisionserkennungsfunktion erstellen, die alle Steine durchläuft und die Position jedes einzelnen Steins mit den Koordinaten des Balls vergleicht, während jeder Frame gezeichnet wird. Zur besseren Lesbarkeit des Codes werden wir die Variable `b` definieren, um das Steinobjekt in jeder Schleife der Kollisionserkennung zu speichern:

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

Wenn sich das Zentrum des Balls innerhalb der Koordinaten eines unserer Steine befindet, ändern wir die Richtung des Balls. Damit das Zentrum des Balls innerhalb des Steins ist, müssen alle vier der folgenden Aussagen wahr sein:

- Die x-Position des Balls ist größer als die x-Position des Steins.
- Die x-Position des Balls ist kleiner als die x-Position des Steins plus seine Breite.
- Die y-Position des Balls ist größer als die y-Position des Steins.
- Die y-Position des Balls ist kleiner als die y-Position des Steins plus seine Höhe.

Lassen Sie uns das im Code aufschreiben:

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

Fügen Sie den obigen Block zu Ihrem Code hinzu, unterhalb der `keyUpHandler()` Funktion.

## Die Steine verschwinden lassen, nachdem sie getroffen wurden

Der obige Code wird wie gewünscht funktionieren und der Ball ändert seine Richtung. Das Problem ist, dass die Steine dort bleiben, wo sie sind. Wir müssen einen Weg finden, die zu entfernen, die wir bereits mit dem Ball getroffen haben. Wir können dies tun, indem wir jedes Steinobjekt mit einer zusätzlichen Variable versehen, die anzeigt, ob wir jeden Stein auf dem Bildschirm zeichnen wollen oder nicht. In dem Teil des Codes, in dem wir die Steine initialisieren, fügen wir eine `status` Eigenschaft zu jedem Steinobjekt hinzu. Aktualisieren Sie den folgenden Teil des Codes, wie durch die hervorgehobene Zeile angezeigt:

```js
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

Als Nächstes werden wir den Wert der `status` Eigenschaft jedes Steins in der `drawBricks()` Funktion überprüfen, bevor wir ihn zeichnen — wenn `status` `1` ist, zeichnen wir ihn, aber wenn er `0` ist, wurde er vom Ball getroffen und wir wollen ihn nicht mehr auf dem Bildschirm haben. Aktualisieren Sie Ihre `drawBricks()` Funktion wie folgt:

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

## Verfolgen und Aktualisieren des Status in der Kollisionserkennungsfunktion

Jetzt müssen wir die `status` Eigenschaft der Steine in die `collisionDetection()` Funktion einbeziehen: Wenn der Stein aktiv ist (sein Status ist `1`), prüfen wir, ob die Kollision stattfindet; wenn eine Kollision auftritt, setzen wir den Status des betroffenen Steins auf `0`, damit er nicht mehr auf dem Bildschirm gezeichnet wird. Aktualisieren Sie Ihre `collisionDetection()` Funktion wie unten angegeben:

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

## Aktivierung unserer Kollisionserkennung

Das letzte, was zu tun ist, ist einen Aufruf der `collisionDetection()` Funktion in unsere Haupt-`draw()` Funktion hinzuzufügen. Fügen Sie die folgende Zeile zur `draw()` Funktion hinzu, unmittelbar unter dem `drawPaddle()` Aufruf:

```js
collisionDetection();
```

## Vergleichen Sie Ihren Code

Die Kollisionserkennung des Balls wird nun in jedem Frame überprüft, bei jedem Stein. Jetzt können wir Steine zerstören! :-)

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

## Nächste Schritte

Jetzt kommen wir wirklich voran; machen wir weiter! Im achten Kapitel werden wir uns ansehen, wie wir [den Punktestand verfolgen und gewinnen können](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
