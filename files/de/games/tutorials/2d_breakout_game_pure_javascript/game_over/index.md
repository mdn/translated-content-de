---
title: Spiel vorbei
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Dies ist der **5. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es macht Spaß, den Ball von den Wänden abprallen zu sehen und den Schläger zu bewegen, aber ansonsten tut das Spiel nichts und hat kein Fortschritts- oder Endziel. Aus Sicht des Gameplays wäre es gut, verlieren zu können. Die Logik hinter dem Verlieren im Breakout-Spiel ist, dass wenn Sie den Ball mit dem Schläger verfehlen und ihn die untere Kante des Bildschirms erreichen lassen, dann ist das Spiel vorbei.

## Spielende implementieren

Versuchen wir, das Spielende in unser Spiel zu implementieren. Hier ist der Codeausschnitt aus der dritten Lektion, in dem wir den Ball von den Wänden abprallen ließen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Anstatt den Ball von allen vier Wänden abprallen zu lassen, erlauben wir jetzt nur noch drei — links, oben und rechts. Ein Treffer an der unteren Wand beendet das Spiel. Wir bearbeiten den zweiten if-Block so, dass er ein if-else-Block wird, der unseren "Spielende"-Zustand auslöst, wenn der Ball die untere Kante der Leinwand trifft. Vorläufig zeigen wir eine Alarmmeldung und starten das Spiel neu, indem wir die Seite neu laden.

Zuerst fügen Sie eine Deklaration für die `interval`-Variable auf oberster Ebene hinzu, vor allen Funktionen:

```js
let interval = 0;
```

Dann ersetzen Sie den ursprünglichen Aufruf von `setInterval()`:

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

## Den Schläger den Ball treffen lassen

Das Letzte, was in dieser Lektion zu tun ist, ist eine Art Kollisionserkennung zwischen dem Ball und dem Schläger zu schaffen, damit er davon abprallen und zurück in den Spielbereich gelangen kann. Das Einfachste ist zu überprüfen, ob sich die Mitte des Balls zwischen dem linken und rechten Rand des Schlägers befindet. Aktualisieren Sie den zuletzt geänderten Codeabschnitt folgendermaßen:

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

Wenn der Ball die untere Kante der Leinwand trifft, müssen wir überprüfen, ob er den Schläger trifft. Wenn ja, prallt er ab, wie Sie es erwarten würden; wenn nicht, ist das Spiel vorbei wie zuvor.

## Vergleichen Sie Ihren Code

Sehen Sie sich an, wie Ihr Code mit dem Live-Beispiel unten verglichen wird:

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
> Versuchen Sie, den Ball schneller zu machen, wenn er den Schläger trifft.

## Nächste Schritte

Bisher läuft es ganz gut und unser Spiel beginnt, viel mehr Spaß zu machen, da Sie jetzt verlieren können! Aber es fehlt immer noch etwas. Lassen Sie uns zum sechsten Kapitel übergehen — [Das Ziegelspielfeld erstellen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — und ein paar Ziegel zum Zerstören durch den Ball schaffen.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
