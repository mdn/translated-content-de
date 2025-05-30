---
title: Prallen Sie von den Wänden ab
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **3. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es ist schön zu sehen, wie unser Ball sich bewegt, aber er verschwindet schnell vom Bildschirm, was den Spaß stark einschränkt! Um dem entgegenzuwirken, werden wir eine Kollisionserkennung implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) genauer erklärt wird), um den Ball von den vier Rändern der Canvas abprallen zu lassen.

## Einfache Kollisionserkennung

Um die Kollision zu erkennen, prüfen wir, ob der Ball die Wand berührt (kollidiert), und wenn ja, ändern wir die Richtung seiner Bewegung entsprechend.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises speichert und für Berechnungen verwendet wird. Fügen Sie dies zu Ihrem Code hinzu, irgendwo unter den bestehenden Variablendeklarationen:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der `drawBall()` Funktion zeichnet, zu dieser:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Vom oberen und unteren Rand abprallen

Es gibt vier Wände, von denen der Ball abprallen kann — konzentrieren wir uns zuerst auf die obere. Wir müssen in jedem Frame prüfen, ob der Ball den oberen Rand der Canvas berührt — wenn ja, kehren wir die Ballbewegung um, sodass er in die entgegengesetzte Richtung zu bewegen beginnt und innerhalb der sichtbaren Grenzen bleibt. In Erinnerung daran, dass das Koordinatensystem vom oberen linken Punkt ausgeht, können wir uns etwa Folgendes überlegen:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als Null ist, ändern Sie die Bewegungsrichtung auf der `y`-Achse, indem Sie sie gleich sich selbst, umgekehrt, setzen. Wenn sich der Ball mit einer Geschwindigkeit von 2 Pixel pro Frame nach oben bewegt hat, wird er nun "nach oben" mit einer Geschwindigkeit von -2 Pixeln bewegt, was tatsächlich bedeutet, dass er sich mit einer Geschwindigkeit von 2 Pixeln pro Frame nach unten bewegt.

Der obige Code würde den Ball vom oberen Rand abprallen lassen, also denken wir jetzt über den unteren Rand nach:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer ist als die Höhe der Canvas (denken Sie daran, dass wir die `y`-Werte vom oberen linken Punkt zählen, sodass der obere Rand bei 0 beginnt und der untere Rand bei 320 Pixeln, der Höhe der Canvas, liegt), lassen Sie ihn vom unteren Rand abprallen, indem Sie die `y`-Achsenbewegung wie zuvor umkehren.

Wir könnten diese beiden Anweisungen zu einer zusammenfassen, um Codeverbrauch zu sparen:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Anweisungen `true` ist, kehren Sie die Bewegung des Balls um.

### Vom linken und rechten Rand abprallen

Wir haben die oberen und unteren Ränder abgedeckt, also denken wir über die linken und rechten nach. Es ist tatsächlich sehr ähnlich, alles was Sie tun müssen, ist die Anweisungen für `x` anstelle von `y` zu wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An diesem Punkt sollten Sie den obigen Codeblock in die draw() Funktion einfügen, kurz vor der schließenden geschweiften Klammer.

### Der Ball verschwindet weiter in der Wand!

Testen Sie Ihren Code an diesem Punkt, und Sie werden beeindruckt sein — nun haben wir einen Ball, der von allen vier Rändern der Canvas abprallt! Wir haben jedoch ein weiteres Problem — wenn der Ball jede Wand trifft, versinkt er leicht in ihr, bevor er seine Richtung ändert:

![hellblauer Ball verschwindet in der oberen weißen Wand.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und der Mitte des Balls berechnen, während wir es für seine Umrandung tun sollten. Der Ball sollte genau abprallen, nachdem er die Wand berührt, nicht wenn er bereits halb in der Wand ist. Passen wir also unsere Anweisungen ein wenig an, um dies zu berücksichtigen. Aktualisieren Sie den zuletzt hinzugefügten Code zu diesem:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn die Entfernung zwischen der Mitte des Balls und dem Rand der Wand genau gleich dem Radius des Balls ist, wird die Bewegungsrichtung geändert. Indem man den Radius von der Breite eines Randes subtrahiert und auf den anderen addiert, entsteht der Eindruck einer ordnungsgemäßen Kollisionserkennung — der Ball prallt wie vorgesehen von den Wänden ab.

## Vergleichen Sie Ihren Code

Lassen Sie uns erneut den fertigen Code für diesen Teil mit Ihrem Code vergleichen und etwas ausprobieren:

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

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
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
> Versuchen Sie, die Farbe des Balls bei jedem Aufprall an der Wand in eine zufällige Farbe zu ändern.

## Nächste Schritte

Wir haben nun den Punkt erreicht, an dem unser Ball sich sowohl bewegt als auch auf dem Spielfeld bleibt. Im vierten Kapitel werden wir uns mit der Implementierung eines steuerbaren Schlägers beschäftigen — siehe [Schläger und Tastatursteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
