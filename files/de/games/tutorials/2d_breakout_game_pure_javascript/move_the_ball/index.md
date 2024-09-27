---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, bei [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Sie wissen bereits, wie man einen Ball zeichnet, nachdem Sie den vorherigen Artikel bearbeitet haben. Lassen Sie uns nun den Ball bewegen. Technisch gesehen werden wir den Ball auf dem Bildschirm zeichnen, ihn löschen und dann bei jedem Frame in einer etwas anderen Position neu zeichnen, um den Eindruck einer Bewegung zu erzeugen — genau wie die Bewegung in Filmen funktioniert.

## Definieren einer Zeichenschleife

Um die Darstellung auf der Leinwand in jedem Frame ständig zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder mit unterschiedlichen Variablenwerten ausgeführt wird, um Sprite-Positionen usw. zu ändern. Sie können eine Funktion mit einer JavaScript-Timer-Funktion immer wieder ausführen.
Später im Tutorial werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber wir beginnen zunächst mit [`setInterval()`](/de/docs/Web/API/SetInterval), um eine Schleifenlogik zu erstellen.

Löschen Sie alle JavaScript-Inhalte, die Sie derzeit in Ihrer HTML-Datei haben, bis auf die ersten zwei Zeilen, und fügen Sie die folgenden darunter hinzu. Die `draw()`-Funktion wird alle 10 Millisekunden innerhalb von `setInterval` ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden für immer aufgerufen, oder bis wir sie stoppen. Nun lassen Sie uns den Ball zeichnen — fügen Sie das Folgende in Ihre `draw()`-Funktion ein:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Versuchen Sie jetzt Ihren aktualisierten Code — der Ball sollte in jedem Frame neu gezeichnet werden.

## Den Ball in Bewegung setzen

Im Moment wird Ihnen nicht auffallen, dass der Ball ständig neu gezeichnet wird, da er sich nicht bewegt. Ändern wir das. Anstatt einer fest codierten Position bei (50,50) definieren wir zuerst einen Startpunkt am unteren mittleren Teil der Leinwand in Variablen namens `x` und `y` und verwenden diese dann, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zuerst die folgenden zwei Zeilen über Ihrer `draw()`-Funktion hinzu, um `x` und `y` zu definieren:

```js
let x = canvas.width / 2;
let y = canvas.height - 30;
```

Aktualisieren Sie als nächstes die `draw()`-Funktion, um die x- und y-Variablen in der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode zu verwenden, wie in der folgenden hervorgehobenen Zeile gezeigt:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Jetzt kommt der wichtige Teil: Wir möchten jedem Frame nach dem Zeichnen einen kleinen Wert zu `x` und `y` hinzufügen, damit es so aussieht, als bewege sich der Ball. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte jeweils auf 2 und -2 setzen. Fügen Sie das folgende unterhalb Ihrer Definitionen der x- und y-Variablen hinzu:

```js
let dx = 2;
let dy = -2;
```

Das Letzte, was zu tun ist, ist `x` und `y` bei jedem Frame mit unseren `dx` und `dy` Variablen zu aktualisieren, damit der Ball bei jedem Update in der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen, die unten angegeben sind, in Ihre `draw()`-Funktion ein:

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

Speichern Sie Ihren Code erneut und probieren Sie ihn in Ihrem Browser aus. Dies funktioniert in Ordnung, obwohl es scheint, dass der Ball eine Spur hinter sich lässt:

![Eine blaue Linie zeigt an, wo der Ball gewesen ist](ball-trail.png)

## Die Leinwand vor jedem Frame bereinigen

Der Ball hinterlässt eine Spur, weil wir in jedem Frame einen neuen Kreis zeichnen, ohne den vorherigen zu entfernen. Keine Sorge, denn es gibt eine Methode zum Löschen des Canvas-Inhalts: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode nimmt vier Parameter an: die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks sowie die x- und y-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von jeglichem zuvor dort gemalten Inhalt befreit.

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

Speichern Sie Ihren Code und probieren Sie es erneut, und dieses Mal werden Sie sehen, dass sich der Ball ohne eine Spur bewegt. Alle 10 Millisekunden wird der Canvas geleert, der blaue Kreis (unser Ball) wird an einer bestimmten Position gezeichnet und die `x`- und `y`-Werte werden für den nächsten Frame aktualisiert.

## Unseren Code bereinigen

Wir werden in den nächsten Artikeln immer mehr Befehle zur `draw()`-Funktion hinzufügen, daher ist es gut, sie so minimal und sauber wie möglich zu halten. Beginnen wir damit, den Zeichencode für den Ball in eine separate Funktion zu verschieben.

Ersetzen Sie die bestehende `draw()`-Funktion durch die folgenden zwei Funktionen:

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
> Live-Beispiele laufen automatisch auf diesen Seiten, daher haben wir einen "Spiel starten"-Button hinzugefügt.
> Dies ist nützlich, um zu verhindern, dass Spiele automatisch starten und zu oft Warnungen oder andere Ereignisse auslösen.

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

Wir haben unseren Ball gezeichnet und ihn in Bewegung gebracht, aber er verschwindet immer wieder vom Rand der Leinwand. Im dritten Kapitel werden wir untersuchen, wie wir ihn dazu bringen, [von den Wänden abzuprallen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
