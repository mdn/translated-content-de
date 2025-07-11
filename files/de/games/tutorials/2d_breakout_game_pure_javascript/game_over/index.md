---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Der Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es macht Spaß, den Ball an den Wänden abprallen zu sehen und das Paddel zu bewegen, aber darüber hinaus tut das Spiel nichts und hat weder Fortschritt noch Ziel. Aus Gameplay-Sicht wäre es gut, verlieren zu können. Die Logik des Verlierens in Breakout ist, dass wenn Sie den Ball mit dem Paddel verfehlen und er den unteren Rand des Bildschirms erreicht, das Spiel vorbei ist.

## Implementierung des Game Over

Versuchen wir, ein Game Over in unser Spiel zu implementieren. Hier ist der Codeausschnitt aus der dritten Lektion, in der der Ball an den Wänden abprallte:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball an allen vier Wänden abprallen zu lassen, erlauben wir jetzt nur noch drei — links, oben und rechts. Beim Treffen der unteren Wand endet das Spiel. Wir bearbeiten den zweiten If-Block so, dass es ein If-Else-Block wird, der unseren "Game Over"-Zustand auslöst, wenn der Ball die untere Kante der Leinwand berührt. Für den Moment zeigen wir eine Alert-Nachricht an und starten das Spiel neu, indem wir die Seite neu laden.

Zuerst fügen Sie eine Deklaration für die `interval` Variable auf oberster Ebene vor allen Funktionen hinzu:

```js
let interval = 0;
```

Dann ersetzen Sie, wo Sie ursprünglich `setInterval()` aufgerufen haben:

```js
setInterval(draw, 10);
```

mit:

```js
interval = setInterval(draw, 10);
```

Ersetzen Sie dann die zweite If-Anweisung mit dem Folgenden:

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

Das Letzte, was Sie in dieser Lektion tun müssen, ist, eine Art Kollisionsdetektion zwischen dem Ball und dem Paddel zu erstellen, sodass er davon abprallen und zurück in den Spielbereich gelangen kann. Das Einfachste ist, zu überprüfen, ob sich der Mittelpunkt des Balls zwischen den linken und rechten Kanten des Paddels befindet. Aktualisieren Sie den zuletzt modifizierten Code erneut wie folgt:

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

Wenn der Ball den unteren Rand der Leinwand trifft, müssen wir überprüfen, ob er das Paddel trifft. Wenn ja, dann prallt er ab, wie Sie es erwarten würden; wenn nicht, dann ist das Spiel wie zuvor vorbei.

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code mit dem Live-Beispiel unten vergleichbar ist:

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

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, den Ball schneller bewegen zu lassen, wenn er das Paddel trifft.

## Nächste Schritte

Bisher läuft es ziemlich gut, und unser Spiel beginnt jetzt, viel mehr spielenswert zu werden, da Sie verlieren können! Aber es fehlt noch etwas. Gehen wir weiter zum sechsten Kapitel — [Bauen Sie das Ziegelsteinfeld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und erstellen einige Ziegelsteine, die der Ball zerstören kann.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
