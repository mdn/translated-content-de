---
title: Abprallen von den Wänden
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **3. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html) finden.

Es ist schön zu sehen, wie sich unser Ball bewegt, aber er verschwindet schnell vom Bildschirm, was den Spaß mit ihm einschränkt! Um das zu überwinden, werden wir eine Kollisionsdetektion implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) genauer erklärt wird), um den Ball von den vier Kanten des Canvas abprallen zu lassen.

## Einfache Kollisionsdetektion

Um die Kollision zu erkennen, prüfen wir, ob der Ball die Wand berührt (mit ihr kollidiert), und falls ja, ändern wir die Bewegungsrichtung entsprechend.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises enthält und für Berechnungen verwendet wird. Fügen Sie dies irgendwo unter den bestehenden Variablendeklarationen in Ihren Code ein:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der `drawBall()`-Funktion zeichnet, zu folgendem:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Abprallen von oben und unten

Es gibt vier Wände, von denen der Ball abprallen soll — lassen Sie uns zuerst auf die obere konzentrieren. Wir müssen in jedem Frame überprüfen, ob der Ball die obere Kante des Canvas berührt — wenn ja, kehren wir die Ballbewegung um, sodass er in die entgegengesetzte Richtung zu bewegen beginnt und innerhalb der sichtbaren Grenzen bleibt. Da das Koordinatensystem von links oben beginnt, können wir uns so etwas wie folgt vorstellen:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als null ist, ändern Sie die Bewegungsrichtung auf der `y`-Achse, indem Sie ihn gleich seinem negativen Wert setzen. Wenn der Ball mit einer Geschwindigkeit von 2 Pixel pro Frame nach oben bewegt wurde, wird er nun mit einer Geschwindigkeit von -2 Pixel nach "oben" bewegt, was tatsächlich gleichbedeutend damit ist, dass er sich mit einer Geschwindigkeit von 2 Pixel pro Frame nach unten bewegt.

Der obenstehende Code handhabt das Abprallen des Balls von der oberen Kante, denken Sie nun an die untere Kante:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer ist als die Höhe des Canvas (denken Sie daran, dass wir die `y`-Werte von oben links zählen, daher beginnt die obere Kante bei 0 und die untere Kante bei 320 Pixeln, der Höhe des Canvas), dann lassen Sie ihn von der unteren Kante abprallen, indem Sie die `y`-Achsenbewegung wie zuvor umkehren.

Wir könnten diese beiden Anweisungen in einer zusammenfassen, um Code-Redundanz zu vermeiden:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Aussagen `true` ist, kehren Sie die Bewegung des Balls um.

### Abprallen von links und rechts

Wir haben die obere und untere Kante abgedeckt, denken wir an die linken und rechten. Es ist tatsächlich sehr ähnlich, alles, was Sie tun müssen, ist die Anweisungen für `x` anstelle von `y` zu wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An diesem Punkt sollten Sie den obigen Codeblock in die draw()-Funktion einfügen, direkt vor die schließende geschweifte Klammer.

### Der Ball verschwindet weiter in der Wand!

Testen Sie Ihren Code an diesem Punkt, und Sie werden beeindruckt sein — jetzt haben wir einen Ball, der von allen vier Kanten des Canvas abprallt! Wir haben jedoch ein anderes Problem — wenn der Ball jede Wand trifft, versinkt er leicht darin, bevor er die Richtung ändert:

![hellblauer Ball verschwindet in der Oberseite der weißen Wand.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und des Zentrums des Balls berechnen, während wir dies für seine Umrandung tun sollten. Der Ball sollte abprallen, sobald er die Wand berührt, nicht wenn er bereits halb in der Wand ist, also passen wir unsere Aussagen ein wenig an, um das zu berücksichtigen. Aktualisieren Sie den letzten Code, den Sie hinzugefügt haben, zu folgendem:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen dem Zentrum des Balls und der Kante der Wand genau dem Radius des Balls entspricht, ändert er die Bewegungsrichtung. Das Subtrahieren des Radius von der Breite einer Kante und das Hinzufügen an die andere gibt uns den Eindruck der ordnungsgemäßen Kollisionsdetektion — der Ball prallt von den Wänden ab, wie er sollte.

## Vergleichen Sie Ihren Code

Lassen Sie uns den fertigen Code für diesen Teil erneut mit dem vergleichen, was Sie haben, und ein wenig damit spielen:

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

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Versuchen Sie, die Farbe des Balls bei jedem Auftreffen auf die Wand zufällig zu ändern.

## Nächste Schritte

Wir haben jetzt den Punkt erreicht, an dem sich unser Ball bewegt und auf dem Spielbrett bleibt. Im vierten Kapitel werden wir das Implementieren eines steuerbaren Schlägers betrachten — siehe [Paddle and keyboard controls](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
