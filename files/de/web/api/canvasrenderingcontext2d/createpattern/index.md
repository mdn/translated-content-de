---
title: "CanvasRenderingContext2D: createPattern() Methode"
short-title: createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.createPattern()`** Methode der Canvas 2D API erstellt ein Muster unter Verwendung des angegebenen Bildes und der Wiederholung. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

Diese Methode zeichnet nicht direkt etwas auf das Canvas. Das erstellte Muster muss den Eigenschaften [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) zugewiesen werden, wonach es auf jede nachfolgende Zeichnung angewendet wird.

## Syntax

```js-nolint
createPattern(image, repetition)
```

### Parameter

- `image`
  - : Ein Bild, das als Bild des Musters verwendet werden soll. Es kann eines der folgenden sein:
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) ({{HTMLElement("img")}})
    - [`SVGImageElement`](/de/docs/Web/API/SVGImageElement) ({{SVGElement("image")}})
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) ({{HTMLElement("video")}}, durch die Aufnahme des Videos)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ({{HTMLElement("canvas")}})
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)

- `repetition`
  - : Ein String, der angibt, wie das Bild des Musters wiederholt werden soll. Mögliche Werte sind:
    - `"repeat"` (in beide Richtungen)
    - `"repeat-x"` (nur horizontal)
    - `"repeat-y"` (nur vertikal)
    - `"no-repeat"` (in keine Richtung)

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie der leere String (`""`) behandelt: beide sind Synonyme für `"repeat"`.

### Rückgabewert

- [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)
  - : Ein undurchsichtiges Objekt, das ein Muster beschreibt.

Wenn das `image` nicht vollständig geladen ist ([`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) ist `false`), wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

## Beispiele

### Ein Muster aus einem Bild erstellen

Dieses Beispiel verwendet die `createPattern()` Methode, um ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) mit einem sich wiederholenden Quellbild zu erstellen. Sobald erstellt, wird das Muster dem Füllstil des Canvas-Kontexts zugewiesen und auf ein Rechteck angewendet.

Das Originalbild sieht folgendermaßen aus:

![Ein blumiges Muster](canvas_create_pattern.png)

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_create_pattern.png";
// Only use the image after it's loaded
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('Creating_a_pattern_from_an_image', 700, 310) }}

### Ein Muster aus einem Canvas erstellen

In diesem Beispiel erstellen wir ein Muster aus dem Inhalt eines Offscreen-Canvas. Wir wenden es anschließend auf den Füllstil unseres primären Canvas an und füllen dieses Canvas mit dem Muster.

#### JavaScript

```js
// Create a pattern, offscreen
const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

// Give the pattern a width and height of 50
patternCanvas.width = 50;
patternCanvas.height = 50;

// Give the pattern a background color and draw an arc
patternContext.fillStyle = "#ffeecc";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
patternContext.stroke();

// Create our primary canvas and fill it with the pattern
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas);
```

#### Ergebnis

{{ EmbedLiveSample('Creating_a_pattern_from_a_canvas', 700, 160) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)
