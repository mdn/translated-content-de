---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html) finden.

Sie wissen bereits, wie man einen Ball zeichnet, indem Sie den vorherigen Artikel durchgearbeitet haben. Lassen Sie ihn uns nun bewegen. Technisch werden wir den Ball auf den Bildschirm malen, ihn löschen und dann leicht versetzt in jeder Bildfolge erneut malen, um den Eindruck von Bewegung zu erzeugen — genau wie im Film.

## Eine Zeichenschleife definieren

Um das Zeichnen auf der Leinwand bei jedem Frame ständig zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder mit einem anderen Satz von Variablenwerten ausgeführt wird, um Sprite-Positionen zu ändern, etc. Sie können eine Funktion wiederholt mit einer JavaScript-Zeitfunktion ausführen.
Später im Tutorial werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber wir beginnen zunächst mit [`setInterval()`](/de/docs/Web/API/Window/setInterval), um eine Schleifenlogik zu erstellen.

Löschen Sie zu Beginn den gesamten JavaScript-Code in Ihrer HTML-Datei, außer den ersten beiden Zeilen, und fügen Sie den folgenden Code darunter ein. Die `draw()` Funktion wird innerhalb von `setInterval` alle 10 Millisekunden ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der endlosen Natur von `setInterval` wird die `draw()` Funktion alle 10 Millisekunden für immer oder bis wir sie stoppen, aufgerufen. Malen wir nun den Ball – fügen Sie das folgende in Ihre `draw()` Funktion ein:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Probieren Sie nun Ihren aktualisierten Code aus — der Ball sollte in jedem Frame neu gemalt werden.

## Den Ball in Bewegung setzen

Derzeit werden Sie nicht bemerken, dass der Ball ständig neu gemalt wird, da er sich nicht bewegt. Ändern wir das. Anstatt einer festcodierten Position bei (50,50) definieren wir einen Startpunkt im unteren mittleren Bereich des Canvas in Variablen namens `x` und `y` und verwenden diese dann, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zuerst die folgenden zwei Zeilen oberhalb Ihrer `draw()` Funktion hinzu, um `x` und `y` zu definieren:

```js
let x = canvas.width / 2;
let y = canvas.height - 30;
```

Aktualisieren Sie als nächstes die `draw()` Funktion, um die x- und y-Variablen in der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode zu verwenden, wie in der folgenden hervorgehobenen Zeile gezeigt:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Nun kommt der wichtige Teil: Wir möchten nach jedem gezeichneten Frame einen kleinen Wert zu `x` und `y` hinzufügen, um den Anschein zu erwecken, dass der Ball sich bewegt. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte jeweils auf 2 und -2 setzen. Fügen Sie das Folgende unter Ihren x- und y-Variablendefinitionen hinzu:

```js
let dx = 2;
let dy = -2;
```

Das letzte, was zu tun ist, ist `x` und `y` bei jedem Frame mit unseren `dx` und `dy` Variablen zu aktualisieren, sodass der Ball bei jeder Aktualisierung an der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen, wie unten angegeben, zu Ihrer `draw()` Funktion hinzu:

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

Speichern Sie erneut Ihren Code und probieren Sie ihn in Ihrem Browser aus. Dies funktioniert soweit, obwohl es den Anschein hat, dass der Ball eine Spur hinterlässt:

![Eine blaue Linie, die anzeigt, wo der Ball gewesen ist](ball-trail.png)

## Die Leinwand vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir bei jedem Frame einen neuen Kreis malen, ohne den vorherigen zu entfernen. Keine Sorge, es gibt eine Methode, um Canvas-Inhalt zu löschen: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode benötigt vier Parameter: die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks und die x- und y-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von jeglichem zuvor dort gemalten Inhalt befreit.

Fügen Sie die folgende hervorgehobene neue Zeile zur `draw()` Funktion hinzu:

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

Speichern Sie Ihren Code und versuchen Sie es erneut. Dieses Mal werden Sie sehen, dass sich der Ball ohne Spur bewegt. Alle 10 Millisekunden wird die Leinwand gelöscht, der blaue Kreis (unser Ball) wird an einer gegebenen Position gezeichnet und die `x` und `y` Werte werden für den nächsten Frame aktualisiert.

## Unseren Code aufräumen

Wir werden in den nächsten Artikeln immer mehr Befehle zur `draw()` Funktion hinzufügen. Daher ist es gut, sie so minimal und sauber wie möglich zu halten. Fangen wir damit an, den Ballzeichencode in eine separate Funktion zu verschieben.

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

## Vergleichen Sie Ihren Code

Sie können den fertiggestellten Code für diesen Artikel im untenstehenden Live-Demo überprüfen und damit herumspielen, um besser zu verstehen, wie er funktioniert.

> [!NOTE]
> Live-Beispiele werden auf diesen Seiten automatisch ausgeführt, daher haben wir einen "Spiel starten"-Button hinzugefügt.
> Dies ist nützlich, um zu vermeiden, dass Spiele automatisch starten und Warnungen oder andere Ereignisse zu oft ausgelöst werden.

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
> Versuchen Sie, die Geschwindigkeit des sich bewegenden Balls oder die Richtung, in die er sich bewegt, zu ändern.

## Nächste Schritte

Wir haben unseren Ball gezeichnet und ihn in Bewegung gesetzt, aber er verschwindet immer wieder am Rand der Leinwand. Im dritten Kapitel werden wir erkunden, wie man ihn [von den Wänden abprallen lassen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls) kann.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
