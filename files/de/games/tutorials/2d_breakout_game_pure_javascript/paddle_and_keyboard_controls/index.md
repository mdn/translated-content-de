---
title: Paddle- und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev Canvas-Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt frei von den Wänden ab und Sie können ihm unendlich lange zuschauen, aber derzeit gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie keine Kontrolle darüber haben! Lassen Sie uns also einige Benutzerinteraktionen hinzufügen: ein steuerbares Paddle.

## Definition eines Paddles zum Treffen des Balls

Wir brauchen ein Paddle, um den Ball zu treffen. Lassen Sie uns dafür einige Variablen definieren. Fügen Sie die folgenden Variablen nahe dem Anfang Ihres Codes hinzu, neben Ihren anderen Variablen:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddles und seinen Startpunkt auf der `x`-Achse für Berechnungen weiter unten im Code. Lassen Sie uns eine Funktion erstellen, die das Paddle auf dem Bildschirm zeichnet. Fügen Sie das Folgende direkt unterhalb Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Dem Benutzer die Steuerung des Paddles ermöglichen

Wir können das Paddle überall zeichnen, wo wir wollen, aber es sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen, um Informationen zu speichern, ob die Steuerungstaste für links oder rechts gedrückt ist.
- Zwei Ereignislistener für `keydown`- und `keyup`-Ereignisse. Wir möchten etwas Code ausführen, um die Paddlebewegung zu handhaben, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown`- und `keyup`-Ereignisse handhaben und den Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, das Paddle nach links und rechts zu bewegen.

Gedrückte Tasten können wie im Beispiel mit booleschen Variablen definiert und initialisiert werden. Fügen Sie diese Zeilen irgendwo in der Nähe Ihrer anderen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, da zu Beginn die Steuertasten nicht gedrückt sind. Um Tastenanschläge zu erfassen, richten wir zwei Ereignislistener ein. Fügen Sie die folgenden Zeilen direkt oberhalb der `setInterval()`-Zeile am Ende Ihres JavaScripts hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Ereignis bei einer beliebigen Taste auf Ihrer Tastatur ausgelöst wird (wenn sie gedrückt wird), wird die `keyDownHandler()`-Funktion ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Ereignisse führen zur Ausführung der `keyUpHandler()`-Funktion (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie das jetzt Ihrem Code hinzu, unterhalb der `addEventListener()`-Zeilen:

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

Wenn wir eine Taste drücken, wird diese Information in einer Variablen gespeichert. Die jeweilige Variable wird auf `true` gesetzt. Wenn die Taste losgelassen wird, wird die Variable wieder auf `false` gesetzt.

Beide Funktionen nehmen ein Ereignis als Parameter, repräsentiert durch die Variable `e`. Daraus können Sie nützliche Informationen erhalten: Die `key`-Eigenschaft enthält Informationen über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die Pfeiltasten rechts/links, aber wir müssen auch `Right` und `Left` überprüfen, um IE/Edge-Browser zu unterstützen. Wenn die linke Pfeiltaste gedrückt wird, wird die Variable `leftPressed` auf `true` gesetzt, und wenn sie losgelassen wird, wird die Variable `leftPressed` auf `false` gesetzt. Dasselbe Muster folgt mit der rechten Pfeiltaste und der Variable `rightPressed`.

### Die Paddle-Bewegungslogik

Wir haben nun die Variablen eingerichtet, um die Informationen über die gedrückten Tasten, die Ereignislistener und die relevanten Funktionen zu speichern. Als nächstes kommen wir zum Code, um all die Dinge zu nutzen, die wir gerade eingerichtet haben, und um das Paddle auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion überprüfen wir, ob die linke oder rechte Pfeiltaste gedrückt wird, wenn jeder Frame gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn die linke Pfeiltaste gedrückt wird, bewegt sich das Paddle um sieben Pixel nach links, und wenn die rechte Pfeiltaste gedrückt wird, bewegt sich das Paddle um sieben Pixel nach rechts. Dies funktioniert derzeit, aber das Paddle verschwindet vom Rand der Leinwand, wenn wir eine der Tasten zu lange gedrückt halten. Wir könnten das verbessern und das Paddle nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code folgendermaßen ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die Position `paddleX`, die wir verwenden, bewegt sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite, was genau so funktioniert, wie wir es wollen.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am Ende ein, direkt über der schließenden geschweiften Klammer.

Das Einzige, was jetzt noch zu tun ist, ist die `drawPaddle()`-Funktion aus der `draw()`-Funktion heraus aufzurufen, um sie tatsächlich auf dem Bildschirm auszugeben. Fügen Sie die folgende Zeile in Ihre `draw()`-Funktion ein, direkt unterhalb der Zeile, die `drawBall()` aufruft:

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
> Versuchen Sie, das Paddle schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem ist derzeit, dass Sie einfach weitermachen können, den Ball mit dem Paddle zu treffen, und es gibt weder ein Gewinnen noch ein Verlieren. Das wird sich alles im fünften Kapitel ändern, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), wenn wir anfangen, einen Endzustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}
