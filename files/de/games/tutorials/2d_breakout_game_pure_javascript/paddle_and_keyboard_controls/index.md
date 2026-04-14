---
title: Paddle und Tastatursteuerung
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 56718ef243af7c00ad3e848d436e718499c0590f
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **vierte Schritt** von 10 des [Gamedev Canvas Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html) finden.

Der Ball prallt frei von den Wänden ab und Sie können ihn unbegrenzt ansehen, aber momentan gibt es keine Interaktivität. Es ist kein Spiel, wenn Sie es nicht steuern können! Fügen wir also etwas Benutzerinteraktion hinzu: ein steuerbares Paddle.

## Definition eines Paddles zum Schlagen des Balls

Wir benötigen ein Paddle, um den Ball zu schlagen. Definieren wir ein paar Variablen dafür. Fügen Sie die folgenden Variablen nahe am Anfang Ihres Codes neben den anderen Variablen hinzu:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Hier definieren wir die Höhe und Breite des Paddles und seinen Startpunkt auf der `x`-Achse für Berechnungen im weiteren Verlauf des Codes. Lassen Sie uns eine Funktion erstellen, die das Paddle auf den Bildschirm zeichnet. Fügen Sie das Folgende direkt unter Ihrer `drawBall()`-Funktion hinzu:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Ermöglichen der Steuerung des Paddles durch den Benutzer

Wir können das Paddle überall zeichnen, wo wir wollen, aber es sollte auf die Aktionen des Benutzers reagieren. Es ist Zeit, einige Tastatursteuerungen zu implementieren. Wir benötigen Folgendes:

- Zwei Variablen, um Informationen zu speichern, ob die linke oder rechte Steuertaste gedrückt wird.
- Zwei Ereignis-Listener für `keydown`- und `keyup`-Ereignisse. Wir möchten Code ausführen, um die Bewegung des Paddles zu steuern, wenn die Tasten gedrückt werden.
- Zwei Funktionen, die die `keydown`- und `keyup`-Ereignisse handhaben, der Code, der beim Drücken der Tasten ausgeführt wird.
- Die Fähigkeit, das Paddle nach links und rechts zu bewegen.

Gedrückte Tasten können wie im Beispiel mit booleschen Variablen definiert und initialisiert werden. Fügen Sie diese Zeilen irgendwo in der Nähe Ihrer anderen Variablen hinzu:

```js
let rightPressed = false;
let leftPressed = false;
```

Der Standardwert für beide ist `false`, da die Steuertasten zu Beginn nicht gedrückt sind. Um auf Tastendrücke zu hören, werden wir zwei Ereignis-Listener einrichten. Fügen Sie die folgenden Zeilen direkt über der `drawBall`-Funktionsdefinition hinzu:

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

Wenn das `keydown`-Ereignis auf einer der Tasten auf Ihrer Tastatur ausgelöst wird (wenn sie gedrückt werden), wird die `keyDownHandler()`-Funktion ausgeführt. Dasselbe Muster gilt für den zweiten Listener: `keyup`-Ereignisse lösen die `keyUpHandler()`-Funktion aus (wenn die Tasten nicht mehr gedrückt werden). Fügen Sie diese jetzt unterhalb der `addEventListener()`-Zeilen in Ihren Code ein:

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

Beide Funktionen nehmen ein Ereignis als Parameter, das durch die `e`-Variable dargestellt wird. Daraus können Sie nützliche Informationen erhalten: die `key` enthält die Informationen über die gedrückte Taste. Die meisten Browser verwenden `ArrowRight` und `ArrowLeft` für die links/rechts Cursor-Tasten, aber wir müssen auch `Right` und `Left`-Prüfungen hinzufügen, um IE/Edge-Browser zu unterstützen. Wenn der linke Cursor gedrückt wird, dann wird die `leftPressed`-Variable auf `true` gesetzt, und wenn sie losgelassen wird, wird die `leftPressed`-Variable auf `false` gesetzt. Dasselbe Muster gilt für den rechten Cursor und die `rightPressed`-Variable.

### Die Bewegungslogik des Paddles

Wir haben nun die Variablen zum Speichern der Informationen über die gedrückten Tasten, Ereignis-Listener und relevante Funktionen eingerichtet. Als Nächstes werden wir in den Code eintauchen, um all die Dinge zu verwenden, die wir gerade eingerichtet haben, und um das Paddle auf dem Bildschirm zu bewegen. Innerhalb der `draw()`-Funktion werden wir überprüfen, ob die linke oder rechte Cursortaste gedrückt wird, wenn jedes Frame gerendert wird. Unser Code könnte so aussehen:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Wenn der linke Cursor gedrückt wird, bewegt sich das Paddle sieben Pixel nach links, und wenn der rechte Cursor gedrückt wird, bewegt sich das Paddle sieben Pixel nach rechts. Dies funktioniert derzeit, aber das Paddle verschwindet vom Rand der Leinwand, wenn wir eine der Tasten zu lange gedrückt halten. Wir könnten das verbessern und das Paddle nur innerhalb der Grenzen der Leinwand bewegen, indem wir den Code folgendermaßen ändern:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

Die `paddleX`-Position, die wir verwenden, bewegt sich zwischen `0` auf der linken Seite der Leinwand und `canvas.width-paddleWidth` auf der rechten Seite, was genau so funktioniert, wie wir es wollen.

Fügen Sie den obigen Codeblock in die `draw()`-Funktion am Ende ein, gerade oberhalb der schließenden geschweiften Klammer.

Das Einzige, was nun noch zu tun ist, ist die `drawPaddle()`-Funktion aus der `draw()`-Funktion aufzurufen, um es tatsächlich auf dem Bildschirm zu zeichnen. Fügen Sie die folgende Zeile innerhalb Ihrer `draw()`-Funktion hinzu, direkt unter der Zeile, die `drawBall()` aufruft:

```js
drawPaddle();
```

## Vergleichen Sie Ihren Code

Sehen Sie, wie Ihr Code mit dem Live-Beispiel unten verglichen werden kann:

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
> Versuchen Sie, das Paddle schneller oder langsamer zu machen oder seine Größe zu ändern.

## Nächste Schritte

Jetzt haben wir etwas, das einem Spiel ähnelt. Das einzige Problem jetzt ist, dass Sie den Ball einfach weiter mit dem Paddle schlagen können und es gibt kein Gewinnen oder Verlieren. Das wird sich alles im fünften Kapitel ändern, [Game over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), wenn wir beginnen, einen Endspielzustand für unser Spiel einzubauen.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}
