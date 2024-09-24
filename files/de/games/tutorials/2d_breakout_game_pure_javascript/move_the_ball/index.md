---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html) finden.

Sie wissen bereits, wie man einen Ball zeichnet, da Sie den vorherigen Artikel bearbeitet haben. Lassen Sie uns den Ball nun bewegen. Technisch gesehen werden wir den Ball auf dem Bildschirm zeichnen, ihn löschen und dann bei jedem Frame in einer leicht anderen Position erneut zeichnen, um den Eindruck einer Bewegung zu erzeugen — genau wie bei der Bewegung in Filmen.

## Definieren einer Zeichenschleife

Um das Canvas-Zeichnen kontinuierlich bei jedem Frame zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder ausgeführt wird, wobei die Variablenwerte jedes Mal unterschiedlich sind, um Sprite-Positionen usw. zu ändern. Sie können eine Funktion immer wieder mit einer JavaScript-Timing-Funktion ausführen. Später im Tutorial werden wir sehen, wie {{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}} beim Zeichnen hilft, aber wir beginnen zunächst mit {{domxref("setInterval()")}}, um etwas Schleifenlogik zu erstellen.

Löschen Sie den gesamten JavaScript-Code, den Sie derzeit in Ihrer HTML-Datei haben, mit Ausnahme der ersten beiden Zeilen, und fügen Sie darunter Folgendes hinzu. Die `draw()`-Funktion wird innerhalb von `setInterval` alle 10 Millisekunden ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden aufgerufen, für immer oder bis wir sie stoppen. Lassen Sie uns jetzt den Ball zeichnen — fügen Sie das Folgende innerhalb Ihrer `draw()`-Funktion hinzu:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Versuchen Sie nun Ihren aktualisierten Code — der Ball sollte bei jedem Frame neu gezeichnet werden.

## Ihn in Bewegung setzen

Derzeit bemerken Sie möglicherweise nicht, dass der Ball ständig neu gezeichnet wird, da er sich nicht bewegt. Ändern wir das. Anstatt einer fest codierten Position bei (50,50) definieren wir zuerst einen Ausgangspunkt im unteren mittleren Teil der Canvas in Variablen namens `x` und `y` und verwenden diese dann, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zunächst die folgenden zwei Zeilen oberhalb Ihrer `draw()`-Funktion hinzu, um `x` und `y` zu definieren:

```js
let x = canvas.width / 2;
let y = canvas.height - 30;
```

Aktualisieren Sie als Nächstes die `draw()`-Funktion, um die x- und y-Variablen in der {{domxref("CanvasRenderingContext2D.arc()", "arc()")}}-Methode zu verwenden, wie in der folgenden hervorgehobenen Zeile gezeigt:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Jetzt kommt der wichtige Teil: Wir wollen nach jedem gezeichneten Frame einen kleinen Wert zu `x` und `y` hinzufügen, um den Eindruck zu erwecken, dass sich der Ball bewegt. Definieren wir diese kleinen Werte als `dx` und `dy` und setzen ihre Werte auf 2 bzw. -2. Fügen Sie folgendes unterhalb Ihrer x- und y-Variablendefinitionen hinzu:

```js
let dx = 2;
let dy = -2;
```

Als letztes müssen `x` und `y` in jedem Frame mit unseren `dx`- und `dy`-Variablen aktualisiert werden, sodass der Ball in jeder Aktualisierung an der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen, wie unten angegeben, Ihrer `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code erneut und probieren Sie es in Ihrem Browser aus. Dies funktioniert gut, obwohl es scheint, dass der Ball eine Spur hinterlässt:

![Eine blaue Linie, die angibt, wo der Ball gewesen ist](ball-trail.png)

## Das Canvas vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir bei jedem Frame einen neuen Kreis malen, ohne den vorherigen zu entfernen. Keine Sorge, denn es gibt eine Methode zum Löschen von Canvas-Inhalten: {{domxref("CanvasRenderingContext2D.clearRect()", "clearRect()")}}. Diese Methode nimmt vier Parameter: die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks und die x- und y-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von allen zuvor dort gemalten Inhalten befreit.

Fügen Sie die folgende neue, hervorgehobene Zeile zur `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code und probieren Sie es erneut aus. Diesmal werden Sie sehen, dass der Ball sich ohne eine Spur bewegt. Alle 10 Millisekunden wird das Canvas gelöscht, der blaue Kreis (unser Ball) an einer vorgegebenen Position gezeichnet und die `x`- und `y`-Werte für den nächsten Frame aktualisiert.

## Unseren Code aufräumen

Wir werden in den nächsten Artikeln mehr und mehr Befehle zur `draw()`-Funktion hinzufügen, daher ist es gut, sie so minimal und sauber wie möglich zu halten. Beginnen wir damit, den Ball-Zeichencode in eine separate Funktion zu verschieben.

Ersetzen Sie die bestehende draw()-Funktion mit den folgenden zwei Funktionen:

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

## Ihren Code vergleichen

Sie können den fertigen Code für diesen Artikel im untenstehenden Live-Demo prüfen und damit spielen, um besser zu verstehen, wie er funktioniert.

> [!NOTE]
> Live-Beispiele laufen automatisch auf diesen Seiten, daher haben wir einen "Spiel starten"-Button hinzugefügt.
> Dies ist nützlich, um zu vermeiden, dass Spiele automatisch starten und zu oft Warnungen oder andere Ereignisse auslösen.

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
> Versuchen Sie, die Geschwindigkeit des sich bewegenden Balls oder die Richtung, in die er sich bewegt, zu ändern.

## Nächste Schritte

Wir haben unseren Ball gezeichnet und ihn in Bewegung gesetzt, aber er verschwindet weiterhin vom Rand der Canvas. Im dritten Kapitel werden wir erkunden, wie man ihn [von den Wänden abprallen lässt](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
