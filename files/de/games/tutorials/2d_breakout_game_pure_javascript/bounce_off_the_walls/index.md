---
title: Von den Wänden abprallen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **3. Schritt** von insgesamt 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html) finden.

Es ist schön zu sehen, dass sich unser Ball bewegt, aber er verschwindet schnell vom Bildschirm, was den Spaß daran einschränkt! Um dem entgegenzuwirken, implementieren wir eine Kollisionserkennung (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) ausführlicher erklärt wird), um den Ball von den vier Rändern der Canvas abprallen zu lassen.

## Einfache Kollisionserkennung

Um die Kollision zu erkennen, prüfen wir, ob der Ball die Wand berührt (kollidiert), und falls ja, ändern wir die Richtung seiner Bewegung entsprechend.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises hält und für Berechnungen verwendet wird. Fügen Sie dies Ihrem Code hinzu, irgendwo unterhalb der bestehenden Variablendeklarationen:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der Funktion `drawBall()` zeichnet, auf Folgendes:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Vom oberen und unteren Rand abprallen

Es gibt vier Wände, von denen der Ball abprallen kann — zunächst konzentrieren wir uns auf die obere. Wir müssen in jedem Frame prüfen, ob der Ball die obere Kante der Canvas berührt — falls ja, kehren wir die Ballbewegung um, damit er in die entgegengesetzte Richtung beginnt und innerhalb der sichtbaren Grenzen bleibt. In Erinnerung an das Koordinatensystem, das von oben links startet, können wir etwas wie folgt entwickeln:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als null ist, ändern Sie die Richtung der Bewegung auf der `y`-Achse, indem Sie ihn gleich seinem negativen Gegenteil setzen. Wenn sich der Ball mit einer Geschwindigkeit von 2 Pixeln pro Frame nach oben bewegte, wird er sich jetzt mit einer Geschwindigkeit von -2 Pixeln "nach oben" bewegen, was tatsächlich einer Bewegung nach unten bei einer Geschwindigkeit von 2 Pixeln pro Frame entspricht.

Der obige Code würde das Abprallen des Balls von der oberen Kante regeln, also denken wir jetzt über die untere Kante nach:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer als die Höhe der Canvas ist (denken Sie daran, dass wir die `y`-Werte von oben links zählen, sodass die obere Kante bei 0 beginnt und die untere bei 320 Pixeln, der Höhe der Canvas, liegt), dann lassen Sie ihn von der unteren Kante abprallen, indem Sie die `y`-Achsenbewegung wie zuvor umkehren.

Wir könnten diese beiden Anweisungen in einer zusammenfassen, um die Codeausführlichkeit zu reduzieren:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Anweisungen `true` ist, kehren Sie die Bewegung des Balls um.

### Vom linken und rechten Rand abprallen

Wir haben die obere und untere Kante abgedeckt, also denken wir über die linke und rechte nach. Es ist tatsächlich sehr ähnlich, Sie müssen nur die Anweisungen für `x` anstelle von `y` wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An dieser Stelle sollten Sie den obigen Codeblock in die `draw()`-Funktion einfügen, kurz vor der schließenden geschweiften Klammer.

### Der Ball verschwindet weiterhin in der Wand!

Testen Sie Ihren Code an dieser Stelle, und Sie werden beeindruckt sein — jetzt haben wir einen Ball, der von allen vier Rändern der Canvas abprallt! Wir haben jedoch ein anderes Problem — wenn der Ball jede Wand trifft, sinkt er leicht ein, bevor er die Richtung ändert:

![hellblauer Ball verschwindet in der oberen weißen Wand.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und der Mitte des Balls berechnen, während wir ihn für den Umfang berechnen sollten. Der Ball sollte abprallen, sobald er die Wand berührt, nicht wenn er bereits zur Hälfte in der Wand steckt. Passen wir also unsere Anweisungen leicht an, um das zu berücksichtigen. Aktualisieren Sie den zuletzt hinzugefügten Code zu diesem:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen der Mitte des Balls und dem Rand der Wand genau gleich dem Radius des Balls ist, ändert er die Bewegungsrichtung. Das Subtrahieren des Radius von der Breite einer Kante und das Hinzufügen zu der anderen vermittelt den Eindruck einer ordnungsgemäßen Kollisionserkennung — der Ball prallt wie vorgeschrieben von den Wänden ab.

## Vergleichen Sie Ihren Code

Vergleichen wir erneut den vollständigen Code für diesen Teil mit dem, was Sie haben, und probieren wir es aus:

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

Wir haben nun den Punkt erreicht, an dem sich unser Ball sowohl bewegt als auch auf dem Spielfeld bleibt. Im vierten Kapitel werden wir uns mit der Implementierung eines steuerbaren Schlägers befassen — siehe [Schläger und Tastatursteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
