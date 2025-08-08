---
title: Kompositing und Zuschneiden
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer übereinander gezeichnet. Dies ist für die meisten Situationen mehr als ausreichend, schränkt jedoch die Reihenfolge ein, in der zusammengesetzte Formen erstellt werden. Wir können dieses Verhalten jedoch ändern, indem wir die Eigenschaft `globalCompositeOperation` festlegen. Zudem ermöglicht die Eigenschaft `clip` uns, unerwünschte Teile von Formen auszublenden.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern es auch verwenden, um bestimmte Bereiche zu maskieren, Abschnitte von der Leinwand zu löschen (nicht auf Rechtecke beschränkt wie die Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Dies legt die Art der Kompositionsoperation fest, die beim Zeichnen neuer Formen angewendet werden soll, wobei `type` ein String ist, der angibt, welche der zwölf Kompositionsoperationen verwendet werden soll.

## Zuschnittspfade

Ein Zuschnittspfad ist wie eine normale Canvas-Form, fungiert jedoch als Maske, um unerwünschte Teile von Formen auszublenden. Dies ist im Bild unten dargestellt. Die rote Sternform ist unser Zuschnittspfad. Alles, was außerhalb dieses Pfads liegt, wird nicht auf der Leinwand gezeichnet.

![Eine Leinwand mit einem in roter Farbe umrandeten Stern. Das Innere des Sterns ist transparent, was durch das klare Sichtbarwerden der Gitterquadrate innerhalb des Sterns gezeigt wird, während die Gitterquadrate außerhalb des Sterns unscharf sind. ](canvas_clipping_path.png)

Wenn wir Zuschnittspfade mit der oben gesehenen `globalCompositeOperation`-Eigenschaft vergleichen, sehen wir zwei Kompositionsmodi, die in `source-in` und `source-atop` mehr oder weniger denselben Effekt erzielen. Die wichtigsten Unterschiede zwischen beiden sind, dass Zuschnittspfade nie tatsächlich auf die Leinwand gezeichnet werden und der Zuschnittspfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Zuschnittspfade ideal zum Zeichnen mehrerer Formen in einem eingeschränkten Bereich.

Im Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erwähnte ich nur die Methoden `stroke()` und `fill()`, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, genannt `clip()`.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuell erstellten Pfad in den aktuellen Zuschnittspfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und ihn in einen Zuschnittspfad umzuwandeln, anstatt den Pfad zu streichen oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Zuschnittspfad, der genau die gleiche Größe wie die Leinwand selbst hat. Mit anderen Worten, es erfolgt kein Zuschnitt.

### Ein `clip`-Beispiel

In diesem Beispiel verwenden wir einen kreisförmigen Zuschnittspfad, um das Zeichnen einer Reihe von zufälligen Sternen auf einen bestimmten Bereich zu beschränken.

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

In den ersten Zeilen des Codes zeichnen wir ein schwarzes Rechteck in der Größe der Leinwand als Hintergrund und verschieben dann den Ursprung in die Mitte. Als Nächstes erstellen wir den kreisförmigen Zuschnittspfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Zuschnittspfade sind auch Teil des speicherbaren Canvas-Zustands. Wenn wir den ursprünglichen Zuschnittspfad beibehalten wollten, hätten wir den Canvas-Zustand vor der Erstellung des neuen speichern können.

Alles, was nach der Erstellung des Zuschnittspfads gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies wird in dem als Nächstes gezeichneten linearen Farbverlauf deutlich. Danach wird eine Reihe von 50 zufällig positionierten und skalierten Sternen gezeichnet unter Verwendung der benutzerdefinierten Funktion `drawStar()`. Auch hier erscheinen die Sterne nur innerhalb des definierten Zuschnittspfads.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Zuschnittspfad

Es gibt so etwas wie eine inverse Zuschnittsmaske nicht. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck füllt und ein Loch für die Teile hat, die Sie ausgelassen haben möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in entgegengesetzter Richtung zur äußeren Form zeichnen. Im folgenden Beispiel stanzen wir ein Loch in den Himmel.

Ein Rechteck hat zwar keine Zeichnungsrichtung, verhält sich jedoch so, als ob es im Uhrzeigersinn gezeichnet worden wäre. Standardmäßig geht auch der Befehl `arc` im Uhrzeigersinn, aber wir können seine Richtung mit dem letzten Argument ändern.

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
