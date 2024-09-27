---
title: Paddle und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 im [Gamedev Canvas Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt frei von den Wänden ab und Sie können ihn unendlich lange beobachten, aber aktuell gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht steuern können! Fügen wir also etwas Benutzerinteraktion hinzu: ein steuerbares Paddle.

## Ein Paddle definieren, um den Ball zu treffen

Wir benötigen ein Paddle, um den Ball zu treffen. Definieren wir einige Variablen dafür. Fügen Sie die folgenden Variablen in der Nähe des Starts Ihres Codes hinzu, neben Ihren anderen Variablen:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddles sowie seinen Startpunkt auf der `x`-Achse für spätere Berechnungen im Code. Erstellen wir eine Funktion, die das Paddle auf dem Bildschirm zeichnet. Fügen Sie das Folgende direkt unterhalb Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Dem Benutzer die Kontrolle des Paddles ermöglichen

Wir können das Paddle an beliebiger Stelle zeichnen, es sollte jedoch auf die Aktionen des Benutzers reagieren. Es ist an der Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen, um Informationen darüber zu speichern, ob die linke oder rechte Steuerungstaste gedrückt wird.
- Zwei Event Listener für `keydown`- und `keyup`-Ereignisse. Wir möchten Code ausführen, der die Bewegungen des Paddles steuert, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown`- und `keyup`-Ereignisse behandeln und den zu ausführenden Code bereitstellen, wenn die Tasten gedrückt werden.
- Die Möglichkeit, das Paddle nach links und rechts zu bewegen.

Gedrückte Tasten können mit booleschen Variablen wie im Beispiel definiert und initialisiert werden. Fügen Sie diese Zeilen in der Nähe Ihrer anderen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide Variablen ist `false`, da zu Beginn die Steuerungstasten nicht gedrückt sind. Um auf Tastendrücke zu reagieren, richten wir zwei Event Listener ein. Fügen Sie die folgenden Zeilen direkt über der `setInterval()`-Zeile unten in Ihrem JavaScript hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Ereignis auf einer beliebigen Taste Ihrer Tastatur ausgelöst wird (wenn sie gedrückt wird), wird die Funktion `keyDownHandler()` ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Ereignisse lösen die Funktion `keyUpHandler()` aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese nun in Ihren Code ein, unterhalb der `addEventListener()`-Zeilen:

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

Wenn wir eine Taste drücken, wird diese Information in einer Variablen gespeichert. Die relevante Variable in jedem Fall wird auf `true` gesetzt. Wenn die Taste losgelassen wird, wird die Variable wieder auf `false` gesetzt.

Beide Funktionen nehmen ein Ereignis als Parameter, dargestellt durch die Variable `e`. Daraus können Sie nützliche Informationen gewinnen: `key` enthält die Information über die Taste, die gedrückt wurde. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die Pfeiltasten nach rechts/links, aber wir müssen auch `Right` und `Left` überprüfen, um die Unterstützung für IE/Edge-Browser zu gewährleisten. Wenn die linke Pfeiltaste gedrückt wird, wird die Variable `leftPressed` auf `true` gesetzt, und wenn sie losgelassen wird, wird die Variable `leftPressed` auf `false` gesetzt. Dasselbe Muster gilt für die rechte Pfeiltaste und die Variable `rightPressed`.

### Die Paddle-Bewegungslogik

Wir haben nun die Variablen zum Speichern der Informationen über die gedrückten Tasten, Event Listener und relevanten Funktionen eingerichtet. Als nächstes befassen wir uns mit dem Code, um all das einzusetzen, was wir gerade eingerichtet haben, um das Paddle auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion werden wir überprüfen, ob die linke oder rechte Pfeiltaste gedrückt wird, wenn jeder Frame gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn die linke Pfeiltaste gedrückt wird, bewegt sich das Paddle sieben Pixel nach links, und wenn die rechte Pfeiltaste gedrückt wird, bewegt sich das Paddle sieben Pixel nach rechts. Das funktioniert derzeit, aber das Paddle verschwindet vom Rand der Leinwand, wenn wir eine der Tasten zu lange gedrückt halten. Wir könnten das verbessern und das Paddle nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code wie folgt ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, wird sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite bewegen, was genau so funktioniert, wie wir es wollen.

Fügen Sie den obigen Codeblock am Ende der `draw()`-Funktion ein, direkt über der schließenden geschweiften Klammer.

Das Einzige, was jetzt noch zu tun bleibt, ist, die `drawPaddle()`-Funktion innerhalb der `draw()`-Funktion aufzurufen, um sie tatsächlich auf dem Bildschirm auszugeben. Fügen Sie die folgende Zeile innerhalb Ihrer `draw()`-Funktion hinzu, direkt unterhalb der Zeile, die `drawBall()` aufruft:

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

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, das Paddle schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem derzeit ist, dass Sie einfach den Ball mit dem Paddle weiter treffen können und es keine Gewinn- oder Verlustbedingungen gibt. Das wird sich alles im fünften Kapitel, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), ändern, wenn wir beginnen, einen Endzustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
