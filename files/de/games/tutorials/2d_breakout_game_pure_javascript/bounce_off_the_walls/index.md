---
title: Von den Wänden abprallen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

Dies ist der **3. Schritt** von insgesamt 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es ist schön zu sehen, dass sich unser Ball bewegt, aber er verschwindet schnell vom Bildschirm, was den Spaß, den wir mit ihm haben können, einschränkt! Um diesem Problem entgegenzuwirken, werden wir eine Kollisionserkennung implementieren (die [später](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) genauer erklärt wird), damit der Ball von den vier Rändern des Canvas abprallt.

## Einfache Kollisionserkennung

Um die Kollision zu erkennen, werden wir überprüfen, ob der Ball die Wand berührt (kollidiert) und, falls ja, die Bewegungsrichtung entsprechend ändern.

Um die Berechnungen zu erleichtern, definieren wir eine Variable namens `ballRadius`, die den Radius des gezeichneten Kreises enthält und für Berechnungen verwendet wird. Fügen Sie dies irgendwo unterhalb der bestehenden Variablendeklarationen in Ihren Code ein:

```js
const ballRadius = 10;
```

Aktualisieren Sie nun die Zeile, die den Ball innerhalb der `drawBall()`-Funktion zeichnet, auf Folgendes:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Vom oberen und unteren Rand abprallen

Es gibt vier Wände, von denen der Ball abprallen kann – konzentrieren wir uns zuerst auf die obere. Wir müssen in jedem Frame überprüfen, ob der Ball den oberen Rand des Canvas berührt – wenn ja, kehren wir die Ballbewegung um, sodass er in die entgegengesetzte Richtung zu bewegen beginnt und innerhalb der sichtbaren Grenzen bleibt. Da das Koordinatensystem oben links beginnt, können wir so etwas wie dies entwickeln:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Wenn der `y`-Wert der Ballposition kleiner als null ist, ändern Sie die Bewegungsrichtung auf der `y`-Achse, indem Sie sie auf ihren umgekehrten Wert setzen. Wenn sich der Ball mit einer Geschwindigkeit von 2 Pixeln pro Frame nach oben bewegte, wird er nun mit einer Geschwindigkeit von -2 Pixeln "nach oben" bewegen, was tatsächlich einer Bewegung nach unten mit einer Geschwindigkeit von 2 Pixeln pro Frame entspricht.

Der obige Code würde dafür sorgen, dass der Ball vom oberen Rand abprallt, denken wir jetzt also über den unteren Rand nach:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Wenn die `y`-Position des Balls größer als die Höhe des Canvas ist (denken Sie daran, dass wir die `y`-Werte von oben links zählen, sodass der obere Rand bei 0 beginnt und der untere Rand sich bei 320 Pixeln, der Höhe des Canvas, befindet), lassen Sie ihn vom unteren Rand abprallen, indem Sie die Bewegung auf der `y`-Achse wie zuvor umkehren.

Wir könnten diese beiden Anweisungen zu einer zusammenfassen, um die Code-Vielzahl zu reduzieren:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Wenn eine der beiden Aussagen `wahr` ist, kehren Sie die Bewegung des Balls um.

### Vom linken und rechten Rand abprallen

Wir haben den oberen und unteren Rand abgedeckt, denken wir nun also über den linken und rechten nach. Es ist tatsächlich sehr ähnlich, alles, was Sie tun müssen, ist, die Aussagen für `x` anstelle von `y` zu wiederholen:

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

Testen Sie an diesem Punkt Ihren Code, und Sie werden beeindruckt sein – jetzt haben wir einen Ball, der von allen vier Rändern des Canvas abprallt! Wir haben jedoch ein weiteres Problem – wenn der Ball jede Wand trifft, versinkt er leicht darin, bevor er die Richtung ändert:

![hellblauer Ball, der im oberen Teil der weißen Wand verschwindet.](ball-in-wall.png)

Dies liegt daran, dass wir den Kollisionspunkt der Wand und die Mitte des Balls berechnen, während wir es für seinen Umfang tun sollten. Der Ball sollte direkt nach dem Berühren der Wand abprallen und nicht, wenn er bereits halb in der Wand steckt, also passen wir unsere Aussagen etwas an, um das zu berücksichtigen. Aktualisieren Sie den zuletzt hinzugefügten Code jetzt auf Folgendes:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Wenn der Abstand zwischen der Mitte des Balls und dem Rand der Wand genau derselbe ist wie der Radius des Balls, wird die Bewegungsrichtung geändert. Das Subtrahieren des Radius von einer Randbreite und das Hinzufügen auf die andere gibt uns den Eindruck einer ordentlichen Kollisionserkennung – der Ball prallt von den Wänden ab, wie er es sollte.

## Vergleichen Sie Ihren Code

Lassen Sie uns noch einmal den fertigen Code für diesen Teil mit dem, den Sie haben, vergleichen und damit spielen:

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
> Versuchen Sie, die Farbe des Balls in eine zufällige Farbe zu ändern, jedes Mal, wenn er die Wand trifft.

## Nächste Schritte

Wir haben nun das Stadium erreicht, in dem sich unser Ball sowohl bewegt als auch auf dem Spielbrett bleibt. Im vierten Kapitel werden wir uns mit der Implementierung eines steuerbaren Paddels befassen – siehe [Paddle und Tastatursteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
