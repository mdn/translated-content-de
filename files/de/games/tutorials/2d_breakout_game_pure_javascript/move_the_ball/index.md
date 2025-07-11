---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Sie wissen bereits, wie man einen Ball zeichnet, da Sie den vorherigen Artikel durchgearbeitet haben, also lassen Sie uns ihn jetzt bewegen lassen. Technisch gesehen werden wir den Ball auf dem Bildschirm zeichnen, ihn löschen und dann in jedem Frame an einer leicht veränderten Position erneut zeichnen, um den Eindruck von Bewegung zu erzeugen — genau so, wie Bewegung im Film funktioniert.

## Definieren einer Zeichen-Schleife

Um die Canvas-Zeichnung in jedem Frame ständig zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder, mit einem anderen Satz von Variablenwerten, um die Sprite-Positionen etc. zu ändern, ausgeführt wird. Sie können eine Funktion immer wieder mit einer JavaScript-Timing-Funktion ausführen.
Später im Tutorial werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber wir beginnen zuerst mit [`setInterval()`](/de/docs/Web/API/Window/setInterval), um eine Schleifenlogik zu erstellen.

Löschen Sie alle JavaScript-Zeilen, die Sie derzeit in Ihrer HTML-Datei haben, außer den ersten beiden Zeilen, und fügen Sie die folgenden Zeilen darunter ein. Die `draw()`-Funktion wird innerhalb von `setInterval` alle 10 Millisekunden ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden für immer aufgerufen oder bis wir sie stoppen. Jetzt zeichnen wir den Ball — fügen Sie das folgende innerhalb Ihrer `draw()`-Funktion ein:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Probieren Sie jetzt Ihren aktualisierten Code aus — der Ball sollte in jedem Frame neu gezeichnet werden.

## Bewegung ermöglichen

Im Moment werden Sie nicht bemerken, dass der Ball ständig neu gezeichnet wird, da er sich nicht bewegt. Lassen Sie uns das ändern. Anstatt einer hartcodierten Position bei (50,50) definieren wir einen Startpunkt in der unteren Mitte des Canvas in Variablen namens `x` und `y` und verwenden diese, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zuerst die folgenden zwei Zeilen über Ihrer `draw()`-Funktion ein, um `x` und `y` zu definieren:

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

Jetzt kommt der wichtige Teil: Wir möchten nach jedem gezeichneten Frame einen kleinen Wert zu `x` und `y` hinzufügen, um den Eindruck zu erwecken, dass sich der Ball bewegt. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte auf 2 und -2 setzen. Fügen Sie das folgende unterhalb Ihrer x- und y-Variablendefinitionen hinzu:

```js
let dx = 2;
let dy = -2;
```

Das Letzte, was zu tun ist, ist `x` und `y` in jedem Frame mit unseren `dx` und `dy`-Variablen zu aktualisieren, damit der Ball in der neuen Position bei jedem Update gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen wie unten angezeigt Ihrer `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code erneut und testen Sie ihn in Ihrem Browser. Dies funktioniert gut, obwohl es scheint, dass der Ball eine Spur hinter sich lässt:

![Eine blaue Linie, die anzeigt, wo sich der Ball befand](ball-trail.png)

## Canvas vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir in jedem Frame einen neuen Kreis malen, ohne den vorherigen zu entfernen. Keine Sorge, es gibt eine Methode, um den Canvas-Inhalt zu löschen: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode benötigt vier Parameter: die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks und die x- und y-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte Bereich, der von diesem Rechteck abgedeckt wird, wird von jeglichem vorher dort gemalten Inhalt befreit.

Fügen Sie die folgende hervorgehobene neue Zeile der `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code und probieren Sie es erneut, und dieses Mal werden Sie sehen, dass sich der Ball ohne Spur bewegt. Alle 10 Millisekunden wird das Canvas gelöscht, der blaue Kreis (unser Ball) wird an einer gegebenen Position gezeichnet und die `x`- und `y`-Werte werden für den nächsten Frame aktualisiert.

## Bereinigen unseres Codes

In den nächsten Artikeln werden wir der `draw()`-Funktion immer mehr Befehle hinzufügen, daher ist es gut, sie so minimal und sauber wie möglich zu halten. Lassen Sie uns beginnen, indem wir den Ball-Zeichencode in eine separate Funktion verschieben.

Ersetzen Sie die bestehende draw()-Funktion durch die folgenden zwei Funktionen:

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
> Live-Beispiele werden automatisch auf diesen Seiten ausgeführt, daher haben wir einen "Spiel starten"-Button hinzugefügt.
> Dies ist nützlich, um zu vermeiden, dass Spiele automatisch starten und häufig Warnungen oder andere Ereignisse auslösen.

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

Wir haben unseren Ball gezeichnet und in Bewegung gebracht, aber er verschwindet immer wieder vom Rand des Canvas. Im dritten Kapitel werden wir erkunden, wie man ihn [an den Wänden abprallen lässt](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
