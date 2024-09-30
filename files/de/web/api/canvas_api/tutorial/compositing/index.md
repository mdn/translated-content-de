---
title: Compositing und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 34d979bdb5bf27aa3662ac72c87a4dbe76cf0ce1
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer übereinander gezeichnet. Dies ist für die meisten Situationen mehr als ausreichend, begrenzt jedoch die Reihenfolge, in der zusammengesetzte Formen aufgebaut werden. Wir können dieses Verhalten jedoch ändern, indem wir die `globalCompositeOperation`-Eigenschaft festlegen. Zusätzlich ermöglicht uns die `clip`-Eigenschaft, unerwünschte Teile von Formen auszublenden.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern sie auch verwenden, um bestimmte Bereiche zu maskieren, Abschnitte von der Leinwand zu löschen (nicht auf Rechtecke beschränkt wie es die [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)-Methode tut) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Dies setzt den Typ der Zusammensetzungsoperation, die beim Zeichnen neuer Formen angewendet werden soll, wobei Type eine Zeichenfolge ist, die identifiziert, welche der zwölf Zusammensetzungsoperationen verwendet werden soll.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Leinwandform, wirkt jedoch als Maske, um unerwünschte Teile von Formen auszublenden. Dies wird im Bild unten dargestellt. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades liegt, wird nicht auf der Leinwand gezeichnet.

![Eine Leinwand mit einem Stern, umrandet in roter Farbe. Das Innere des Sterns ist transparent, was durch die deutlich sichtbaren Rasterquadrate innerhalb des Sterns gezeigt wird, während die Rasterquadrate außerhalb des Sterns verschwommen sind.](canvas_clipping_path.png)

Vergleicht man Clipping-Pfade mit der oben erwähnten `globalCompositeOperation`-Eigenschaft, sehen wir zwei Zusammensetzungsmodi, die mehr oder weniger denselben Effekt in `source-in` und `source-atop` erzielen. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade tatsächlich nie auf die Leinwand gezeichnet werden und der Clipping-Pfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal zum Zeichnen mehrerer Formen in einem eingeschränkten Bereich.

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erwähnte ich nur die `stroke()`- und `fill()`-Methoden, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, nämlich `clip()`.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuell erstellten Pfad in den aktuellen Clipping-Pfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und ihn in einen Clipping-Pfad umzuwandeln, anstatt den Pfad zu zeichnen oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der exakt die gleiche Größe wie die Leinwand selbst hat. Mit anderen Worten, es wird keine Clipping vorgenommen.

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

In den ersten paar Codezeilen zeichnen wir ein schwarzes Rechteck in der Größe der Leinwand als Hintergrund und verschieben dann den Ursprung zum Zentrum. Als nächstes erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind auch Teil des Speicherstatus der Leinwand. Wenn wir den ursprünglichen Clipping-Pfad beibehalten wollten, könnten wir den Leinwandstatus speichern, bevor wir den neuen erstellen.

Alles, was nach dem Erstellen des Clipping-Pfads gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies wird deutlich in dem als nächstes gezeichneten linearen Verlauf. Danach wird eine Reihe von 50 zufällig positionierten und skalierten Sternen gezeichnet, wobei die benutzerdefinierte `drawStar()`-Funktion verwendet wird. Auch hier erscheinen die Sterne nur innerhalb des definierten Clipping-Pfads.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Clipping-Pfad

Es gibt keinen inversen Clipping-Maske. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck füllt und ein Loch darin für die Teile aufweist, die Sie überspringen möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in die entgegengesetzte Richtung zur äußeren Form zeichnen. Im folgenden Beispiel stanzen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichnungsrichtung, verhält sich jedoch so, als hätten wir es im Uhrzeigersinn gezeichnet. Standardmäßig geht der Bogenbefehl auch im Uhrzeigersinn, aber wir können seine Richtung mit dem letzten Argument ändern.

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
