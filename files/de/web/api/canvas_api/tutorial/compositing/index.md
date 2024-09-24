---
title: Komposition und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 34d979bdb5bf27aa3662ac72c87a4dbe76cf0ce1
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer eine über der anderen gezeichnet. Das ist für die meisten Situationen mehr als ausreichend, aber es schränkt die Reihenfolge ein, in der zusammengesetzte Formen erstellt werden. Wir können jedoch dieses Verhalten ändern, indem wir die Eigenschaft `globalCompositeOperation` setzen. Zusätzlich ermöglicht uns die Eigenschaft `clip`, ungewollte Teile von Formen zu verstecken.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern es auch verwenden, um bestimmte Bereiche abzudecken, Abschnitte von der Leinwand zu löschen (nicht nur auf Rechtecke beschränkt, wie es die Methode {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} tut) und mehr.

- {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}
  - : Diese stellt den Typ der Kompositionsoperation ein, die angewendet wird, wenn neue Formen gezeichnet werden, wobei type ein String ist, der angibt, welche der zwölf Kompositionsoperationen verwendet werden soll.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Canvas-Form, aber er fungiert als Maske, um ungewollte Teile von Formen zu verbergen. Dies wird im Bild unten dargestellt. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades fällt, wird nicht auf die Leinwand gezeichnet.

![Ein Canvas mit einem Stern, der in roter Farbe umrandet ist. Das Innere des Sterns ist transparent, was durch die klar sichtbaren Gitterquadrate im Inneren des Sterns dargestellt wird, während die Gitterquadrate außerhalb des Sterns verschwommen sind.](canvas_clipping_path.png)

Wenn wir Clipping-Pfade mit der Eigenschaft `globalCompositeOperation` vergleichen, die wir oben gesehen haben, sehen wir zwei Kompositionsmodi, die mehr oder weniger denselben Effekt erzielen: `source-in` und `source-atop`. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade niemals tatsächlich auf die Leinwand gezeichnet werden und der Clipping-Pfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal für das Zeichnen mehrerer Formen in einem begrenzten Bereich.

Im Kapitel über [Formen zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) habe ich nur die Methoden `stroke()` und `fill()` erwähnt, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, die `clip()` genannt wird.

- {{domxref("CanvasRenderingContext2D.clip", "clip()")}}
  - : Wandelt den aktuell erstellten Pfad in den aktuellen Clipping-Pfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und ihn in einen Clipping-Pfad umzuwandeln, anstatt den Pfad zu umranden oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genau die gleiche Größe wie die Leinwand selbst hat. Mit anderen Worten, es erfolgt kein Clipping.

### Ein `clip` Beispiel

In diesem Beispiel werden wir einen kreisförmigen Clipping-Pfad verwenden, um das Zeichnen eines Satzes zufälliger Sterne auf einen bestimmten Bereich zu beschränken.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Erstellen eines kreisförmigen Clipping-Pfades
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // Hintergrund zeichnen
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

In den ersten paar Zeilen des Codes zeichnen wir ein schwarzes Rechteck von der Größe der Leinwand als Hintergrund, dann verschieben wir den Ursprung in die Mitte. Als Nächstes erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind ebenfalls Teil des Canvas-Speicherzustands. Wenn wir den ursprünglichen Clipping-Pfad beibehalten wollten, hätten wir den Canvas-Zustand vor dem Erstellen eines neuen speichern können.

Alles, was nach dem Erstellen des Clipping-Pfades gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies ist im linearen Verlauf, der als Nächstes gezeichnet wird, deutlich zu sehen. Danach wird ein Satz von 50 zufällig positionierten und skalierten Sternen gezeichnet, wobei die benutzerdefinierte `drawStar()`-Funktion verwendet wird. Auch hier erscheinen die Sterne nur innerhalb des definierten Clipping-Pfades.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Clipping-Pfad

Es gibt so etwas wie eine inverse Clipping-Maske nicht. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck füllt und ein Loch für die Teile enthält, die Sie überspringen möchten. Beim [Zeichnen einer Form mit einem Loch](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes) müssen wir das Loch in die entgegengesetzte Richtung zur äußeren Form zeichnen. Im unten stehenden Beispiel stanzen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichenrichtung, es verhält sich jedoch so, als ob wir es im Uhrzeigersinn gezeichnet hätten. Standardmäßig geht der Bogenbefehl auch im Uhrzeigersinn, aber wir können seine Richtung mit dem letzten Argument ändern.

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

    // Clipping-Pfad
    ctx.beginPath();
    ctx.rect(-75, -75, 150, 150); // Äußeres Rechteck
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true); // Loch im Gegenuhrzeigersinn
    ctx.clip();

    // Hintergrund zeichnen
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
