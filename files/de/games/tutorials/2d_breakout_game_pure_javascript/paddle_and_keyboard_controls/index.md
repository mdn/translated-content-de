---
title: Paddle und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev-Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt frei von den Wänden ab und Sie können ihn unbegrenzt beobachten, aber derzeit gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht steuern können! Also fügen wir etwas Benutzerinteraktion hinzu: ein steuerbares Paddle.

## Ein Paddle definieren, um den Ball zu treffen

Also, wir brauchen ein Paddle, um den Ball zu treffen. Lassen Sie uns einige Variablen dafür definieren. Fügen Sie die folgenden Variablen oben in Ihrem Code hinzu, neben Ihren anderen Variablen:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddles und seinen Startpunkt auf der `x`-Achse für Berechnungen weiter unten im Code. Lassen Sie uns eine Funktion erstellen, die das Paddle auf dem Bildschirm zeichnet. Fügen Sie Folgendes direkt unter Ihrer `drawBall()`-Funktion hinzu:

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

- Zwei Variablen zur Speicherung der Informationen, ob die linke oder rechte Steuertaste gedrückt ist.
- Zwei Event-Listener für `keydown` und `keyup` Ereignisse. Wir möchten Code ausführen, um die Bewegung des Paddles zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown` und `keyup` Ereignisse verarbeiten, der Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Möglichkeit, das Paddle nach links und rechts zu bewegen.

Gedrückte Tasten können mit booleschen Variablen wie im Beispiel definiert und initialisiert werden. Fügen Sie diese Zeilen irgendwo in der Nähe Ihrer anderen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, da zu Beginn die Steuertasten nicht gedrückt sind. Um Tastendrücke zu erkennen, richten wir zwei Event-Listener ein. Fügen Sie die folgenden Zeilen direkt über der `setInterval()`-Zeile am Ende Ihres JavaScript hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Ereignis für eine beliebige Taste auf Ihrer Tastatur ausgelöst wird (wenn sie gedrückt wird), wird die `keyDownHandler()`-Funktion ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Ereignisse lösen die `keyUpHandler()`-Funktion aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie dies jetzt unter den `addEventListener()` Zeilen zu Ihrem Code hinzu:

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

Wenn wir eine Taste drücken, wird diese Information in einer Variablen gespeichert. Die entsprechende Variable in jedem Fall wird auf `true` gesetzt. Wenn die Taste losgelassen wird, wird die Variable wieder auf `false` gesetzt.

Beide Funktionen nehmen ein Ereignis als Parameter an, dargestellt durch die Variable `e`. Daraus können Sie nützliche Informationen erhalten: das `key` enthält Informationen über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die links/rechts Pfeiltasten, aber wir müssen auch `Right` und `Left` überprüfen, um IE/Edge-Browser zu unterstützen. Wenn die linke Pfeiltaste gedrückt wird, wird die Variable `leftPressed` auf `true` gesetzt und wenn sie losgelassen wird, wird die Variable `leftPressed` auf `false` gesetzt. Dasselbe Muster gilt für die rechte Pfeiltaste und die Variable `rightPressed`.

### Die Logik der Paddle-Bewegung

Wir haben nun die Variablen zur Speicherung der Informationen über die gedrückten Tasten, Event-Listener und relevante Funktionen eingerichtet. Als nächstes befassen wir uns mit dem Code, um all die Dinge zu benutzen, die wir eingerichtet haben, und das Paddle auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion werden wir prüfen, ob die linke oder rechte Pfeiltaste gedrückt wird, während jedes Bild gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn die linke Pfeiltaste gedrückt wird, bewegt sich das Paddle sieben Pixel nach links und wenn die rechte Pfeiltaste gedrückt wird, bewegt es sich sieben Pixel nach rechts. Das funktioniert derzeit, aber das Paddle verschwindet, wenn wir eine der Tasten zu lange gedrückt halten, vom Rand der Leinwand. Wir könnten das verbessern und das Paddle nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code folgendermaßen ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die Position `paddleX`, die wir verwenden, bewegt sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite, was genau so funktioniert, wie wir es wollen.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am Ende ein, direkt über der schließenden geschweiften Klammer.

Das Einzige, was noch zu tun ist, ist, die `drawPaddle()`-Funktion innerhalb der `draw()`-Funktion aufzurufen, um sie tatsächlich auf dem Bildschirm anzuzeigen. Fügen Sie die folgende Zeile in Ihre `draw()`-Funktion ein, direkt unter der Zeile, die `drawBall()` aufruft:

```js
drawPaddle();
```

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code im Vergleich zum Live-Beispiel unten abschneidet:

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
> Versuchen Sie, das Paddle schneller oder langsamer zu machen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem ist jetzt, dass Sie den Ball einfach weiter mit dem Paddle treffen können und es kein Gewinnen oder Verlieren gibt. Das wird sich alles im fünften Kapitel ändern, [Spiel vorbei](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), wenn wir anfangen, einen Endspielzustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
