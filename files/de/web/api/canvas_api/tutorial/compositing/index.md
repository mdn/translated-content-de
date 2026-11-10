---
title: Compositing und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In allen [bisherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen stets übereinander gezeichnet. Das reicht für die meisten Situationen aus, schränkt aber die Reihenfolge ein, in der zusammengesetzte Formen aufgebaut werden. Wir können dieses Verhalten jedoch ändern, indem wir die Eigenschaft `globalCompositeOperation` festlegen. Außerdem können wir mit `clip` unerwünschte Teile von Formen ausblenden.

## `globalCompositeOperation`

Wir können neue Formen nicht nur hinter bereits vorhandenen Formen zeichnen, sondern auch bestimmte Bereiche maskieren, Teile des Canvas löschen (ohne dabei wie bei der Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) auf Rechtecke beschränkt zu sein) und vieles mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Legt die Compositing-Operation fest, die beim Zeichnen neuer Formen angewendet wird. `type` ist dabei eine Zeichenfolge, die eine der zwölf Compositing-Operationen angibt.

## Clipping-Pfade

Ein Clipping-Pfad ähnelt einer normalen Canvas-Form, dient aber als Maske, die unerwünschte Teile von Formen ausblendet. Die folgende Abbildung veranschaulicht dies. Der rot umrandete Stern ist unser Clipping-Pfad. Alles außerhalb dieses Pfads wird nicht auf dem Canvas gezeichnet.

![Ein Canvas mit einem rot umrandeten Stern. Das Innere des Sterns ist transparent: Die Rasterquadrate darin sind deutlich sichtbar, während die Rasterquadrate außerhalb des Sterns verschwommen sind.](canvas_clipping_path.png)

Vergleicht man Clipping-Pfade mit der oben beschriebenen Eigenschaft `globalCompositeOperation`, erzielen die beiden Compositing-Modi `source-in` und `source-atop` eine ähnliche Wirkung. Die wichtigsten Unterschiede sind, dass Clipping-Pfade nie selbst auf dem Canvas gezeichnet werden und sich durch das Hinzufügen neuer Formen nicht verändern. Dadurch eignen sie sich besonders gut, um mehrere Formen innerhalb eines begrenzten Bereichs zu zeichnen.

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) wurden nur die Methoden `stroke()` und `fill()` erwähnt. Es gibt jedoch noch eine dritte Methode, die wir mit Pfaden verwenden können: `clip()`.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Macht den Pfad, der gerade erstellt wird, zum aktuellen Clipping-Pfad.

Mit `clip()` können Sie einen Pfad abschließen und ihn zu einem Clipping-Pfad machen, statt ihn mit einer Kontur zu versehen oder zu füllen. Verwenden Sie dafür `clip()` anstelle von `closePath()`.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genauso groß ist wie der Canvas selbst. Mit anderen Worten: Es wird nichts abgeschnitten.

### Ein Beispiel für `clip`

In diesem Beispiel verwenden wir einen kreisförmigen Clipping-Pfad, um das Zeichnen zufällig angeordneter Sterne auf einen bestimmten Bereich zu beschränken.

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

In den ersten Codezeilen zeichnen wir als Hintergrund ein schwarzes Rechteck in der Größe des Canvas und verschieben dann den Ursprung in dessen Mitte. Anschließend erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Kreisbogen zeichnen und `clip()` aufrufen. Clipping-Pfade gehören auch zum gespeicherten Canvas-Zustand. Wenn wir den ursprünglichen Clipping-Pfad beibehalten wollten, könnten wir den Canvas-Zustand speichern, bevor wir den neuen Pfad erstellen.

Alles, was nach dem Erstellen des Clipping-Pfads gezeichnet wird, erscheint nur innerhalb dieses Pfads. Das ist am anschließend gezeichneten linearen Farbverlauf deutlich zu erkennen. Danach werden mithilfe der benutzerdefinierten Funktion `drawStar()` 50 zufällig positionierte und skalierte Sterne gezeichnet. Auch diese Sterne erscheinen nur innerhalb des festgelegten Clipping-Pfads.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Clipping-Pfad

Eine inverse Clipping-Maske gibt es nicht. Wir können jedoch eine Maske definieren, die den gesamten Canvas mit einem Rechteck ausfüllt und für die auszusparenden Bereiche ein Loch enthält. Wenn wir [eine Form mit einem Loch zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes), müssen wir das Loch in der entgegengesetzten Richtung zur äußeren Form zeichnen. Im folgenden Beispiel sparen wir ein Loch im Himmel aus.

Ein Rechteck hat keine Zeichenrichtung, verhält sich aber so, als hätten wir es im Uhrzeigersinn gezeichnet. Standardmäßig verläuft auch der Kreisbogen im Uhrzeigersinn. Seine Richtung können wir jedoch mit dem letzten Argument ändern.

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
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true); // Hole counterclockwise
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

{{EmbedLiveSample("inverse_clipping_path", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
