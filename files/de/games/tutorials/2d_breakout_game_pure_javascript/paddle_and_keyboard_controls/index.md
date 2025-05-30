---
title: Paddel- und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt frei von den Wänden ab, und Sie können ihn unendlich lange beobachten. Momentan gibt es jedoch keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht kontrollieren können! Lassen Sie uns also etwas Benutzerinteraktion hinzufügen: ein steuerbares Paddel.

## Ein Paddel definieren, um den Ball zu treffen

Wir benötigen ein Paddel, um den Ball zu treffen. Lassen Sie uns einige Variablen dafür definieren. Fügen Sie die folgenden Variablen in der Nähe des Anfangs Ihres Codes hinzu, neben den anderen Variablen:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddels und seinen Startpunkt auf der `x`-Achse für Berechnungen im weiteren Verlauf des Codes. Lassen Sie uns eine Funktion erstellen, die das Paddel auf dem Bildschirm zeichnet. Fügen Sie das Folgende direkt unter Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Dem Benutzer die Steuerung des Paddels erlauben

Wir können das Paddel zeichnen, wo immer wir wollen, aber es sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen, um Informationen darüber zu speichern, ob die linke oder rechte Steuerungstaste gedrückt wird.
- Zwei Event-Listener für `keydown`- und `keyup`-Events. Wir möchten, dass etwas Code ausgeführt wird, um die Paddelbewegung zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown`- und `keyup`-Events verarbeiten. Der Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, das Paddel nach links und rechts zu bewegen.

Gedrückte Tasten können wie im Beispiel mit booleschen Variablen definiert und initialisiert werden. Fügen Sie diese Zeilen irgendwo in der Nähe Ihrer anderen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, weil anfangs die Steuertasten nicht gedrückt sind. Um Tastenanschläge zu erfassen, richten wir zwei Event-Listener ein. Fügen Sie die folgenden Zeilen direkt oberhalb der `setInterval()`-Zeile am Ende Ihres JavaScripts hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Event für eine der Tasten auf Ihrer Tastatur ausgelöst wird (wenn sie gedrückt werden), wird die `keyDownHandler()`-Funktion ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Events lösen die `keyUpHandler()`-Funktion aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese jetzt in Ihren Code ein, unterhalb der `addEventListener()`-Zeilen:

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

Beide Funktionen nehmen ein Event als Parameter entgegen, dargestellt durch die `e`-Variable. Daraus können Sie nützliche Informationen erhalten: Die `key`-Eigenschaft enthält Informationen über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die Cursor-Tasten links/rechts, aber wir müssen auch `Right` und `Left` einbeziehen, um IE/Edge-Browser zu unterstützen. Wenn die linke Cursor-Taste gedrückt wird, wird die `leftPressed`-Variable auf `true` gesetzt, und wenn sie losgelassen wird, wird die `leftPressed`-Variable auf `false` gesetzt. Dasselbe Muster gilt für die rechte Cursor-Taste und die `rightPressed`-Variable.

### Die Paddel-Bewegungslogik

Wir haben jetzt die Variablen eingerichtet, um die Informationen über die gedrückten Tasten, Event-Listener und relevanten Funktionen zu speichern. Als Nächstes kümmern wir uns um den Code, um alle gerade eingerichteten Dinge zu verwenden und das Paddel auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion prüfen wir, ob die linke oder rechte Cursor-Taste gedrückt wird, wenn jedes Frame gerendert wird. Unser Code könnte folgendermaßen aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn die linke Cursor-Taste gedrückt wird, bewegt sich das Paddel um sieben Pixel nach links, und wenn die rechte Cursor-Taste gedrückt wird, bewegt sich das Paddel um sieben Pixel nach rechts. Dies funktioniert derzeit, aber das Paddel verschwindet am Rand der Leinwand, wenn wir eine der beiden Tasten zu lange gedrückt halten. Wir könnten das verbessern und das Paddel nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code folgendermaßen ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, bewegt sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite, was genau so funktioniert, wie wir es möchten.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am unteren Rand, direkt über der abschließenden geschweiften Klammer, ein.

Das Einzige, was jetzt noch zu tun ist, ist die `drawPaddle()`-Funktion innerhalb der `draw()`-Funktion aufzurufen, um sie tatsächlich auf dem Bildschirm zu zeichnen. Fügen Sie die folgende Zeile in Ihre `draw()`-Funktion ein, direkt unter der Zeile, die `drawBall()` aufruft:

```js
drawPaddle();
```

## Vergleichen Sie Ihren Code

Sehen Sie unten, wie Ihr Code im Vergleich zum Livebeispiel aussieht:

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
> Versuchen Sie, das Paddel schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem jetzt ist, dass Sie den Ball einfach weiter mit dem Paddel treffen können und es kein Gewinnen oder Verlieren gibt. Das wird sich im fünften Kapitel ändern, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), wenn wir beginnen, einen Endspielzustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
