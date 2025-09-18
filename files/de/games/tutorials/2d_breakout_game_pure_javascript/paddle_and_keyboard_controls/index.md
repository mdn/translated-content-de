---
title: Schläger- und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev-Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html) finden.

Der Ball prallt frei von den Wänden ab und Sie können ihm unbegrenzt zusehen. Derzeit gibt es jedoch keine Interaktivität. Es ist kein Spiel, wenn man es nicht steuern kann! Lassen Sie uns also einige Benutzerinteraktionen hinzufügen: einen steuerbaren Schläger.

## Einen Schläger definieren, um den Ball zu schlagen

Wir brauchen also einen Schläger, um den Ball zu schlagen. Definieren wir ein paar Variablen dafür. Fügen Sie die folgenden Variablen in der Nähe des Anfangs Ihres Codes neben Ihren anderen Variablen hinzu:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Schlägers und seinen Ausgangspunkt auf der `x`-Achse zur Verwendung in späteren Berechnungen im Code. Lassen Sie uns eine Funktion erstellen, die den Schläger auf dem Bildschirm zeichnet. Fügen Sie das Folgende direkt unter Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Ermöglichung der Steuerung des Schlägers durch den Benutzer

Wir können den Schläger zeichnen, wo immer wir wollen, aber er sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen zur Speicherung von Informationen darüber, ob die linke oder rechte Steuertaste gedrückt ist.
- Zwei Ereignis-Listener für `keydown` und `keyup` Events. Wir möchten einen Code ausführen, der die Schlägerbewegung behandelt, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown` und `keyup` Events verarbeiten und den Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, den Schläger nach links und rechts zu bewegen

Gedrückte Tasten können mit booleschen Variablen wie im Beispiel definiert und initialisiert werden. Fügen Sie diese Zeilen irgendwo in der Nähe der restlichen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, da zu Beginn die Steuertasten nicht gedrückt sind. Um Tastenanschläge zu überwachen, richten wir zwei Ereignis-Listener ein. Fügen Sie die folgenden Zeilen direkt über der `setInterval()`-Zeile am Ende Ihres JavaScripts hinzu:

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

Wenn das `keydown`-Ereignis auf einer beliebigen Taste auf Ihrer Tastatur ausgelöst wird (wenn sie gedrückt wird), wird die Funktion `keyDownHandler()` ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Ereignisse lösen die Funktion `keyUpHandler()` aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese jetzt Ihrem Code hinzu, unter den `addEventListener()`-Zeilen:

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

Beide Funktionen nehmen ein Ereignis als Parameter, repräsentiert durch die Variable `e`. Daraus können Sie nützliche Informationen erhalten: `key` enthält die Information über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die Cursor-Tasten links/rechts, aber wir müssen auch `Right` und `Left` prüfen, um IE/Edge-Browser zu unterstützen. Wird die linke Cursor-Taste gedrückt, dann wird die Variable `leftPressed` auf `true` gesetzt, und wenn sie losgelassen wird, wird die Variable `leftPressed` auf `false` gesetzt. Dasselbe Muster gilt für die rechte Cursor-Taste und die Variable `rightPressed`.

### Die Logik zur Bewegung des Schlägers

Wir haben nun die Variablen eingerichtet, um Informationen über die gedrückten Tasten zu speichern, Ereignis-Listener und relevante Funktionen. Als nächstes gehen wir in den Code, um all die Dinge zu nutzen, die wir gerade eingerichtet haben, um den Schläger auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion prüfen wir bei jeder gerenderten Frame, ob die linke oder rechte Cursor-Taste gedrückt ist. Unser Code könnte folgendermaßen aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn die linke Cursor-Taste gedrückt wird, bewegt sich der Schläger sieben Pixel nach links, und wenn die rechte Cursor-Taste gedrückt wird, bewegt sich der Schläger sieben Pixel nach rechts. Dies funktioniert derzeit, aber der Schläger verschwindet vom Rand der Leinwand, wenn wir eine der Tasten zu lange gedrückt halten. Wir könnten das verbessern und den Schläger nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code wie folgt ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, wird sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite bewegen, was genau so funktioniert, wie wir es möchten.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am Ende ein, direkt über der schließenden Klammer.

Das einzige, was jetzt noch zu tun ist, ist das Aufrufen der `drawPaddle()`-Funktion innerhalb der `draw()`-Funktion, um sie tatsächlich auf dem Bildschirm anzuzeigen. Fügen Sie die folgende Zeile in Ihre `draw()`-Funktion ein, direkt unter der Zeile, die `drawBall()` aufruft:

```js
drawPaddle();
```

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code mit dem Live-Beispiel unten verglichen wird:

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
> Versuchen Sie, den Schläger schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem ist jetzt, dass Sie den Ball einfach weiter mit dem Schläger schlagen können und es kein Siegen oder Verlieren gibt. Dies wird sich alles im fünften Kapitel ändern, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), wenn wir einen Endspielzustand für unser Spiel hinzufügen.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}
