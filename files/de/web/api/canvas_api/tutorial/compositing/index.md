---
title: Komposition und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 34d979bdb5bf27aa3662ac72c87a4dbe76cf0ce1
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer übereinander gezeichnet. Dies ist für die meisten Situationen völlig ausreichend, schränkt jedoch die Reihenfolge ein, in der zusammengesetzte Formen erstellt werden. Wir können dieses Verhalten jedoch ändern, indem wir die Eigenschaft `globalCompositeOperation` setzen. Zusätzlich erlaubt uns die Eigenschaft `clip`, unerwünschte Teile von Formen zu verbergen.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern auch bestimmte Bereiche maskieren, Abschnitte der Leinwand löschen (nicht auf Rechtecke beschränkt wie die Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Dies legt die Art der Kompositionsoperation fest, die beim Zeichnen neuer Formen angewendet werden soll, wobei der Typ ein String ist, der angibt, welche der zwölf Kompositionsoperationen verwendet werden soll.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Canvas-Form, fungiert jedoch als Maske, um unerwünschte Teile von Formen zu verbergen. Dies wird im untenstehenden Bild visualisiert. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades liegt, wird nicht auf die Leinwand gezeichnet.

![Ein Canvas mit einem roten Sternumriss. Das Innere des Sterns ist transparent, da die Gittersquares im Inneren des Sterns deutlich sichtbar sind, während die Gittersquares außerhalb des Sterns unscharf sind.](canvas_clipping_path.png)

Vergleichen wir Clipping-Pfade mit der oben genannten Eigenschaft `globalCompositeOperation`, sehen wir zwei Kompositionsmodi, die im Wesentlichen denselben Effekt in `source-in` und `source-atop` erzielen. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade niemals tatsächlich auf die Leinwand gezeichnet werden und der Clipping-Pfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal für das Zeichnen mehrerer Formen in einem begrenzten Bereich.

In dem Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) habe ich nur die Methoden `stroke()` und `fill()` erwähnt, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, nämlich `clip()`.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuell aufgebauten Pfad in den aktuellen Clipping-Pfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und ihn in einen Clipping-Pfad umzuwandeln, anstatt den Pfad zu umrahmen oder auszufüllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genau so groß ist wie die Leinwand selbst. Mit anderen Worten, es findet kein Clipping statt.

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
  const lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
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

In den ersten Zeilen des Codes zeichnen wir ein schwarzes Rechteck in der Größe des Canvas als Hintergrund, dann verschieben wir den Ursprung in die Mitte. Als nächstes erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind ebenfalls Teil des Canvas-Speicherzustands. Wenn wir den ursprünglichen Clipping-Pfad beibehalten wollten, hätten wir den Canvas-Zustand vor dem Erstellen des neuen speichern können.

Alles, was nach dem Erstellen des Clipping-Pfads gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies sieht man deutlich im nächsten gezeichneten linearen Farbverlaufs. Danach wird eine Menge von 50 zufällig positionierten und skalierten Sternen gezeichnet, unter Verwendung der benutzerdefinierten Funktion `drawStar()`. Auch hier erscheinen die Sterne nur innerhalb des definierten Clipping-Pfads.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Clipping-Pfad

Es gibt keinen inversen Clipping-Mask. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck füllt und ein Loch enthält, für die Teile, die Sie überspringen möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in die entgegengesetzte Richtung zur äußeren Form zeichnen. Im untenstehenden Beispiel stanzen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichenrichtung, verhält sich jedoch so, als ob es im Uhrzeigersinn gezeichnet würde. Standardmäßig geht der Bogenbefehl ebenfalls im Uhrzeigersinn, aber wir können seine Richtung mit dem letzten Argument ändern.

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
    const lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    lingrad.addColorStop(0, "#232256");
    lingrad.addColorStop(1, "#143778");

    ctx.fillStyle = lingrad;
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
