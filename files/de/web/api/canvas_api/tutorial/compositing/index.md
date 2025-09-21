---
title: Compositing und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: b4d7275e992575d765bd1f504c28c0a64e1d0632
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer übereinander gezeichnet. Dies ist für die meisten Situationen mehr als ausreichend, schränkt jedoch die Reihenfolge ein, in der zusammengesetzte Formen aufgebaut werden. Wir können dieses Verhalten jedoch ändern, indem wir die Eigenschaft `globalCompositeOperation` festlegen. Zusätzlich ermöglicht uns die Eigenschaft `clip`, unerwünschte Teile von Formen auszublenden.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern es auch verwenden, um bestimmte Bereiche abzudecken, Abschnitte der Leinwand zu löschen (nicht auf Rechtecke wie die Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) beschränkt) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Damit wird der Typ der Kompositionsoperation festgelegt, der beim Zeichnen neuer Formen angewendet werden soll, wobei `type` eine Zeichenkette ist, die angibt, welche der zwölf Kompositionsoperationen verwendet werden soll.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Canvas-Form, aber er fungiert als Maske, um unerwünschte Teile von Formen auszublenden. Dies wird im Bild unten veranschaulicht. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades liegt, wird nicht auf der Leinwand gezeichnet.

![Eine Leinwand mit einem in Rot umrandeten Stern. Das Innere des Sterns ist transparent, wie durch die Gitterquadrate im Inneren des Sterns deutlich sichtbar wird, während die Gitterquadrate außerhalb des Sterns verschwommen sind.](canvas_clipping_path.png)

Wenn wir Clipping-Pfade mit der oben gesehenen Eigenschaft `globalCompositeOperation` vergleichen, sehen wir zwei Kompositionsmodi, die mehr oder weniger den gleichen Effekt in `source-in` und `source-atop` erzielen. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade niemals tatsächlich auf die Leinwand gezeichnet werden und der Clipping-Pfad niemals durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal für das Zeichnen mehrerer Formen in einem eingeschränkten Bereich.

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) habe ich nur die Methoden `stroke()` und `fill()` erwähnt, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, die `clip()` heißt.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuell aufgebauten Pfad in den aktuellen Clipping-Pfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und ihn in einen Clipping-Pfad umzuwandeln, anstatt den Pfad zu umranden oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genau so groß ist wie die Leinwand selbst. Mit anderen Worten: Es findet kein Clipping statt.

### Ein `clip`-Beispiel

In diesem Beispiel verwenden wir einen kreisförmigen Clipping-Pfad, um das Zeichnen einer Menge zufälliger Sterne auf einen bestimmten Bereich zu beschränken.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // Draw background
  const linGrad = ctx.createLinearGradient(0, -75, 0, 75);
  linGrad.addColorStop(0, "#232256");
  linGrad.addColorStop(1, "#143778");

  ctx.fillStyle = linGrad;
  ctx.fillRect(-75, -75, 150, 150);

  generateStars(ctx);
}

function generateStars(ctx) {
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

In den ersten Zeilen des Codes zeichnen wir ein schwarzes Rechteck in der Größe der Leinwand als Hintergrund und verschieben dann den Ursprung in die Mitte. Als Nächstes erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind ebenfalls Teil des Canvas-Speicherzustands. Wenn wir den ursprünglichen Clipping-Pfad beibehalten wollten, hätten wir den Canvas-Zustand vor Erstellung des neuen Pfades speichern können.

Alles, was nach Erstellung des Clipping-Pfades gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies wird deutlich im als Nächstes gezeichneten linearen Verlauf. Danach wird eine Reihe von 50 zufällig positionierten und skalierten Sternen gezeichnet, unter Verwendung der benutzerdefinierten Funktion `drawStar()`. Auch hier erscheinen die Sterne nur innerhalb des definierten Clipping-Pfades.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Umgekehrter Clipping-Pfad

Es gibt keine umgekehrte Clipping-Maske. Wir können jedoch eine Maske definieren, die das gesamte Canvas mit einem Rechteck füllt und ein Loch darin hat, für die Teile, die Sie überspringen möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in die entgegengesetzte Richtung der äußeren Form zeichnen. Im folgenden Beispiel stanzen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichenrichtung, verhält sich jedoch so, als ob es im Uhrzeigersinn gezeichnet wurde. Der Bogenbefehl geht standardmäßig ebenfalls im Uhrzeigersinn, aber wir können seine Richtung mit dem letzten Argument ändern.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.translate(75, 75);

  // Clipping path
  ctx.beginPath();
  ctx.rect(-75, -75, 150, 150); // Outer rectangle
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true); // Hole anticlockwise
  ctx.clip();

  // Draw background
  const linGrad = ctx.createLinearGradient(0, -75, 0, 75);
  linGrad.addColorStop(0, "#232256");
  linGrad.addColorStop(1, "#143778");

  ctx.fillStyle = linGrad;
  ctx.fillRect(-75, -75, 150, 150);

  generateStars(ctx);
}
```

```js hidden
function generateStars(ctx) {
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

draw();
```

{{EmbedLiveSample("Hole_in_rectangle", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
