---
title: Spielende
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html) finden.

Es macht Spaß, den Ball von den Wänden abprallen zu sehen und das Paddel bewegen zu können, aber abgesehen davon macht das Spiel nichts und hat weder Fortschritt noch ein Ziel. Es wäre gut aus Sicht des Gameplays, verlieren zu können. Die Logik des Verlierens bei Breakout lautet, dass wenn Sie den Ball mit dem Paddel verpassen und ihn den unteren Rand des Bildschirms erreichen lassen, dann ist das Spiel vorbei.

## Spielende implementieren

Lassen Sie uns versuchen, das Spielende in unser Spiel zu implementieren. Hier ist der Code aus der dritten Lektion, bei der wir den Ball von den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball von allen vier Wänden abprallen zu lassen, erlauben wir jetzt nur noch drei — links, oben und rechts. Wenn die untere Wand getroffen wird, endet das Spiel. Wir werden den zweiten if-Block so bearbeiten, dass er ein if-else-Block wird, der unseren "Spielende"-Zustand auslöst, wenn der Ball die untere Kante der Leinwand erreicht. Vorerst zeigen wir eine Warnmeldung und starten das Spiel neu, indem wir die Seite neu laden.

Fügen Sie zunächst eine Deklaration für die Variable `interval` auf der obersten Ebene hinzu, vor allen Funktionen:

```js
let interval = 0;
```

Dann ersetzen Sie die Stelle, an der Sie ursprünglich `setInterval()` aufgerufen haben:

```js
setInterval(draw, 10);
```

mit:

```js
interval = setInterval(draw, 10);
```

Dann ersetzen Sie die zweite if-Anweisung mit der folgenden:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Dem Paddel erlauben, den Ball zu treffen

Das Letzte, was in dieser Lektion zu tun ist, ist eine Art Kollisionserkennung zwischen dem Ball und dem Paddel zu erstellen, damit er davon abprallen und in den Spielbereich zurückkehren kann. Am einfachsten ist es zu prüfen, ob sich die Mitte des Balls zwischen den linken und rechten Rändern des Paddels befindet. Aktualisieren Sie das letzte Stück Code, das Sie geändert haben, erneut auf Folgendes:

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

Wenn der Ball den unteren Rand der Leinwand trifft, müssen wir überprüfen, ob er das Paddel trifft. Wenn ja, prallt er ab, wie Sie es erwarten würden; andernfalls ist das Spiel wie zuvor vorbei.

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code mit dem Live-Beispiel unten verglichen wird:

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

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, den Ball schneller bewegen zu lassen, wenn er das Paddel trifft.

## Nächste Schritte

Wir kommen bisher recht gut voran und unser Spiel macht jetzt, da Sie verlieren können, viel mehr Spaß! Aber es fehlt noch etwas. Lassen Sie uns zum sechsten Kapitel übergehen — [Baue das Ziegelfeld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und einige Ziegel erstellen, die der Ball zerstören kann.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
