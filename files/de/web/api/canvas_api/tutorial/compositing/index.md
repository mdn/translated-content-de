---
title: Compositing und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer übereinander gezeichnet. Dies ist für die meisten Situationen mehr als ausreichend, schränkt jedoch die Reihenfolge ein, in der zusammengesetzte Formen erstellt werden. Wir können dieses Verhalten jedoch ändern, indem wir die `globalCompositeOperation`-Eigenschaft festlegen. Darüber hinaus ermöglicht uns die `clip`-Eigenschaft, unerwünschte Teile von Formen auszublenden.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern diese auch verwenden, um bestimmte Bereiche auszublenden, Abschnitte von der Zeichenfläche zu löschen (nicht auf Rechtecke beschränkt wie die Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Dies legt die Art der Kompositionsoperation fest, die beim Zeichnen neuer Formen angewendet werden soll, wobei `type` ein String ist, der angibt, welche der zwölf Kompositionsoperationen verwendet werden soll.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Canvas-Form, wirkt aber als Maske, um unerwünschte Teile von Formen auszublenden. Dies wird im folgenden Bild veranschaulicht. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades liegt, wird nicht auf der Leinwand gezeichnet.

![Eine Leinwand mit einem Stern, der in roter Farbe umrandet ist. Das Innere des Sterns ist transparent, was durch die deutlich sichtbaren Gitterquadrate im Inneren des Sterns dargestellt wird, während die Gitterquadrate außerhalb des Sterns unscharf sind.](canvas_clipping_path.png)

Wenn wir Clipping-Pfade mit der `globalCompositeOperation`-Eigenschaft vergleichen, die wir oben gesehen haben, sehen wir zwei Kompositionsmodi, die in `source-in` und `source-atop` mehr oder weniger denselben Effekt erzielen. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade nie tatsächlich auf die Leinwand gezeichnet werden und der Clipping-Pfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal zum Zeichnen mehrerer Formen in einem begrenzten Bereich.

Im Kapitel über [das Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) habe ich nur die Methoden `stroke()` und `fill()` erwähnt, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, die `clip()` heißt.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuell erstellten Pfad in den aktuellen Clipping-Pfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und in einen Clipping-Pfad zu verwandeln, anstatt den Pfad zu umranden oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genau die gleiche Größe wie die Canvas selbst hat. Mit anderen Worten, es erfolgt kein Clipping.

### Ein `clip`-Beispiel

In diesem Beispiel verwenden wir einen kreisförmigen Clipping-Pfad, um die Zeichnung eines Satzes von zufälligen Sternen auf einen bestimmten Bereich zu beschränken.

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
    ctx.fillStyle = "#fff";
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

In den ersten Zeilen des Codes zeichnen wir ein schwarzes Rechteck in der Größe der Leinwand als Hintergrund und verschieben dann den Nullpunkt in die Mitte. Anschließend erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind ebenfalls Teil des Canvas-Speicherzustands. Wenn wir den ursprünglichen Clipping-Pfad behalten möchten, hätten wir den Canvas-Zustand speichern können, bevor wir den neuen erstellen.

Alles, was nach dem Erstellen des Clipping-Pfades gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies zeigt sich deutlich im nächsten gezeichneten linearen Verlauf. Danach wird eine Gruppe von 50 zufällig positionierten und skalierten Sternen unter Verwendung der benutzerdefinierten Funktion `drawStar()` gezeichnet. Auch hier erscheinen die Sterne nur innerhalb des definierten Clipping-Pfades.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Umgekehrter Clipping-Pfad

Es gibt kein Konzept einer inversen Clipping-Maske. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck füllt und ein Loch für die Teile hat, die Sie überspringen möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in die entgegengesetzte Richtung zur äußeren Form zeichnen. Im Beispiel unten machen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichnungsrichtung, verhält sich aber, als ob wir es im Uhrzeigersinn zeichnen würden. Standardmäßig geht der Befehl für Bögen ebenfalls im Uhrzeigersinn, aber wir können seine Richtung mit dem letzten Argument ändern.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
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
}
```

```js hidden
function generateStars(ctx) {
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
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
