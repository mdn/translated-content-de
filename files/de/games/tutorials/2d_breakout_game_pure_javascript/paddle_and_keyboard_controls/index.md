---
title: Paddel- und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

Der Ball prallt frei von den Wänden ab und Sie können ihn unbegrenzt beobachten, aber derzeit gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht steuern können! Fügen wir also eine Nutzerinteraktion hinzu: ein steuerbares Paddel.

## Definition eines Paddels zum Treffen des Balls

Wir benötigen ein Paddel, um den Ball zu treffen. Lassen Sie uns dafür ein paar Variablen definieren. Fügen Sie die folgenden Variablen nahe der Spitze Ihres Codes neben Ihren anderen Variablen hinzu:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddles und dessen Ausgangspunkt auf der `x`-Achse für Berechnungen weiter unten im Code. Lassen Sie uns eine Funktion erstellen, die das Paddel auf dem Bildschirm zeichnet. Fügen Sie die folgende Funktion direkt unter Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Ermöglichen der Steuerung des Paddels durch den Nutzer

Wir können das Paddel zeichnen, wohin wir wollen, aber es sollte auf die Aktionen der Nutzer reagieren. Es ist an der Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen, um die Informationen zu speichern, ob die linke oder rechte Steuerungstaste gedrückt ist.
- Zwei Ereignis-Listener für `keydown`- und `keyup`-Ereignisse. Wir möchten Code ausführen, um die Paddelbewegung zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown`- und `keyup`-Ereignisse verarbeiten und den Code, der ausgeführt wird, wenn die Tasten gedrückt werden.
- Die Fähigkeit, das Paddel nach links und rechts zu bewegen.

Gedrückte Tasten können mit booleschen Variablen definiert und initialisiert werden, wie im Beispiel. Fügen Sie diese Zeilen irgendwo in der Nähe Ihrer restlichen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, da zu Beginn die Steuerungstasten nicht gedrückt sind. Um Tastendrücke zu hören, richten wir zwei Ereignis-Listener ein. Fügen Sie die folgenden Zeilen direkt über der `setInterval()`-Zeile am Ende Ihres JavaScripts hinzu:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Wenn das `keydown`-Ereignis auf einer der Tasten Ihrer Tastatur ausgelöst wird (wenn sie gedrückt werden), wird die Funktion `keyDownHandler()` ausgeführt. Das gleiche Muster gilt für den zweiten Listener: `keyup`-Ereignisse lösen die Funktion `keyUpHandler()` aus (wenn die Tasten nicht mehr gedrückt sind). Fügen Sie diese Codezeilen jetzt unter den `addEventListener()`-Zeilen hinzu:

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

Wenn wir eine Taste drücken, wird diese Information in einer Variable gespeichert. Die relevante Variable wird in jedem Fall auf `true` gesetzt. Wenn die Taste losgelassen wird, wird die Variable wieder auf `false` gesetzt.

Beide Funktionen nehmen ein Ereignis als Parameter, dargestellt durch die Variable `e`. Daraus können Sie nützliche Informationen erhalten: Die `key`-Eigenschaft enthält die Information über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die linken/rechten Cursortasten, aber wir müssen auch `Right`- und `Left`-Prüfungen einschließen, um IE/Edge-Browser zu unterstützen. Wenn der linke Cursor gedrückt wird, wird die Variable `leftPressed` auf `true` gesetzt, und wenn sie losgelassen wird, wird die Variable `leftPressed` auf `false` gesetzt. Das gleiche Muster gilt für den rechten Cursor und die Variable `rightPressed`.

### Die Logik zur Bewegung des Paddels

Wir haben nun die Variablen zum Speichern der Informationen über die gedrückten Tasten, Ereignis-Listener und relevante Funktionen eingerichtet. Als Nächstes kommen wir in den Code, um all die Dinge zu verwenden, die wir gerade eingerichtet haben, und um das Paddel auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion überprüfen wir, ob die linken oder rechten Cursortasten gedrückt werden, wenn jeder Frame gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn der linke Cursor gedrückt wird, bewegt sich das Paddel sieben Pixel nach links, und wenn der rechte Cursor gedrückt wird, bewegt sich das Paddel sieben Pixel nach rechts. Dies funktioniert derzeit, aber das Paddel verschwindet, wenn wir eine der beiden Tasten zu lange gedrückt halten, vom Rand der Leinwand. Wir könnten das verbessern und das Paddel nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code so ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, bewegt sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite, was genau so funktioniert, wie wir es möchten.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am unteren Rand ein, direkt über der schließenden geschweiften Klammer.

Das einzige, was jetzt noch zu tun ist, ist die `drawPaddle()`-Funktion von innerhalb der `draw()`-Funktion aufzurufen, um sie tatsächlich auf dem Bildschirm zu zeichnen. Fügen Sie die folgende Zeile in Ihre `draw()`-Funktion ein, direkt unter der Linie, die `drawBall()` aufruft:

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
> Versuchen Sie, das Paddel schneller oder langsamer zu bewegen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem ist jetzt, dass Sie den Ball einfach weiterhin mit dem Paddel treffen können und es kein Gewinnen oder Verlieren gibt. Dies wird sich alles im fünften Kapitel, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), ändern, wenn wir beginnen, einen Endspielzustand für unser Spiel hinzuzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
