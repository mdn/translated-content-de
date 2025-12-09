---
title: An den Wänden abprallen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **3. Schritt** von 10 des [Gamedev Canvas Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es ist schön, unseren Ball in Bewegung zu sehen, aber er verschwindet schnell vom Bildschirm, was den Spaß einschränkt! Um dies zu überwinden, werden wir eine Kollisionserkennung implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) genauer erklärt wird), um den Ball von den vier Rändern der Canvas abprallen zu lassen.

## Einfache Kollisionserkennung

Um die Kollision zu erkennen, überprüfen wir, ob der Ball die Wand berührt (kollidiert) und ändern in diesem Fall die Bewegungsrichtung entsprechend.

Um die Berechnungen zu ermöglichen, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises enthält und für Berechnungen verwendet wird. Fügen Sie dies in Ihren Code ein, irgendwo unterhalb der vorhandenen Variablendeklarationen:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der `drawBall()`-Funktion zeichnet, auf Folgendes:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Am oberen und unteren Rand abprallen

Es gibt vier Wände, von denen der Ball abprallen kann – konzentrieren wir uns zuerst auf die obere. Wir müssen in jedem Frame überprüfen, ob der Ball den oberen Rand der Canvas berührt – wenn ja, kehren wir die Ballbewegung um, sodass er in die entgegengesetzte Richtung zu bewegen beginnt und innerhalb der sichtbaren Grenzen bleibt. Da das Koordinatensystem von oben links beginnt, können wir auf Folgendes kommen:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als Null ist, ändern Sie die Bewegungsrichtung auf der `y`-Achse, indem Sie sie gleich dem negativen Wert von sich selbst setzen. Wenn sich der Ball mit einer Geschwindigkeit von 2 Pixel pro Frame nach oben bewegt hat, bewegt er sich jetzt "nach oben" mit einer Geschwindigkeit von -2 Pixel, was in Wirklichkeit einem Bewegen nach unten mit einer Geschwindigkeit von 2 Pixel pro Frame entspricht.

Der obige Code würde das Abprallen des Balls vom oberen Rand behandeln, also überlegen wir jetzt über den unteren Rand:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer als die Höhe der Canvas ist (denken Sie daran, dass wir die `y`-Werte von oben links zählen, sodass der obere Rand bei 0 beginnt und der untere Rand bei 320 Pixel, der Höhe der Canvas, liegt), dann lassen Sie ihn vom unteren Rand durch Umkehren der `y`-Achsenbewegung wie zuvor abprallen.

Wir könnten diese beiden Anweisungen zu einer zusammenfassen, um Codeüberflüssigkeit zu sparen:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Aussagen `true` ist, kehren Sie die Bewegung des Balls um.

### Am linken und rechten Rand abprallen

Wir haben den oberen und unteren Rand abgedeckt, denken wir also an die linken und rechten Kanten. Es ist tatsächlich sehr ähnlich, alles, was Sie tun müssen, ist, die Anweisungen für `x` anstelle von `y` zu wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An diesem Punkt sollten Sie den obigen Codeblock in die draw()-Funktion einfügen, direkt vor der schließenden geschweiften Klammer.

### Der Ball verschwindet immer wieder in der Wand!

Testen Sie Ihren Code an diesem Punkt, und Sie werden beeindruckt sein — jetzt haben wir einen Ball, der von allen vier Rändern der Canvas abprallt! Wir haben jedoch ein anderes Problem – wenn der Ball jede Wand trifft, versinkt er leicht darin, bevor er die Richtung ändert:

![Himmelblauer Ball verschwindet in der Oberseite der weißen Wand.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und der Mitte des Balls berechnen, während wir dies für dessen Umfang tun sollten. Der Ball sollte abprallen, sobald er die Wand berührt, nicht, wenn er sich bereits zur Hälfte in der Wand befindet. Passen wir also unsere Aussagen so an, dass dies berücksichtigt wird. Aktualisieren Sie den zuletzt hinzugefügten Code folgendermaßen:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen der Mitte des Balls und dem Rand der Wand genau dem Radius des Balls entspricht, ändert sich die Bewegungsrichtung. Das Subtrahieren des Radius von der Breite eines Rands und das Hinzufügen zu dem anderen gibt uns den Eindruck der korrekten Kollisionserkennung – der Ball prallt von den Wänden ab, wie er es sollte.

## Vergleichen Sie Ihren Code

Lassen Sie uns erneut den fertigen Code für diesen Teil mit dem vergleichen, was Sie haben, und ein wenig damit spielen:

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
> Versuchen Sie, die Farbe des Balls jedes Mal in eine zufällige Farbe zu ändern, wenn er die Wand trifft.

## Nächste Schritte

Wir sind jetzt an einem Punkt angelangt, an dem unser Ball sowohl in Bewegung ist als auch auf dem Spielfeld bleibt. Im vierten Kapitel werden wir die Implementierung eines steuerbaren Paddels betrachten – siehe [Paddle und Tastatursteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
