---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **zweite Schritt** von insgesamt 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Sie wissen bereits, wie man einen Ball zeichnet, ausgehend vom vorherigen Artikel. Lassen Sie uns nun den Ball bewegen. Technisch gesehen werden wir den Ball auf den Bildschirm malen, ihn löschen und dann jedes Mal an einer leicht anderen Position neu malen, um den Eindruck von Bewegung zu erzeugen — genau wie Bewegung in Filmen funktioniert.

## Definieren einer Zeichenschleife

Um die Leinwandzeichnung ständig in jedem Frame zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder läuft, jedes Mal mit einem anderen Satz von Variablenwerten, um beispielsweise Sprite-Positionen zu ändern. Sie können eine Funktion mithilfe einer JavaScript-Timing-Funktion immer wieder ausführen.
Später im Tutorial werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber wir beginnen zunächst mit [`setInterval()`](/de/docs/Web/API/Window/setInterval), um eine Schleifenlogik zu erstellen.

Löschen Sie allen JavaScript-Code, den Sie derzeit in Ihrer HTML-Datei haben, mit Ausnahme der ersten beiden Zeilen, und fügen Sie unten Folgendes hinzu. Die `draw()`-Funktion wird innerhalb von `setInterval` alle 10 Millisekunden ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden für immer aufgerufen, oder bis wir sie stoppen. Lassen Sie uns nun den Ball zeichnen — fügen Sie Folgendes in Ihre `draw()`-Funktion ein:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Probieren Sie jetzt Ihren aktualisierten Code aus — der Ball sollte in jedem Frame neu gezeichnet werden.

## Den Ball bewegen

Derzeit werden Sie nicht bemerken, dass der Ball ständig neu gezeichnet wird, da er sich nicht bewegt. Lassen Sie uns das ändern. Statt einer fest codierten Position bei (50,50) definieren wir einen Startpunkt am unteren mittleren Teil der Leinwand in Variablen namens `x` und `y` und verwenden diese, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zuerst die folgenden beiden Zeilen oberhalb Ihrer `draw()`-Funktion hinzu, um `x` und `y` zu definieren:

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

Nun kommt der wichtige Teil: Wir möchten nach jedem gezeichneten Frame einen kleinen Wert zu `x` und `y` hinzufügen, um den Anschein zu erwecken, dass sich der Ball bewegt. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte jeweils auf 2 und -2 setzen. Fügen Sie das Folgende unterhalb Ihrer Definitionen der x- und y-Variablen hinzu:

```js
let dx = 2;
let dy = -2;
```

Das Letzte, was zu tun ist, ist `x` und `y` in jedem Frame mit unseren `dx` und `dy` Variablen zu aktualisieren, damit der Ball bei jeder Aktualisierung in der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen, wie unten angegeben, zu Ihrer `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code erneut und versuchen Sie es in Ihrem Browser. Dies funktioniert soweit, obwohl es scheint, dass der Ball eine Spur hinter sich herzieht:

![Eine blaue Linie, die anzeigt, wo der Ball gewesen ist](ball-trail.png)

## Die Leinwand vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir in jedem Frame einen neuen Kreis malen, ohne den vorherigen zu entfernen. Keine Sorge, denn es gibt eine Methode, um den Inhalt der Leinwand zu löschen: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode benötigt vier Parameter: die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks sowie die x- und y-Koordinaten der unteren rechten Ecke des Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von allen zuvor dort gemalten Inhalten bereinigt.

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

Speichern Sie Ihren Code und versuchen Sie es erneut und dieses Mal werden Sie sehen, dass sich der Ball ohne Spur bewegt. Alle 10 Millisekunden wird die Leinwand geleert, der blaue Kreis (unser Ball) wird an einer bestimmten Position gezeichnet und die `x`- und `y`-Werte werden für den nächsten Frame aktualisiert.

## Unseren Code aufräumen

Wir werden in den nächsten Artikeln mehr und mehr Befehle zur `draw()`-Funktion hinzufügen, daher ist es gut, sie so minimal und sauber wie möglich zu halten. Beginnen wir damit, den Code zum Zeichnen des Balls in eine separate Funktion zu verschieben.

Ersetzen Sie die vorhandene draw()-Funktion durch die folgenden zwei Funktionen:

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

Sie können den fertigen Code für diesen Artikel im Live-Demo unten überprüfen und damit experimentieren, um besser zu verstehen, wie er funktioniert.

> [!NOTE]
> Live-Beispiele werden auf diesen Seiten automatisch ausgeführt, daher haben wir eine "Spiel starten"-Schaltfläche hinzugefügt.
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

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 350)}}

> [!NOTE]
> Versuchen Sie, die Geschwindigkeit des bewegenden Balls oder die Richtung zu ändern, in die er sich bewegt.

## Nächste Schritte

Wir haben unseren Ball gezeichnet und ihn zum Bewegen gebracht, aber er verschwindet ständig am Rand der Leinwand. Im dritten Kapitel werden wir erkunden, wie man ihn [von den Wänden abprallen lässt](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
