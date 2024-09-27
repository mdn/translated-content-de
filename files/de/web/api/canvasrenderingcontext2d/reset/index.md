---
title: "CanvasRenderingContext2D: reset()-Methode"
short-title: reset()
slug: Web/API/CanvasRenderingContext2D/reset
l10n:
  sourceCommit: bf8f50a256ded858442d49d532754d830c1a2bcd
---

{{APIRef}}

Die **`CanvasRenderingContext2D.reset()`**-Methode der Canvas 2D API setzt den Rendering-Kontext in seinen Standardzustand zurück, sodass er wiederverwendet werden kann, um etwas anderes zu zeichnen, ohne dass alle Eigenschaften explizit zurückgesetzt werden müssen.

Das Zurücksetzen löscht den Backing-Buffer, den Zeichenstatus-Stack, alle definierten Pfade und Stile.
Dies umfasst die aktuelle [Transformationsmatrix](/de/docs/Web/API/CanvasRenderingContext2D#transformations), [Compositing](/de/docs/Web/API/CanvasRenderingContext2D#compositing)-Eigenschaften, den Clipping-Bereich, die Strichliste, [Linienstile](/de/docs/Web/API/CanvasRenderingContext2D#line_styles), [Textstile](/de/docs/Web/API/CanvasRenderingContext2D#text_styles), [Schatten](/de/docs/Web/API/CanvasRenderingContext2D#shadows), [Bildglättung](/de/docs/Web/API/CanvasRenderingContext2D#image_smoothing), [Filter](/de/docs/Web/API/CanvasRenderingContext2D#filters) und so weiter.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie wir `reset()` verwenden können, um den Kontext vollständig zu löschen, bevor wir neu zeichnen.

Zuerst definieren wir einen Button und ein Canvas.

```css
#toggle-reset {
  display: block;
}
```

```html
<button id="toggle-reset">Toggle</button>
<canvas id="my-house" width="500" height="200"></canvas>
```

Der Code holt zuerst einen `2d`-Kontext für das Canvas.
Dann werden Funktionen definiert, die den Kontext verwenden können, um ein Rechteck beziehungsweise einen Kreis zu zeichnen.

```js
// Get the 2d context
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

function drawRect() {
  // Set line width
  ctx.lineWidth = 10;

  // Stroke rect outline
  ctx.strokeRect(50, 50, 150, 100);

  // Create filled text
  ctx.font = "50px serif";
  ctx.fillText("Rect!", 70, 110);
}

function drawCircle() {
  // Set line width
  ctx.lineWidth = 5;

  // Stroke out circle
  ctx.beginPath();
  ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // Create filled text
  ctx.font = "25px sans-serif";
  ctx.fillText("Circle!", 265, 100);
}
```

Wir zeichnen dann das Rechteck mit seiner Funktion.
Der Button schaltet das Zeichnen des Kreises und des Rechtecks um.
Beachten Sie, wie `reset()` aufgerufen wird, bevor gezeichnet wird, um den Kontext zu löschen.

```js
drawRect();

// Toggle between circle and rectangle using button
let toggle = true;
const mybutton = document.getElementById("toggle-reset");

mybutton.addEventListener("click", () => {
  ctx.reset(); // Clear the context!
  if (toggle) {
    drawCircle();
  } else {
    drawRect();
  }
  toggle = !toggle;
});
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Examples", 500, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
