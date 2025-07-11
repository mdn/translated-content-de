---
title: Schläger- und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt ungehindert von den Wänden ab und Sie könnten ihm endlos zusehen, doch aktuell gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht steuern können! Also fügen wir ein wenig Benutzerinteraktion hinzu: ein steuerbarer Schläger.

## Einen Schläger definieren, um den Ball zu schlagen

Also, wir brauchen einen Schläger, um den Ball zu schlagen. Lassen Sie uns ein paar Variablen dafür definieren. Fügen Sie die folgenden Variablen oben in Ihrem Code neben Ihren anderen Variablen hinzu:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Schlägers und seinen Startpunkt auf der `x`-Achse, um ihn in Berechnungen im weiteren Verlauf des Codes zu verwenden. Lassen Sie uns eine Funktion erstellen, die den Schläger auf den Bildschirm zeichnet. Fügen Sie das Folgende direkt unterhalb Ihrer `drawBall()` Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Dem Benutzer erlauben, den Schläger zu steuern

Wir können den Schläger zeichnen, wo immer wir wollen, aber er sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir werden Folgendes benötigen:

- Zwei Variablen, um Informationen darüber zu speichern, ob die linke oder rechte Steuertaste gedrückt ist.
- Zwei Event-Listener für `keydown` und `keyup` Ereignisse. Wir möchten etwas Code ausführen, um die Bewegung des Schlägers zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown` und `keyup` Ereignisse behandeln, also den Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, den Schläger nach links und rechts zu bewegen

Gedrückte Tasten können wie im Beispiel gezeigt mit booleschen Variablen definiert und initialisiert werden. Fügen Sie diese Zeilen irgendwo in der Nähe Ihrer restlichen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, weil zu Beginn die Steuertasten nicht gedrückt sind. Um Tastenanschläge zu erkennen, richten wir zwei Event-Listener ein. Fügen Sie die folgenden Zeilen direkt über die `setInterval()` Zeile am Ende Ihres JavaScript-Codes hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown` Ereignis auf einer der Tasten Ihrer Tastatur ausgelöst wird (wenn sie gedrückt werden), wird die `keyDownHandler()` Funktion ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup` Ereignisse lösen die `keyUpHandler()` Funktion aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese jetzt zu Ihrem Code hinzu, unterhalb der `addEventListener()` Zeilen:

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

Beide Funktionen nehmen ein Ereignis als Parameter, dargestellt durch die Variable `e`. Daraus können Sie nützliche Informationen erhalten: der `key` enthält Informationen über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die linken/rechten Pfeiltasten, aber wir müssen auch `Right` und `Left` für die Unterstützung von IE/Edge-Browsern einbeziehen. Wenn die linke Pfeiltaste gedrückt wird, dann wird die `leftPressed` Variable auf `true` gesetzt, und wenn sie losgelassen wird, wird die `leftPressed` Variable auf `false` gesetzt. Dasselbe Muster gilt für die rechte Pfeiltaste und die `rightPressed` Variable.

### Die Logik der Schlägerbewegung

Wir haben nun die Variablen eingerichtet, um die Informationen über die gedrückten Tasten, Event-Listener und relevanten Funktionen zu speichern. Als Nächstes gehen wir in den Code, um all die Dinge zu nutzen, die wir gerade eingerichtet haben, um den Schläger auf dem Bildschirm zu bewegen. Innerhalb der `draw()` Funktion werden wir überprüfen, ob die linke oder rechte Pfeiltaste gedrückt ist, wenn jeder Frame gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn die linke Pfeiltaste gedrückt ist, bewegt sich der Schläger um sieben Pixel nach links, und wenn die rechte Pfeiltaste gedrückt ist, bewegt sich der Schläger um sieben Pixel nach rechts. Dies funktioniert derzeit, aber der Schläger verschwindet am Rand der Leinwand, wenn wir eine der Tasten zu lange gedrückt halten. Wir könnten das verbessern und den Schläger nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code wie folgt ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX` Position, die wir verwenden, wird sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite bewegen, was genau so funktionieren wird, wie wir es wollen.

Fügen Sie den obigen Codeblock in die `draw()` Funktion unten ein, direkt über die schließende geschweifte Klammer.

Das Einzige, was jetzt noch zu tun ist, ist, die `drawPaddle()` Funktion aus der `draw()` Funktion aufzurufen, um es tatsächlich auf den Bildschirm zu bringen. Fügen Sie die folgende Zeile in Ihre `draw()` Funktion ein, direkt unter der Zeile, die `drawBall()` aufruft:

```js
drawPaddle();
```

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code im Vergleich zu dem untenstehenden Live-Beispiel aussieht:

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
> Versuchen Sie, den Schläger schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem jetzt ist, dass Sie den Ball einfach mit dem Schläger weiterschlagen können und es gibt kein Gewinnen oder Verlieren. Dies wird sich im fünften Kapitel, [Spiel vorbei](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), ändern, wenn wir anfangen, einen Endspiel-Zustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
