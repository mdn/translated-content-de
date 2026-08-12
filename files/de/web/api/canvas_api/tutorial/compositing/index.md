---
title: Überlagerung und clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer eine über der anderen gezeichnet. Dies ist für die meisten Situationen mehr als ausreichend, jedoch schränkt es die Reihenfolge ein, in der zusammengesetzte Formen erstellt werden. Wir können dieses Verhalten jedoch ändern, indem wir die Eigenschaft `globalCompositeOperation` einstellen. Darüber hinaus ermöglicht uns die Eigenschaft `clip`, unerwünschte Teile von Formen auszublenden.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter vorhandenen Formen zeichnen, sondern auch bestimmte Bereiche maskieren, Bereiche von der Leinwand löschen (nicht nur auf Rechtecke beschränkt wie die Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Dies legt die Art der Überlagerungsoperation fest, die beim Zeichnen neuer Formen angewendet werden soll, wobei type ein String ist, der identifiziert, welche der zwölf Überlagerungsoperationen zu verwenden ist.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Canvas-Form, agiert jedoch als Maske, um unerwünschte Teile von Formen auszublenden. Dies wird im Bild unten veranschaulicht. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades liegt, wird nicht auf der Leinwand gezeichnet.

![Ein Canvas mit einem in roter Farbe umrandeten Stern. Das Innere des Sterns ist transparent, da die Gittersquares im Inneren des Sterns klar sichtbar sind, während die Squares außerhalb des Sterns unscharf sind.](canvas_clipping_path.png)

Vergleichen wir Clipping-Pfade mit der Eigenschaft `globalCompositeOperation`, die wir oben gesehen haben, so sehen wir zwei Überlagerungsmodi, die mehr oder weniger denselben Effekt bei `source-in` und `source-atop` erzielen. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade nie tatsächlich auf die Leinwand gezeichnet werden und der Clipping-Pfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal für das Zeichnen mehrerer Formen in einem eingeschränkten Bereich.

Im Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) habe ich nur die Methoden `stroke()` und `fill()` erwähnt, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, namens `clip()`.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den momentan aufgebauten Pfad in den aktuellen Clipping-Pfad um.

Man verwendet `clip()` statt `closePath()`, um einen Pfad zu schließen und in einen Clipping-Pfad umzuwandeln, anstatt den Pfad zu umranden oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genau die gleiche Größe wie die Leinwand selbst hat. Mit anderen Worten: Es findet kein Clipping statt.

### Ein `clip`-Beispiel

In diesem Beispiel verwenden wir einen kreisförmigen Clipping-Pfad, um das Zeichnen einer Reihe von zufälligen Sternen auf einen bestimmten Bereich zu beschränken.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

In den ersten Zeilen des Codes zeichnen wir ein schwarzes Rechteck in der Größe der Leinwand als Hintergrund und verschieben dann den Ursprung in die Mitte. Danach erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind auch Teil des Canvas-Speicherzustands. Falls wir den ursprünglichen Clipping-Pfad beibehalten möchten, könnten wir den Canvas-Zustand speichern, bevor wir den neuen erstellen.

Alles, was nach dem Erstellen des Clipping-Pfades gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies wird deutlich in dem als nächstes gezeichneten linearen Farbverlauf. Danach wird eine Reihe von 50 zufällig positionierten und skalierten Sternen gezeichnet, unter Verwendung der benutzerdefinierten Funktion `drawStar()`. Erneut erscheinen die Sterne nur innerhalb des definierten Clipping-Pfades.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Clipping-Pfad

Es gibt keine Funktion für eine inverse Clipping-Maske. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck ausfüllt und ein Loch darin hat für die Teile, die Sie überspringen möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in entgegengesetzter Richtung zur äußeren Form zeichnen. Im Beispiel unten schlagen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichnungsrichtung, verhält sich jedoch so, als hätten wir es im Uhrzeigersinn gezeichnet. Standardmäßig geht auch der Befehl `arc` im Uhrzeigersinn, aber seine Richtung können wir mit dem letzten Argument ändern.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
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
