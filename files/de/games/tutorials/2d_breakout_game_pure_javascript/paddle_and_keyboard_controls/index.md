---
title: Paddle und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **vierte Schritt** von 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Der Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, ist unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html) zu finden.

Der Ball prallt frei von den Wänden ab und Sie können ihn unbegrenzt beobachten, aber derzeit gibt es keine Interaktivität. Es ist kein Spiel, wenn man es nicht steuern kann! Lassen Sie uns also etwas Benutzerinteraktion hinzufügen: ein steuerbares Paddle.

## Definieren eines Paddles, um den Ball zu treffen

Wir benötigen also ein Paddle, um den Ball zu treffen. Lassen Sie uns ein paar Variablen dafür definieren. Fügen Sie die folgenden Variablen nahe am Anfang Ihres Codes, neben Ihren anderen Variablen hinzu:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddles und dessen Startpunkt auf der `x`-Achse für Berechnungen weiter unten im Code. Lassen Sie uns eine Funktion erstellen, die das Paddle auf dem Bildschirm zeichnet. Fügen Sie das Folgende direkt unter Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Dem Benutzer die Steuerung des Paddles erlauben

Wir können das Paddle dort zeichnen, wo wir wollen, aber es sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen zur Speicherung von Informationen darüber, ob die linke oder rechte Steuertaste gedrückt wird.
- Zwei Ereignishandler für `keydown`- und `keyup`-Ereignisse. Wir möchten Code ausführen, um die Bewegung des Paddles zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen zur Behandlung der `keydown`- und `keyup`-Ereignisse, also der Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, das Paddle nach links und rechts zu bewegen

Gedrückte Tasten können mit booleschen Variablen wie im Beispiel definiert und initialisiert werden. Fügen Sie diese Zeilen in der Nähe der restlichen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, da zu Beginn die Steuertasten nicht gedrückt sind. Um Tastendrücke zu erkennen, richten wir zwei Ereignishandler ein. Fügen Sie die folgenden Zeilen direkt über der `setInterval()`-Zeile am Ende Ihres JavaScripts hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Ereignis bei einer beliebigen Taste auf Ihrer Tastatur ausgelöst wird (wenn sie gedrückt werden), wird die Funktion `keyDownHandler()` ausgeführt. Dasselbe Muster gilt für den zweiten Handler: `keyup`-Ereignisse lösen die Funktion `keyUpHandler()` aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese jetzt Ihrem Code hinzu, unterhalb der `addEventListener()`-Zeilen:

```js
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
```

Wenn wir eine Taste drücken, wird diese Information in einer Variablen gespeichert. Die relevante Variable wird in jedem Fall auf `true` gesetzt. Wenn die Taste losgelassen wird, wird die Variable wieder auf `false` gesetzt.

Beide Funktionen nehmen ein Ereignis als Parameter, dargestellt durch die Variable `e`. Daraus können Sie nützliche Informationen beziehen: das `key` enthält die Information über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die linken/rechten Pfeiltasten, aber wir müssen auch `Right` und `Left`-Prüfungen einbeziehen, um IE/Edge-Browser zu unterstützen. Wenn der linke Cursor gedrückt ist, wird die Variable `leftPressed` auf `true` gesetzt, und wenn er losgelassen wird, wird die Variable `leftPressed` auf `false` gesetzt. Dasselbe Muster gilt für den rechten Cursor und die Variable `rightPressed`.

### Die Logik zur Bewegung des Paddles

Wir haben nun die Variablen eingerichtet, um die Informationen über die gedrückten Tasten, Ereignishandler und relevanten Funktionen zu speichern. Als Nächstes gehen wir in den Code, um all die gerade eingerichteten Dinge zu nutzen und das Paddle auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion werden wir prüfen, ob die linken oder rechten Pfeiltasten gedrückt sind, wenn jeder Frame gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wird der linke Cursor gedrückt, bewegt sich das Paddle um sieben Pixel nach links, und wenn der rechte Cursor gedrückt wird, bewegt sich das Paddle um sieben Pixel nach rechts. Das funktioniert derzeit, aber das Paddle verschwindet am Rande der Leinwand, wenn wir eine der Tasten zu lange drücken. Wir könnten das verbessern und das Paddle nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code so ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, wird zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite bewegt, was genau so funktioniert, wie wir es wollen.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am unteren Rand ein, direkt über der schließenden geschweiften Klammer.

Das Einzige, was jetzt noch zu tun ist, ist die `drawPaddle()`-Funktion von innerhalb der `draw()`-Funktion aufzurufen, um sie tatsächlich auf dem Bildschirm zu drucken. Fügen Sie die folgende Zeile innerhalb Ihrer `draw()`-Funktion hinzu, direkt unter der Zeile, die `drawBall()` aufruft:

```js
drawPaddle();
```

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code im Vergleich zum Live-Beispiel unten aussieht:

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
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  x += dx;
  y += dy;
}

function startGame() {
  setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, das Paddle schneller oder langsamer zu machen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem ist, dass Sie den Ball einfach weiter mit dem Paddle treffen können und es gibt kein Gewinnen oder Verlieren. Dies wird sich alles im fünften Kapitel ändern, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), wenn wir beginnen, einen Endspielzustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}
