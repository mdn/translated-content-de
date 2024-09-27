---
title: Abprallen von den Wänden
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **3. Schritt** von 10 des [Gamedev Canvas-Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es ist schön zu sehen, dass sich unser Ball bewegt, aber er verschwindet schnell vom Bildschirm, was den Spaß mit ihm einschränkt! Um das zu beheben, werden wir eine Kollisionsabfrage implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) im Detail erklärt wird), um den Ball an den vier Rändern der Canvas abprallen zu lassen.

## Einfache Kollisionsabfrage

Um die Kollision zu erkennen, prüfen wir, ob der Ball die Wand berührt (mit ihr kollidiert), und wenn ja, ändern wir die Richtung seiner Bewegung entsprechend.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises hält und für Berechnungen verwendet wird. Fügen Sie dies zu Ihrem Code hinzu, irgendwo unter den bestehenden Variablendeklarationen:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der `drawBall()`-Funktion zeichnet, zu folgendem:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Abprallen an der Ober- und Unterseite

Es gibt vier Wände, an denen der Ball abprallen kann — konzentrieren wir uns zunächst auf die obere. Wir müssen in jedem Frame prüfen, ob der Ball die obere Kante der Canvas berührt — wenn ja, kehren wir die Ballbewegung um, sodass er in die entgegengesetzte Richtung zu bewegen beginnt und innerhalb der sichtbaren Grenzen bleibt. Da das Koordinatensystem oben links beginnt, können wir etwas wie das Folgende entwickeln:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition niedriger als null ist, ändern Sie die Bewegungsrichtung auf der `y`-Achse, indem Sie sie sich gleich, aber umgekehrt setzen. Wenn der Ball mit einer Geschwindigkeit von 2 Pixeln pro Frame nach oben bewegte, wird er nun mit einer Geschwindigkeit von -2 Pixeln nach "oben" bewegt, was tatsächlich bedeutet, dass er sich mit einer Geschwindigkeit von 2 Pixeln pro Frame nach unten bewegt.

Der obige Code würde sich mit dem Abprallen des Balls von der oberen Kante befassen, also denken wir jetzt über die Unterkante nach:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer als die Höhe der Canvas ist (denken Sie daran, dass wir die `y`-Werte von oben links zählen, sodass die obere Kante bei 0 beginnt und die untere bei 320 Pixeln, der Höhe der Canvas, endet), dann lassen Sie ihn von der Unterkante abprallen, indem Sie die `y`-Achsenbewegung wie zuvor umkehren.

Wir könnten diese beiden Statements zu einem zusammenführen, um den Codeumfang zu reduzieren:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Aussagen `true` ist, kehren Sie die Bewegung des Balls um.

### Abprallen an der linken und rechten Seite

Wir haben die obere und untere Kante abgedeckt, also denken wir über die linken und rechten nach. Es ist tatsächlich sehr ähnlich, Sie müssen lediglich die Aussagen für `x` anstelle von `y` wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An diesem Punkt sollten Sie den obigen Codeblock in die `draw()`-Funktion einfügen, kurz bevor die schließende geschweifte Klammer kommt.

### Der Ball verschwindet weiter in der Wand!

Testen Sie Ihren Code an diesem Punkt, und Sie werden beeindruckt sein — jetzt haben wir einen Ball, der von allen vier Rändern der Leinwand abprallt! Wir haben jedoch ein anderes Problem — wenn der Ball jede Wand trifft, versinkt er leicht darin, bevor er die Richtung ändert:

![himmelblauer Ball, der in die Oberseite der weißen Wand verschwindet.](ball-in-wall.png)

Das liegt daran, dass wir den Kollisionspunkt der Wand und des Zentrums des Balls berechnen, während wir es für den Umfang des Balls machen sollten. Der Ball sollte abprallen, sobald er die Wand berührt, nicht wenn er bereits halbwegs in der Wand ist, also passen wir unsere Aussagen ein wenig an, um das einzuschließen. Aktualisieren Sie den zuletzt hinzugefügten Code zu diesem:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen der Mitte des Balls und dem Rand der Wand genau der gleiche wie der Radius des Balls ist, ändert er die Bewegungsrichtung. Das Subtrahieren des Radius von der Breite einer Kante und das Hinzufügen auf der anderen gibt uns den Eindruck der ordnungsgemäßen Kollisionsabfrage — der Ball prallt so von den Wänden ab, wie er sollte.

## Vergleichen Sie Ihren Code

Lassen Sie uns den fertigen Code für diesen Teil erneut mit dem vergleichen, was Sie haben, und ein wenig experimentieren:

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
> Versuchen Sie, die Farbe des Balls zu einer zufälligen Farbe zu ändern, jedes Mal, wenn er die Wand trifft.

## Nächste Schritte

Wir haben jetzt den Punkt erreicht, an dem unser Ball sowohl in Bewegung ist als auch auf dem Spielfeld bleibt. Im vierten Kapitel werden wir eine steuerbare Paddle implementieren — siehe [Paddle und Tastatursteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
