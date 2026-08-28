---
title: Compositing und Clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: cf880ca0ef5fd518f7fdc716220488647ac83eee
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

In all unseren [vorherigen Beispielen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) wurden Formen immer übereinander gezeichnet. Das ist in den meisten Situationen völlig ausreichend, schränkt jedoch die Reihenfolge ein, in der zusammengesetzte Formen erstellt werden. Wir können dieses Verhalten jedoch ändern, indem wir die Eigenschaft `globalCompositeOperation` festlegen. Darüber hinaus ermöglicht uns die Eigenschaft `clip`, unerwünschte Teile von Formen auszublenden.

## `globalCompositeOperation`

Wir können nicht nur neue Formen hinter bestehenden Formen zeichnen, sondern auch bestimmte Bereiche maskieren, Abschnitte von der Leinwand löschen (nicht auf Rechtecke beschränkt wie die Methode [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)) und mehr.

- [`globalCompositeOperation = type`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Dies legt den Typ der Kompositionsoperation fest, die beim Zeichnen neuer Formen angewendet wird, wobei `type` ein Zeichenfolgenwert ist, der identifiziert, welche der zwölf Kompositionsoperationen verwendet werden soll.

## Clipping-Pfade

Ein Clipping-Pfad ist wie eine normale Canvas-Form, fungiert jedoch als Maske, um unerwünschte Teile von Formen auszublenden. Dies wird im Bild unten visualisiert. Die rote Sternform ist unser Clipping-Pfad. Alles, was außerhalb dieses Pfades liegt, wird nicht auf der Leinwand gezeichnet.

![Eine Leinwand mit einem Stern, der in roter Farbe umrandet ist. Das Innere des Sterns ist transparent, wie durch die Gitterquadrate im Stern sichtbar, während die Gitterquadrate außerhalb des Sterns verschwommen sind.](canvas_clipping_path.png)

Wenn wir Clipping-Pfade mit der oben genannten Eigenschaft `globalCompositeOperation` vergleichen, sehen wir zwei Kompositionsmodi, die mehr oder weniger denselben Effekt in `source-in` und `source-atop` erzielen. Die wichtigsten Unterschiede zwischen den beiden sind, dass Clipping-Pfade niemals tatsächlich auf die Leinwand gezeichnet werden und der Clipping-Pfad nie durch das Hinzufügen neuer Formen beeinflusst wird. Dies macht Clipping-Pfade ideal zum Zeichnen mehrerer Formen in einem eingeschränkten Bereich.

Im Kapitel über [das Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) habe ich nur die Methoden `stroke()` und `fill()` erwähnt, aber es gibt eine dritte Methode, die wir mit Pfaden verwenden können, genannt `clip()`.

- [`clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den derzeit erstellten Pfad in den aktuellen Clipping-Pfad um.

Sie verwenden `clip()` anstelle von `closePath()`, um einen Pfad zu schließen und ihn in einen Clipping-Pfad zu verwandeln, anstatt den Pfad zu umranden oder zu füllen.

Standardmäßig hat das {{HTMLElement("canvas")}}-Element einen Clipping-Pfad, der genau die gleiche Größe wie die Leinwand selbst hat. Mit anderen Worten, es erfolgt kein Clipping.

### Ein `clip`-Beispiel

In diesem Beispiel verwenden wir einen kreisförmigen Clipping-Pfad, um das Zeichnen eines Satzes von zufälligen Sternen auf einen bestimmten Bereich zu beschränken.

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

In den ersten paar Codezeilen zeichnen wir ein schwarzes Rechteck in der Größe der Leinwand als Hintergrund und verschieben dann den Ursprung in die Mitte. Als Nächstes erstellen wir den kreisförmigen Clipping-Pfad, indem wir einen Bogen zeichnen und `clip()` aufrufen. Clipping-Pfade sind auch Teil des Speichers des Canvas-Zustands. Wenn wir den ursprünglichen Clipping-Pfad behalten wollten, hätten wir den Canvas-Zustand vor dem Erstellen des neuen Pfades speichern können.

Alles, was nach dem Erstellen des Clipping-Pfades gezeichnet wird, erscheint nur innerhalb dieses Pfades. Dies sieht man deutlich im als Nächstes gezeichneten Farbverlauf. Danach wird eine Reihe von 50 zufällig positionierten und skalierten Sternen gezeichnet, wobei die benutzerdefinierte Funktion `drawStar()` verwendet wird. Auch hier erscheinen die Sterne nur innerhalb des definierten Clipping-Pfades.

{{EmbedLiveSample("A_clip_example", "", "160")}}

### Inverser Clipping-Pfad

Es gibt keinen inversen Clipping-Masken. Wir können jedoch eine Maske definieren, die die gesamte Leinwand mit einem Rechteck füllt und ein Loch für die Bereiche hat, die Sie überspringen möchten. Wenn Sie [eine Form mit einem Loch zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#shapes_with_holes), müssen wir das Loch in die entgegengesetzte Richtung zur Außenform zeichnen. Im folgenden Beispiel stanzen wir ein Loch in den Himmel.

Ein Rechteck hat keine Zeichenrichtung, verhält sich jedoch so, als ob wir es im Uhrzeigersinn gezeichnet hätten. Standardmäßig erfolgt die Bogenführung auch im Uhrzeigersinn, aber wir können ihre Richtung mit dem letzten Argument ändern.

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

{{EmbedLiveSample("Hole_in_rectangle", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
