---
title: Abprallen von den Wänden
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **dritte Schritt** von insgesamt 10 des [Gamedev-Canvas-Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es ist schön zu sehen, dass sich unser Ball bewegt, aber er verschwindet schnell vom Bildschirm, was den Spaß daran einschränkt! Um das zu überwinden, werden wir eine Kollisionserkennung implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) ausführlicher erklärt wird), damit der Ball von den vier Kanten des Canvas abprallt.

## Einfache Kollisionserkennung

Um die Kollision zu erkennen, prüfen wir, ob der Ball die Wand berührt (mit ihr kollidiert), und wenn ja, ändern wir die Richtung seiner Bewegung entsprechend.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises enthält und für Berechnungen verwendet wird. Fügen Sie dies irgendwo unterhalb der vorhandenen Variablendeklarationen in Ihren Code ein:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der Funktion `drawBall()` zeichnet, auf folgendes:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Abprallen von oben und unten

Es gibt vier Wände, an denen der Ball abprallen kann — konzentrieren wir uns zunächst auf die obere. Wir müssen in jedem Frame prüfen, ob der Ball die obere Kante des Canvas berührt — wenn ja, kehren wir die Ballbewegung um, damit er sich in die entgegengesetzte Richtung bewegt und innerhalb der sichtbaren Grenzen bleibt. Wenn wir uns daran erinnern, dass das Koordinatensystem von oben links beginnt, können wir so etwas entwerfen:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als null ist, ändern Sie die Bewegungsrichtung auf der `y`-Achse, indem Sie sie gleich ihrem umgekehrten Wert setzen. Wenn der Ball sich mit einer Geschwindigkeit von 2 Pixel pro Frame nach oben bewegte, wird er jetzt mit einer Geschwindigkeit von -2 Pixel nach "oben" bewegt, was tatsächlich einer Bewegung nach unten mit einer Geschwindigkeit von 2 Pixel pro Frame entspricht.

Der obige Code würde den Ball vom oberen Rand abprallen lassen, also überlegen wir jetzt den unteren Rand:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer ist als die Höhe des Canvas (denken Sie daran, dass wir die `y`-Werte von oben links zählen, sodass der obere Rand bei 0 beginnt und der untere Rand bei 320 Pixeln, der Höhe des Canvas, liegt), prallen Sie ihn vom unteren Rand ab, indem Sie die `y`-Achsenbewegung wie zuvor umkehren.

Wir könnten diese beiden Anweisungen zu einer zusammenfassen, um die Redundanz im Code zu verringern:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Anweisungen `true` ist, kehren Sie die Bewegung des Balls um.

### Abprallen von links und rechts

Wir haben den oberen und unteren Rand abgedeckt, also denken wir über die linken und rechten nach. Es ist tatsächlich sehr ähnlich, alles, was Sie tun müssen, ist die Anweisungen für `x` statt `y` zu wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An diesem Punkt sollten Sie den obigen Codeblock in die draw()-Funktion einfügen, kurz vor der schließenden geschweiften Klammer.

### Der Ball verschwindet weiterhin in der Wand!

Testen Sie an diesem Punkt Ihren Code, und Sie werden beeindruckt sein — jetzt haben wir einen Ball, der von allen vier Kanten des Canvas abprallt! Wir haben jedoch ein weiteres Problem — wenn der Ball jede Wand trifft, sinkt er leicht in sie ein, bevor er die Richtung ändert:

![hellblauer Ball, der in die obere weiße Wand einsinkt.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und der Mitte des Balls berechnen, während wir dies für dessen Umfang tun sollten. Der Ball sollte direkt abprallen, nachdem er die Wand berührt, nicht wenn er bereits halb in der Wand steckt, also passen wir unsere Anweisungen ein wenig an, um das zu berücksichtigen. Aktualisieren Sie den zuletzt hinzugefügten Code zu folgendem:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen der Mitte des Balls und der Kante der Wand genau dem Radius des Balls entspricht, ändert er die Bewegungsrichtung. Indem wir den Radius vom Rand abziehen und auf der anderen Seite hinzufügen, erhalten wir den Eindruck einer ordnungsgemäßen Kollisionserkennung — der Ball prallt von den Wänden ab, wie er sollte.

## Vergleichen Sie Ihren Code

Lassen Sie uns den fertigen Code für diesen Teil erneut mit Ihrem vergleichen und etwas damit spielen:

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
> Versuchen Sie, die Farbe des Balls bei jedem Wandtreffer in eine zufällige Farbe zu ändern.

## Nächste Schritte

Wir sind jetzt an einem Punkt angelangt, an dem sich unser Ball sowohl bewegt als auch auf dem Spielfeld bleibt. Im vierten Kapitel werden wir über die Implementierung eines steuerbaren Schlägers sprechen — siehe [Schläger und Tastatursteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
