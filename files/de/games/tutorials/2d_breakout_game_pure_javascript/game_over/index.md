---
title: Spiel beendet
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es macht Spaß, den Ball von den Wänden abprallen zu sehen und das Paddle bewegen zu können, aber ansonsten passiert im Spiel nichts und es gibt weder Fortschritt noch Endziel. Aus Sicht des Gameplays wäre es gut, verlieren zu können. Die Logik, im Breakout-Spiel zu verlieren, besteht darin, dass, wenn Sie den Ball mit dem Paddle verfehlen und ihn den unteren Rand des Bildschirms erreichen lassen, das Spiel beendet ist.

## Spiel beenden implementieren

Versuchen wir, das Spielende in unserem Spiel zu implementieren. Hier ist der Codeabschnitt aus der dritten Lektion, in dem wir den Ball von den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball von allen vier Wänden abprallen zu lassen, erlauben wir jetzt nur noch drei — links, oben und rechts. Das Berühren der unteren Wand beendet das Spiel. Wir bearbeiten den zweiten if-Block so, dass es ein if-else-Block wird, der unseren "Spiel beendet"-Zustand auslöst, wenn der Ball den unteren Rand der Leinwand kollidiert. Für jetzt zeigen wir eine Alarmmeldung an und starten das Spiel durch Neuladen der Seite neu.

Zuerst fügen Sie eine Deklaration für die Variable `interval` auf der obersten Ebene ein, bevor irgendwelche Funktionen:

```js
let interval = 0;
```

Ersetzen Sie dann den anfänglichen Aufruf von `setInterval()`:

```js
setInterval(draw, 10);
```

mit:

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
  clearInterval(interval); // Benötigt für Chrome zum Beenden des Spiels
}
```

## Dem Paddle erlauben, den Ball zu treffen

Das Letzte, was wir in dieser Lektion tun müssen, ist eine Art Kollisionsdetektion zwischen dem Ball und dem Paddle zu erstellen, damit er von ihm abprallen und wieder in den Spielbereich gelangen kann. Das Einfachste ist, zu überprüfen, ob sich der Mittelpunkt des Balls zwischen den linken und rechten Kanten des Paddles befindet. Aktualisieren Sie erneut den von Ihnen zuletzt bearbeiteten Code wie folgt:

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

Wenn der Ball den unteren Rand der Leinwand berührt, müssen wir überprüfen, ob er das Paddle trifft. Wenn ja, dann prallt er so ab, wie Sie es erwarten würden; wenn nicht, dann ist das Spiel wie zuvor beendet.

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code im Vergleich zum folgenden Live-Beispiel aussieht:

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Spiel starten</button>
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
      clearInterval(interval); // Benötigt für Chrome zum Beenden des Spiels
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
> Versuchen Sie, den Ball schneller bewegen zu lassen, wenn er das Paddle trifft.

## Nächste Schritte

Bis jetzt sind wir ziemlich gut vorangekommen und unser Spiel beginnt sich lohnenswerter zu fühlen, jetzt, wo Sie verlieren können! Aber es fehlt noch etwas. Gehen wir weiter zum sechsten Kapitel — [Das Backsteinfeld bauen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und erstellen einige Ziegel, die der Ball zerstören kann.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
