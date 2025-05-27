---
title: Schläger- und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode sehen, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt frei von den Wänden ab und Sie können ihm unendlich lange zusehen, aber derzeit gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht steuern können! Lassen Sie uns also etwas Benutzerinteraktion hinzufügen: einen steuerbaren Schläger.

## Einen Schläger definieren, um den Ball zu treffen

Wir brauchen also einen Schläger, um den Ball zu treffen. Lassen Sie uns einige Variablen dafür definieren. Fügen Sie die folgenden Variablen oben in Ihrem Code neben Ihren anderen Variablen hinzu:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Schlägers und seinen Startpunkt auf der `x`-Achse zur Verwendung in Berechnungen weiter unten im Code. Lassen Sie uns eine Funktion erstellen, die den Schläger auf dem Bildschirm zeichnet. Fügen Sie Folgendes direkt unter Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Dem Benutzer die Steuerung des Schlägers erlauben

Wir können den Schläger zeichnen, wo immer wir wollen, aber er sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen zur Speicherung von Informationen darüber, ob die linke oder rechte Steuerungstaste gedrückt ist.
- Zwei Ereignis-Listener für `keydown` und `keyup`-Ereignisse. Wir möchten Code ausführen, um die Bewegung des Schlägers zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown` und `keyup`-Ereignisse verarbeiten und der Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, den Schläger nach links und rechts zu bewegen

Gedrückte Tasten können mit booleschen Variablen definiert und initialisiert werden, wie im Beispiel gezeigt. Fügen Sie diese Zeilen irgendwo in der Nähe der restlichen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide lautet `false`, da zu Beginn die Steuertasten nicht gedrückt sind. Um auf Tastendrücke zu hören, richten wir zwei Ereignis-Listener ein. Fügen Sie die folgenden Zeilen direkt über der `setInterval()`-Zeile unten in Ihrem JavaScript hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Ereignis auf einer beliebigen Taste Ihrer Tastatur ausgelöst wird (wenn sie gedrückt wird), wird die `keyDownHandler()`-Funktion ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Ereignisse lösen die `keyUpHandler()`-Funktion aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese jetzt unterhalb der `addEventListener()`-Zeilen in Ihren Code ein:

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

Wenn wir eine Taste herunterdrücken, wird diese Information in einer Variable gespeichert. Die relevante Variable in jedem Fall wird auf `true` gesetzt. Wenn die Taste losgelassen wird, wird die Variable wieder auf `false` gesetzt.

Beide Funktionen nehmen ein Ereignis als Parameter entgegen, dargestellt durch die Variable `e`. Daraus können Sie nützliche Informationen erhalten: `key` enthält Informationen über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die Links-/Rechts-Cursor-Tasten, aber wir müssen auch `Right` und `Left`-Prüfungen einschließen, um IE/Edge-Browser zu unterstützen. Wenn der linke Cursor gedrückt wird, wird die `leftPressed`-Variable auf `true` gesetzt, und wenn er losgelassen wird, wird die `leftPressed`-Variable auf `false` gesetzt. Dasselbe Muster gilt für den rechten Cursor und die `rightPressed`-Variable.

### Die Schlägerbewegungslogik

Wir haben jetzt die Variablen zum Speichern der Informationen über die gedrückten Tasten, Ereignis-Listener und relevanten Funktionen eingerichtet. Als Nächstes gehen wir in den Code, um alle eingerichtet Dinge zu verwenden und den Schläger auf dem Bildschirm zu bewegen. In der `draw()`-Funktion prüfen wir, ob der linke oder rechte Cursor gedrückt wird, wenn jeder Rahmen gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn der linke Cursor gedrückt wird, bewegt sich der Schläger sieben Pixel nach links, und wenn der rechte Cursor gedrückt wird, bewegt sich der Schläger sieben Pixel nach rechts. Dies funktioniert derzeit, aber der Schläger verschwindet am Rand der Leinwand, wenn wir eine der Tasten zu lange gedrückt halten. Wir könnten das verbessern und den Schläger nur innerhalb der Grenzen der Leinwand verschieben, indem wir den Code folgendermaßen ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, bewegt sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite, was genau so funktioniert, wie wir es wollen.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am unteren Rand ein, direkt über der schließenden geschweiften Klammer.

Das Einzige, was jetzt noch zu tun ist, ist, die `drawPaddle()`-Funktion von innerhalb der `draw()`-Funktion aufzurufen, um sie tatsächlich auf dem Bildschirm darzustellen. Fügen Sie die folgende Zeile in Ihre `draw()`-Funktion ein, direkt unter der Zeile, die `drawBall()` aufruft:

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

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, den Schläger schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem jetzt ist, dass Sie den Ball einfach weiter mit dem Schläger treffen können und es keine Gewinn- oder Verlustbedingungen gibt. Das alles wird sich im fünften Kapitel, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), ändern, wenn wir beginnen, einen Endspiel-Zustand in unser Spiel einzubauen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
