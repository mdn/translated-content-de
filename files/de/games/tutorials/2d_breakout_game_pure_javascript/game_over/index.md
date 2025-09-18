---
title: Spiel vorbei
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es macht Spaß, den Ball von den Wänden abprallen zu sehen und den Schläger bewegen zu können, aber abgesehen davon passiert im Spiel nichts, und es gibt weder einen Fortschritt noch ein Ziel. Vom Standpunkt des Gameplays wäre es gut, verlieren zu können. Die Logik des Verlierens in Breakout ist, dass wenn Sie den Ball mit dem Schläger verfehlen und er den unteren Rand des Bildschirms erreicht, das Spiel vorbei ist.

## Implementierung von "Spiel vorbei"

Lassen Sie uns versuchen, "Spiel vorbei" in unserem Spiel zu implementieren. Hier ist der Code aus der dritten Lektion, wo wir den Ball von den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball von allen vier Wänden abprallen zu lassen, erlauben wir es jetzt nur noch von drei — links, oben und rechts. Wenn der Ball die untere Wand trifft, endet das Spiel. Wir werden den zweiten if-Block so bearbeiten, dass er ein if-else-Block wird, der unseren "Spiel vorbei"-Zustand auslöst, wenn der Ball mit dem unteren Rand der Leinwand kollidiert. Für den Moment zeigen wir eine Warnmeldung an und starten das Spiel neu, indem wir die Seite neu laden.

Zuerst fügen Sie eine Deklaration für die Variable `interval` auf der obersten Ebene hinzu, bevor irgendeine Funktion:

```js
let interval = 0;
```

Dann ersetzen Sie dort, wo Sie ursprünglich `setInterval()` aufgerufen haben:

```js
setInterval(draw, 10);
```

durch:

```js
interval = setInterval(draw, 10);
```

Dann ersetzen Sie die zweite if-Anweisung durch das Folgende:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Den Schläger den Ball treffen lassen

Das Letzte, was in dieser Lektion zu tun ist, ist eine Art Kollisionsprüfung zwischen dem Ball und dem Schläger zu erstellen, damit er abprallen und in den Spielbereich zurückkehren kann. Das einfachste, was zu tun ist, ist zu überprüfen, ob sich die Mitte des Balls zwischen dem linken und rechten Rand des Schlägers befindet. Aktualisieren Sie den letzten Teil des Codes, den Sie geändert haben, erneut auf Folgendes:

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

Wenn der Ball den unteren Rand der Leinwand trifft, müssen wir überprüfen, ob er den Schläger trifft. Falls ja, prallt er ab, wie man es erwarten würde; falls nicht, ist das Spiel wie zuvor vorbei.

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
> Versuchen Sie, den Ball schneller zu machen, wenn er den Schläger trifft.

## Nächste Schritte

Bisher läuft es ganz gut und unser Spiel beginnt viel lohnenswerter zu wirken, da Sie jetzt verlieren können! Aber es fehlt noch etwas. Lassen Sie uns zum sechsten Kapitel übergehen — [Erstellen Sie das Ziegelsteinfeld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und einige Ziegelsteine erstellen, die der Ball zerstören kann.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
