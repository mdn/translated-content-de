---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es macht Spaß, den Ball von den Wänden abprallen zu sehen und das Paddel bewegen zu können, aber ansonsten passiert im Spiel nichts und es gibt weder eine Weiterentwicklung noch ein Endziel. Aus Sicht des Gameplays wäre es gut, verlieren zu können. Die Logik beim Verlieren in Breakout besteht darin, dass Sie verlieren, wenn Sie den Ball mit dem Paddel verfehlen und er den unteren Rand des Bildschirms erreicht.

## Spielende umsetzen

Lassen Sie uns versuchen, ein Spielende in unserem Spiel zu implementieren. Hier ist der Codeausschnitt aus der dritten Lektion, in dem wir den Ball von den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball von allen vier Wänden abprallen zu lassen, lassen wir jetzt nur noch drei zu — links, oben und rechts. Wenn der Ball die untere Wand berührt, endet das Spiel. Wir werden den zweiten If-Block so bearbeiten, dass er zu einem If-Else-Block wird, der unseren "Game Over"-Zustand auslöst, wenn der Ball mit dem unteren Rand der Leinwand kollidiert. Vorerst zeigen wir eine Warnmeldung an und starten das Spiel neu, indem wir die Seite neu laden.

Fügen Sie zuerst eine Deklaration für die Variable `interval` auf oberster Ebene ein, vor allen Funktionen:

```js
let interval = 0;
```

Ersetzen Sie dann die Stelle, an der Sie `setInterval()` ursprünglich aufgerufen haben:

```js
setInterval(draw, 10);
```

durch:

```js
interval = setInterval(draw, 10);
```

Ersetzen Sie dann die zweite If-Anweisung durch die folgende:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Das Paddel den Ball treffen lassen

Das Letzte, was in dieser Lektion zu tun ist, ist eine Art Kollisionserkennung zwischen dem Ball und dem Paddel zu schaffen, damit er abprallen und ins Spielfeld zurückkehren kann. Am einfachsten ist es zu prüfen, ob sich die Mitte des Balls zwischen dem linken und rechten Rand des Paddels befindet. Aktualisieren Sie den zuletzt geänderten Code erneut wie folgt:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
  }
}
```

Wenn der Ball den unteren Rand der Leinwand trifft, müssen wir prüfen, ob er das Paddel trifft. Wenn ja, prallt er wie erwartet ab; wenn nicht, dann ist das Spiel wie zuvor beendet.

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code im Vergleich zum Live-Beispiel unten aussieht:

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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

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
> Versuchen Sie, den Ball schneller zu machen, wenn er das Paddel trifft.

## Nächste Schritte

Bisher sind wir sehr gut vorangekommen und unser Spiel macht jetzt viel mehr Spaß, da man verlieren kann! Aber es fehlt noch etwas. Lassen Sie uns zum sechsten Kapitel — [Den Ziegelsteinbereich bauen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — übergehen und einige Ziegel hinzufügen, die der Ball zerstören kann.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
