---
title: Kollisionsdetektion
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Dies ist der **7. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html) finden.

Die Steine erscheinen bereits auf dem Bildschirm, aber das Spiel ist noch nicht _so_ interessant, da der Ball durch sie hindurchgeht. Wir müssen darüber nachdenken, eine Kollisionsdetektion hinzuzufügen, damit der Ball von den Steinen abprallen und diese zerstören kann.

Natürlich liegt es an uns, wie wir dies umsetzen, aber es kann schwierig sein, zu berechnen, ob der Ball den Kasten berührt oder nicht, da es keine Hilfsfunktionen in Canvas dafür gibt. Für die Zwecke dieses Tutorials werden wir den einfachsten Weg wählen. Wir werden prüfen, ob das Zentrum des Balls mit einem der gegebenen Steine kollidiert. Dies wird nicht jedes Mal ein perfektes Ergebnis liefern, und es gibt weitaus ausgefeiltere Methoden zur Kollisionsdetektion, aber es wird ausreichen, um Ihnen die grundlegenden Konzepte zu vermitteln.

## Eine Kollisionsdetektionsfunktion

Um dies alles in Gang zu bringen, möchten wir eine Kollisionsdetektionsfunktion erstellen, die alle Steine durchläuft und die Position jedes einzelnen Steins mit den Koordinaten des Balls vergleicht, während jedes Bild gezeichnet wird. Zur besseren Lesbarkeit des Codes werden wir die Variable `b` definieren, um das Steinobjekt in jeder Schleife der Kollisionsdetektion zu speichern:

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

Wenn das Zentrum des Balls innerhalb der Koordinaten eines unserer Steine liegt, ändern wir die Richtung des Balls. Damit das Zentrum des Balls innerhalb des Steins liegt, müssen alle vier der folgenden Aussagen wahr sein:

- Die x-Position des Balls ist größer als die x-Position des Steins.
- Die x-Position des Balls ist kleiner als die x-Position des Steins plus seiner Breite.
- Die y-Position des Balls ist größer als die y-Position des Steins.
- Die y-Position des Balls ist kleiner als die y-Position des Steins plus seiner Höhe.

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

Fügen Sie den obigen Block in Ihren Code ein, unterhalb der Funktion `keyUpHandler()`.

## Die Steine verschwinden lassen, nachdem sie getroffen wurden

Der obige Code wird wie gewünscht funktionieren und der Ball ändert seine Richtung. Das Problem ist, dass die Steine dort bleiben, wo sie sind. Wir müssen herausfinden, wie wir die Steine loswerden, die wir bereits mit dem Ball getroffen haben. Das können wir tun, indem wir einen zusätzlichen Parameter hinzufügen, um anzugeben, ob wir jeden Stein auf dem Bildschirm zeichnen wollen oder nicht. In dem Teil des Codes, in dem wir die Steine initialisieren, fügen wir jedem Steinobjekt eine `status`-Eigenschaft hinzu. Aktualisieren Sie den folgenden Teil des Codes, wie in der hervorgehobenen Zeile angegeben:

```js
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

Als nächstes überprüfen wir den Wert der `status`-Eigenschaft jedes Steins in der Funktion `drawBricks()`, bevor wir ihn zeichnen — wenn `status` `1` ist, dann zeichnen wir ihn, aber wenn es `0` ist, dann wurde er vom Ball getroffen und wir wollen ihn nicht mehr auf dem Bildschirm haben. Aktualisieren Sie Ihre Funktion `drawBricks()` wie folgt:

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

Jetzt müssen wir die `status`-Eigenschaft des Steins in die Funktion `collisionDetection()` einbeziehen: Wenn der Stein aktiv ist (sein Status ist `1`), prüfen wir, ob eine Kollision stattfindet; wenn eine Kollision auftritt, setzen wir den Status des betreffenden Steins auf `0`, damit er nicht mehr auf dem Bildschirm gezeichnet wird. Aktualisieren Sie Ihre Funktion `collisionDetection()` wie folgt:

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

Das Letzte, was zu tun ist, ist einen Aufruf der Funktion `collisionDetection()` in unsere Hauptfunktion `draw()` einzufügen. Fügen Sie die folgende Zeile in die Funktion `draw()` ein, direkt unter dem Aufruf von `drawPaddle()`:

```js
collisionDetection();
```

## Vergleichen Sie Ihren Code

Die Kollisionsdetektion des Balls wird nun bei jedem Bild überprüft, mit jedem Stein. Jetzt können wir Steine zerstören! :-)

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

## Nächste Schritte

Wir kommen jetzt definitiv weiter; lassen Sie uns vorankommen! Im achten Kapitel werden wir uns ansehen, wie wir [den Punktestand verfolgen und gewinnen können](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
