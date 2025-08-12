---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. Schritt** von 10 des [Gamedev Canvas Leitfadens](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html) finden.

Sie wissen bereits, wie man einen Ball zeichnet, da Sie den vorherigen Artikel durchgearbeitet haben. Nun lassen Sie ihn sich bewegen. Technisch gesehen werden wir den Ball auf dem Bildschirm zeichnen, ihn löschen und dann in einer leicht anderen Position jedes Bild neu zeichnen, um den Eindruck von Bewegung zu erzeugen — genauso wie Bewegung in Filmen funktioniert.

## Eine Zeichenschleife definieren

Um die Canvas-Zeichnung in jedem Frame ständig zu aktualisieren, müssen wir eine Zeichenfunktion definieren, die immer wieder ausgeführt wird, wobei jedes Mal ein anderer Satz von Variablenwerten verwendet wird, um Sprite-Positionen usw. zu ändern. Sie können eine Funktion immer wieder mit einer JavaScript-Zeitfunktion ausführen.
Später in der Anleitung werden wir sehen, wie [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) beim Zeichnen hilft, aber zunächst beginnen wir mit [`setInterval()`](/de/docs/Web/API/Window/setInterval), um eine Schleifenlogik zu erstellen.

Löschen Sie allen JavaScript-Code, den Sie derzeit in Ihrer HTML-Datei haben, außer den ersten beiden Zeilen, und fügen Sie folgendes darunter ein. Die `draw()`-Funktion wird innerhalb `setInterval` alle 10 Millisekunden ausgeführt:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

Dank der unendlichen Natur von `setInterval` wird die `draw()`-Funktion alle 10 Millisekunden für immer aufgerufen, oder bis wir sie stoppen. Jetzt zeichnen wir den Ball — fügen Sie das Folgende innerhalb Ihrer `draw()`-Funktion hinzu:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Versuchen Sie jetzt Ihren aktualisierten Code — der Ball sollte in jedem Frame neu gezeichnet werden.

## Ihn in Bewegung setzen

Sie werden nicht bemerken, dass der Ball momentan ständig neu gezeichnet wird, da er sich nicht bewegt. Ändern wir das. Anstatt einer fest codierten Position bei (50,50) definieren wir einen Startpunkt unten in der Mitte des Canvas in Variablen namens `x` und `y` und verwenden diese dann, um die Position zu definieren, an der der Kreis gezeichnet wird.

Fügen Sie zunächst die folgenden zwei Zeilen über Ihrer `draw()`-Funktion ein, um `x` und `y` zu definieren:

```js
let x = canvas.width / 2;
let y = canvas.height - 30;
```

Aktualisieren Sie anschließend die `draw()`-Funktion, um die x- und y-Variablen in der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode zu verwenden, wie in der folgenden hervorgehobenen Zeile gezeigt:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Jetzt kommt der wichtige Teil: Wir möchten nach jedem gezeichneten Frame einen kleinen Wert zu `x` und `y` hinzufügen, um den Eindruck zu erwecken, dass der Ball sich bewegt. Lassen Sie uns diese kleinen Werte als `dx` und `dy` definieren und ihre Werte auf 2 und -2 setzen. Fügen Sie das Folgende unter Ihren x- und y-Variablendefinitionen hinzu:

```js
let dx = 2;
let dy = -2;
```

Das Letzte, was zu tun ist, ist `x` und `y` in jedem Frame mit unseren `dx`- und `dy`-Variablen zu aktualisieren, damit der Ball bei jedem Update an der neuen Position gezeichnet wird. Fügen Sie die folgenden zwei neuen Zeilen, die unten angegeben sind, zu Ihrer `draw()`-Funktion hinzu:

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

Speichern Sie Ihren Code erneut und versuchen Sie es in Ihrem Browser. Dies funktioniert, obwohl es scheint, dass der Ball eine Spur hinterlässt:

![Eine blaue Linie, die anzeigt, wo der Ball war](ball-trail.png)

## Die Leinwand vor jedem Frame löschen

Der Ball hinterlässt eine Spur, weil wir in jedem Frame einen neuen Kreis zeichnen, ohne den vorherigen zu entfernen. Keine Sorge, denn es gibt eine Methode zum Löschen von Canvas-Inhalten: [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect). Diese Methode benötigt vier Parameter: die x- und y-Koordinaten der oberen linken Ecke eines Rechtecks und die x- und y-Koordinaten der unteren rechten Ecke eines Rechtecks. Der gesamte von diesem Rechteck abgedeckte Bereich wird von allen zuvor dort gezeichneten Inhalten gereinigt.

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

Speichern Sie Ihren Code und versuchen Sie es erneut, und dieses Mal werden Sie sehen, dass sich der Ball ohne Spur bewegt. Alle 10 Millisekunden wird die Leinwand gelöscht, der blaue Kreis (unser Ball) wird an einer gegebenen Position gezeichnet und die `x`- und `y`-Werte werden für den nächsten Frame aktualisiert.

## Unseren Code bereinigen

Wir werden in den nächsten Artikeln immer mehr Befehle zur `draw()`-Funktion hinzufügen, daher ist es gut, sie so minimal und sauber wie möglich zu halten. Beginnen wir damit, den Code zum Zeichnen des Balls in eine separate Funktion zu verschieben.

Ersetzen Sie die vorhandene `draw()`-Funktion durch die folgenden zwei Funktionen:

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
> Live-Beispiele werden auf diesen Seiten automatisch ausgeführt, daher haben wir einen "Spiel starten"-Button hinzugefügt.
> Dies ist nützlich, um zu vermeiden, dass Spiele automatisch starten und zu oft Warnungen oder andere Ereignisse auslösen.

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Start game</button>
```

```css
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

Wir haben unseren Ball gezeichnet und ihn in Bewegung gebracht, aber er verschwindet immer wieder am Rand der Leinwand. Im dritten Kapitel werden wir untersuchen, wie man es macht, dass er von den Wänden [abprallt](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
