---
title: Move the ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. Schritt** von insgesamt 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Sie wissen bereits, wie man einen Ball zeichnet, da Sie den vorherigen Artikel durchgearbeitet haben. Lassen Sie uns nun den Ball bewegen. Technisch werden wir den Ball auf dem Bildschirm zeichnen, ihn löschen und dann in jeder Frame in einer leicht veränderten Position erneut zeichnen, um den Eindruck von Bewegung zu erzeugen — genau so, wie Bewegung in Filmen funktioniert.

## Definieren einer Zeichenschleife

Um das Canvas-Zeichnen in jedem Frame ständig zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder ausgeführt wird, jedes Mal mit einem anderen Satz von Variablenwerten, um Sprite-Positionen zu ändern usw. Sie können eine Funktion immer wieder mit einer zeitgesteuerten JavaScript-Funktion ausführen lassen. Später im Tutorial werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber wir beginnen zunächst mit [`setInterval()`](/de/docs/Web/API/Window/setInterval), um einige Schleifenlogik zu erstellen.

Löschen Sie den gesamten JavaScript-Code, den Sie derzeit in Ihrer HTML-Datei haben, mit Ausnahme der ersten beiden Zeilen, und fügen Sie diesen unten hinzu. Die `draw()`-Funktion wird alle 10 Millisekunden innerhalb von `setInterval` ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden aufgerufen, bis wir sie stoppen. Nun, lassen Sie uns den Ball zeichnen — fügen Sie das Folgende innerhalb Ihrer `draw()`-Funktion hinzu:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Testen Sie jetzt Ihren aktualisierten Code — der Ball sollte in jedem Frame neu gezeichnet werden.

## Ihn beweglich machen

Momentan werden Sie nicht bemerken, dass der Ball ständig neu gezeichnet wird, da er sich nicht bewegt. Lassen Sie uns das ändern. Anstatt einer fest codierten Position auf (50,50) definieren wir einen Ausgangspunkt im unteren mittleren Teil des Canvas in Variablen namens `x` und `y` und verwenden diese, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zuerst die folgenden zwei Zeilen oberhalb Ihrer `draw()`-Funktion hinzu, um `x` und `y` zu definieren:

```js
let x = canvas.width / 2;
let y = canvas.height - 30;
```

Als Nächstes aktualisieren Sie die `draw()`-Funktion, um die x- und y-Variablen in der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode zu verwenden, wie in der folgenden hervorgehobenen Zeile gezeigt:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Jetzt kommt der wichtige Teil: Wir möchten einen kleinen Wert zu `x` und `y` nach jedem Frame hinzufügen, damit es scheint, als würde sich der Ball bewegen. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte auf 2 und -2 setzen. Fügen Sie das Folgende unter Ihren x- und y-Variablen-Definitionen hinzu:

```js
let dx = 2;
let dy = -2;
```

Das Letzte, was zu tun ist, `x` und `y` mit unseren `dx`- und `dy`-Variablen in jedem Frame zu aktualisieren, sodass der Ball bei jedem Update in der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen zu Ihrer `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code erneut und probieren Sie es in Ihrem Browser aus. Das funktioniert ganz gut, obwohl es den Anschein hat, dass der Ball eine Spur hinter sich lässt:

![Eine blaue Linie, die anzeigt, wo der Ball gewesen ist](ball-trail.png)

## Das Canvas vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir in jedem Frame einen neuen Kreis zeichnen, ohne den vorherigen zu entfernen. Keine Sorge, denn es gibt eine Methode, um Canvas-Inhalte zu löschen: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode benötigt vier Parameter: Die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks sowie die x- und y-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von jeglichem zuvor dort gezeichneten Inhalt gelöscht.

Fügen Sie die folgende hervorgehobene neue Zeile zur `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code und versuchen Sie es erneut. Dieses Mal sehen Sie, dass sich der Ball ohne Spur bewegt. Alle 10 Millisekunden wird das Canvas gelöscht, der blaue Kreis (unser Ball) wird an einer bestimmten Position gezeichnet und die `x`- und `y`-Werte werden für das nächste Frame aktualisiert.

## Den Code aufräumen

Wir werden noch mehr Befehle zur `draw()`-Funktion in den nächsten Artikeln hinzufügen, also ist es gut, sie so minimal und sauber wie möglich zu halten. Lassen Sie uns anfangen, den Code zum Zeichnen des Balls in eine separate Funktion zu verschieben.

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

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diesen Artikel im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert.

> [!NOTE]
> Live-Beispiele laufen automatisch auf diesen Seiten, also haben wir einen "Spiel starten"-Button hinzugefügt.
> Dies ist nützlich, um zu vermeiden, dass Spiele automatisch starten und zu häufig Warnungen oder andere Ereignisse auslösen.

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
> Versuchen Sie, die Geschwindigkeit des bewegten Balls oder die Richtung, in die er sich bewegt, zu ändern.

## Nächste Schritte

Wir haben unseren Ball gezeichnet und ihn in Bewegung gebracht, aber er verschwindet immer wieder vom Rand des Canvas. Im dritten Kapitel werden wir erforschen, wie man ihn [von den Wänden abprallen lässt](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
