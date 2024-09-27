---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es macht Spaß, den Ball von den Wänden abprallen zu sehen und das Paddel zu bewegen, aber abgesehen davon macht das Spiel nichts und hat weder Fortschritt noch ein Endziel. Aus Sicht des Gameplays wäre es sinnvoll, verlieren zu können. Die Logik des Verlierens bei Breakout besteht darin, dass Sie das Spiel verlieren, wenn Sie den Ball nicht mit dem Paddel treffen und er die untere Kante des Bildschirms erreicht.

## Implementierung von Game Over

Versuchen wir, Game Over in unser Spiel zu implementieren. Hier ist der Codeausschnitt aus der dritten Lektion, bei dem wir den Ball von den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball von allen vier Wänden abprallen zu lassen, lassen wir ihn nur von drei Wänden abprallen – links, oben und rechts. Das Treffen der unteren Wand beendet das Spiel. Wir werden den zweiten if-Block so bearbeiten, dass er ein if-else-Block ist, der unseren "Game Over"-Zustand auslöst, wenn der Ball mit dem unteren Rand der Leinwand kollidiert. Wir zeigen vorerst eine Warnmeldung an und starten das Spiel neu, indem wir die Seite neu laden.

Zuerst fügen Sie eine Deklaration für die `interval`-Variable auf Top-Ebene ein, vor allen Funktionen:

```js
let interval = 0;
```

Ersetzen Sie dann dort, wo Sie ursprünglich `setInterval()` aufgerufen haben:

```js
setInterval(draw, 10);
```

durch:

```js
interval = setInterval(draw, 10);
```

Ersetzen Sie dann die zweite if-Anweisung durch die folgende:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Lassen Sie das Paddel den Ball treffen

Das Letzte, was in dieser Lektion zu tun ist, ist, eine Art Kollisionsdetektion zwischen dem Ball und dem Paddel zu erstellen, damit er abprallen und in den Spielbereich zurückkehren kann. Am einfachsten ist es, zu überprüfen, ob sich der Mittelpunkt des Balles zwischen den linken und rechten Kanten des Paddels befindet. Aktualisieren Sie den letzten bisschen Code, den Sie modifiziert haben, erneut wie folgt:

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

Wenn der Ball die untere Kante der Leinwand trifft, müssen wir überprüfen, ob er das Paddel trifft. Wenn ja, dann prallt er ab, wie Sie es erwarten würden; wenn nicht, dann ist das Spiel wie zuvor vorbei.

## Vergleichen Sie Ihren Code

Sehen Sie sich an, wie Ihr Code im Vergleich zum Live-Beispiel unten aussieht:

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
> Versuchen Sie, den Ball schneller zu machen, wenn er das Paddel trifft.

## Nächste Schritte

Wir sind bisher ziemlich gut vorangekommen und unser Spiel fühlt sich jetzt viel lohnender an, da Sie verlieren können! Aber es fehlt noch etwas. Lassen Sie uns zum sechsten Kapitel weitermachen — [Bauen Sie das Ziegelfeld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und einige Ziegel erstellen, die der Ball zerstören kann.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
