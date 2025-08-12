---
title: Gegen die Wände prallen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **dritte Schritt** von 10 des [Gamedev Canvas Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es ist schön, unseren Ball bewegen zu sehen, aber er verschwindet leider schnell vom Bildschirm, was den Spaß einschränkt, den wir damit haben können! Um dem entgegenzuwirken, werden wir eine Kollisionserkennung implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) genauer erklärt wird), um den Ball an den vier Rändern des Canvas abprallen zu lassen.

## Einfache Kollisionserkennung

Um die Kollision zu erkennen, überprüfen wir, ob der Ball die Wand berührt (mit ihr kollidiert) und ändern entsprechend die Richtung seiner Bewegung.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises hält und für Berechnungen verwendet wird. Fügen Sie dies irgendwo unter den bestehenden Variablendeklarationen in Ihren Code ein:

```js
const ballRadius = 10;
```

Aktualisieren Sie jetzt die Zeile, die den Ball innerhalb der `drawBall()`-Funktion zeichnet, zu dieser:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Abprallen von oben und unten

Es gibt vier Wände, an denen der Ball abprallen kann – konzentrieren wir uns zuerst auf die obere. Wir müssen in jedem Frame überprüfen, ob der Ball die obere Kante des Canvas berührt – wenn ja, kehren wir die Ballbewegung um, sodass er in die entgegengesetzte Richtung zu bewegen beginnt und innerhalb der sichtbaren Grenzen bleibt. Da das Koordinatensystem von oben links beginnt, können wir uns etwas wie folgt überlegen:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als null ist, ändern wir die Bewegungsrichtung auf der `y`-Achse, indem wir sie in ihr Gegenteil umkehren. Wenn der Ball mit einer Geschwindigkeit von 2 Pixel pro Frame nach oben bewegt wurde, wird er nun mit einer Geschwindigkeit von -2 Pixel nach oben bewegt, was tatsächlich einer Bewegung nach unten mit einer Geschwindigkeit von 2 Pixel pro Frame entspricht.

Der obige Code würde sich um das Abprallen des Balls von der oberen Kante kümmern, denken wir also jetzt über die untere Kante nach:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer ist als die Höhe des Canvas (denken Sie daran, dass wir die `y`-Werte von oben links zählen, also beginnt die obere Kante bei 0 und die untere Kante ist bei 320 Pixeln, der Höhe des Canvas), dann lassen Sie ihn an der unteren Kante abprallen, indem Sie die Bewegungsrichtung auf der `y`-Achse wie zuvor umkehren.

Wir könnten diese beiden Anweisungen zu einer zusammenfassen, um den Codeumfang zu reduzieren:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Bedingungen `true` ist, kehren Sie die Bewegung des Balls um.

### Abprallen von links und rechts

Wir haben die obere und untere Kante behandelt, also lassen Sie uns über die linken und rechten nachdenken. Es ist tatsächlich sehr ähnlich, alles, was Sie tun müssen, ist, die Anweisungen für `x` anstelle von `y` zu wiederholen:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

An diesem Punkt sollten Sie den obigen Codeblock in die draw() Funktion einfügen, unmittelbar vor der schließenden geschweiften Klammer.

### Der Ball verschwindet in die Wand!

Testen Sie Ihren Code an diesem Punkt, und Sie werden beeindruckt sein – jetzt haben wir einen Ball, der von allen vier Rändern des Canvas abprallt! Wir haben jedoch ein anderes Problem – wenn der Ball jede Wand trifft, sinkt er ein wenig hinein, bevor er die Richtung ändert:

![hellblauer Ball, der in die obere weiße Wand verschwindet.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und die Mitte des Balls berechnen, während wir dies eigentlich für den Umfang tun sollten. Der Ball sollte abprallen, nachdem er die Wand berührt hat, nicht wenn er bereits halb in der Wand ist, daher passen wir unsere Anweisungen ein wenig an. Aktualisieren Sie den zuletzt hinzugefügten Code zu diesem:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen der Mitte des Balls und dem Rand der Wand genau so groß ist wie der Radius des Balls, wird die Bewegungsrichtung geändert. Das Subtrahieren des Radius von einer Kantenbreite und das Hinzufügen zu einer anderen vermittelt uns den Eindruck einer ordnungsgemäßen Kollisionserkennung — der Ball prallt wie vorgesehen von den Wänden ab.

## Vergleichen Sie Ihren Code

Lassen Sie uns den fertigen Code für diesen Teil erneut überprüfen und etwas spielen:

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
> Versuchen Sie, die Farbe des Balls bei jedem Wandkontakt in eine zufällige Farbe zu ändern.

## Nächste Schritte

Wir haben nun den Punkt erreicht, an dem sich unser Ball sowohl bewegt als auch auf dem Spielfeld bleibt. Im vierten Kapitel werden wir uns mit der Implementierung eines steuerbaren Schlägers befassen – siehe [Schläger- und Tastatursteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
