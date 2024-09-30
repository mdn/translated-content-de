---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html) finden.

Es macht Spaß, den Ball an den Wänden abprallen zu sehen und das Paddel zu bewegen, aber das Spiel tut sonst nichts und hat weder einen Fortschritt noch ein Endziel. Es wäre gut aus Sicht des Gameplays, verlieren zu können. Die Logik hinter dem Verlieren im Breakout-Spiel besteht darin, dass Sie das Spiel verlieren, wenn Sie den Ball mit dem Paddel verpassen und ihn den unteren Rand des Bildschirms erreichen lassen.

## Implementierung des Game Over

Lassen Sie uns versuchen, das Game Over in unserem Spiel zu implementieren. Hier ist der Code aus der dritten Lektion, in dem wir den Ball an den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt dem Ball zu erlauben, von allen vier Wänden abzuprallen, lassen wir nun nur noch drei zu — links, oben und rechts. Wenn er die untere Wand trifft, endet das Spiel. Wir bearbeiten den zweiten if-Block so, dass er ein if-else Block wird, der unseren "Game Over"-Zustand auslöst, wenn der Ball die untere Kante der Leinwand trifft. Vorerst zeigen wir eine Alarmmeldung und starten das Spiel neu, indem wir die Seite neu laden.

Fügen Sie zuerst eine Deklaration für die `interval`-Variable auf der obersten Ebene, vor allen Funktionen hinzu:

```js
let interval = 0;
```

Dann ersetzen Sie die Stelle, an der Sie ursprünglich `setInterval()` aufgerufen haben:

```js
setInterval(draw, 10);
```

durch:

```js
interval = setInterval(draw, 10);
```

Ersetzen Sie dann die zweite if-Anweisung durch Folgendes:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Paddel den Ball treffen lassen

Das Letzte, was in dieser Lektion zu tun ist, ist eine Art Kollisionsdetektion zwischen dem Ball und dem Paddel zu schaffen, damit er daran abprallen und in den Spielbereich zurückkehren kann. Das Einfachste ist, zu überprüfen, ob sich das Zentrum des Balls zwischen den linken und rechten Kanten des Paddels befindet. Aktualisieren Sie den zuletzt modifizierten Code erneut wie folgt:

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

Wenn der Ball die untere Kante der Leinwand trifft, müssen wir prüfen, ob er das Paddel trifft. Falls ja, prallt er ab, wie Sie es erwarten würden; falls nicht, ist das Spiel wie zuvor zu Ende.

## Vergleichen Sie Ihren Code

Vergleichen Sie Ihren Code mit dem Live-Beispiel unten:

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

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, den Ball schneller bewegen zu lassen, wenn er das Paddel trifft.

## Nächste Schritte

Wir machen bisher ziemlich gute Fortschritte und unser Spiel beginnt, mehr Spaß zu machen, da man jetzt verlieren kann! Aber es fehlt immer noch etwas. Lassen Sie uns zum sechsten Kapitel übergehen — [Build the brick field](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und einige Ziegel erstellen, die der Ball zerstören kann.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
