---
title: Den Ball bewegen
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **zweite Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Sie wissen bereits, wie man einen Ball zeichnet, da Sie den vorherigen Artikel durchgearbeitet haben; jetzt lassen Sie ihn uns bewegen. Technisch gesehen werden wir den Ball auf dem Bildschirm zeichnen, ihn löschen und dann in jeder Frame erneut mit einer leicht unterschiedlichen Position zeichnen, um den Eindruck von Bewegung zu erzeugen — genau so, wie Bewegung im Film funktioniert.

## Eine Zeichenschleife definieren

Um ständig die Canvas-Zeichnung in jedem Frame zu aktualisieren, müssen wir eine Zeichnungsfunktion definieren, die immer wieder ausgeführt wird, wobei jedes Mal ein anderer Satz von Variablenwerten verwendet wird, um die Sprite-Positionen usw. zu ändern. Sie können eine Funktion immer wieder mit einer JavaScript-Timing-Funktion ausführen lassen. Später im Tutorial werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber wir beginnen zunächst mit [`setInterval()`](/de/docs/Web/API/SetInterval), um etwas Schleifenlogik zu erstellen.

Löschen Sie den gesamten JavaScript-Code in Ihrer HTML-Datei, außer den ersten beiden Zeilen, und fügen Sie das Folgende darunter hinzu. Die `draw()`-Funktion wird innerhalb von `setInterval` alle 10 Millisekunden ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden aufgerufen, solange wir sie nicht stoppen. Jetzt zeichnen wir den Ball — fügen Sie Folgendes in Ihre `draw()`-Funktion ein:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Versuchen Sie jetzt Ihren aktualisierten Code — der Ball sollte in jedem Frame neu gezeichnet werden.

## Bewegend machen

Im Moment werden Sie nicht bemerken, dass der Ball ständig neu gezeichnet wird, da er sich nicht bewegt. Lassen Sie uns das ändern. Anstatt einer fest kodierten Position bei (50,50) definieren wir einen Startpunkt im unteren mittleren Teil des Canvas in Variablen namens `x` und `y` und verwenden diese, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zuerst die folgenden zwei Zeilen über Ihrer `draw()`-Funktion hinzu, um `x` und `y` zu definieren:

```js
let x = canvas.width / 2;
let y = canvas.height - 30;
```

Aktualisieren Sie dann die `draw()`-Funktion, um die `x`- und `y`-Variablen in der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode zu verwenden, wie in der folgenden hervorgehobenen Zeile gezeigt:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Nun kommt der wichtige Teil: Wir möchten nach jedem gezeichneten Frame einen kleinen Wert zu `x` und `y` hinzufügen, damit es so aussieht, als ob der Ball sich bewegt. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte auf 2 bzw. -2 setzen. Fügen Sie das Folgende unterhalb Ihrer Definitionen der Variablen `x` und `y` hinzu:

```js
let dx = 2;
let dy = -2;
```

Das Letzte, was zu tun ist, ist `x` und `y` mit unseren `dx` und `dy` Variablen in jedem Frame zu aktualisieren, sodass der Ball bei jedem Update an der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen zu Ihrer `draw()`-Funktion hinzu:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

Speichern Sie Ihren Code erneut und versuchen Sie es in Ihrem Browser. Dies funktioniert zwar, aber es sieht so aus, als würde der Ball eine Spur hinter sich herziehen:

![Eine blaue Linie, die anzeigt, wo der Ball gewesen ist](ball-trail.png)

## Das Canvas vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir in jedem Frame einen neuen Kreis zeichnen, ohne den vorhergehenden zu entfernen. Keine Sorge, denn es gibt eine Methode, um den Canvas-Inhalt zu löschen: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode nimmt vier Parameter entgegen: die `x`- und `y`-Koordinaten der oberen linken Ecke eines Rechtecks sowie die `x`- und `y`-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von jeglichem dort zuvor gemalten Inhalt befreit.

Fügen Sie die folgende hervorgehobene neue Zeile in die `draw()`-Funktion ein:

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

Speichern Sie Ihren Code und versuchen Sie es erneut, und dieses Mal werden Sie sehen, dass sich der Ball ohne eine Spur bewegt. Alle 10 Millisekunden wird das Canvas gelöscht, der blaue Kreis (unser Ball) wird an einer bestimmten Position gezeichnet und die `x` und `y` Werte werden für den nächsten Frame aktualisiert.

## Unseren Code aufräumen

Wir werden in den nächsten Artikeln immer mehr Befehle zur `draw()`-Funktion hinzufügen, daher ist es gut, sie so minimal und sauber wie möglich zu halten. Beginnen wir, indem wir den Zeichencode des Balls in eine separate Funktion verschieben.

Ersetzen Sie die bestehende `draw()` Funktion durch die folgenden zwei Funktionen:

```js
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
```

## Vergleich Ihres Codes

Sie können den vollständigen Code für diesen Artikel im untenstehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert.

> [!NOTE]
> Live-Beispiele werden automatisch auf diesen Seiten ausgeführt, daher haben wir einen "Spiel starten" Button hinzugefügt.
> Dies ist nützlich, um zu vermeiden, dass Spiele automatisch starten und zu oft Alarme oder andere Ereignisse auslösen.

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Start game</button>
```

```css
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
let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
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

{{embedlivesample("compare_your_code", 600, 350)}}

> [!NOTE]
> Versuchen Sie, die Geschwindigkeit des sich bewegenden Balls zu ändern oder die Richtung, in die er sich bewegt.

## Nächste Schritte

Wir haben unseren Ball gezeichnet und in Bewegung gebracht, aber er verschwindet ständig am Rand des Canvas. Im dritten Kapitel werden wir erkunden, wie er von den Wänden [abprallen kann](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
