---
title: "CanvasRenderingContext2D: Methode createPattern()"
short-title: createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef}}

Die Methode **`CanvasRenderingContext2D.createPattern()`** der Canvas 2D API erstellt ein Muster mit dem angegebenen Bild und der Wiederholung. Diese Methode gibt ein {{domxref("CanvasPattern")}} zurück.

Diese Methode zeichnet nichts direkt auf die Leinwand. Das erstellte Muster muss den Eigenschaften {{domxref("CanvasRenderingContext2D.fillStyle")}} oder {{domxref("CanvasRenderingContext2D.strokeStyle")}} zugewiesen werden, bevor es auf alle nachfolgenden Zeichnungen angewendet wird.

## Syntax

```js-nolint
createPattern(image, repetition)
```

### Parameter

- `image`

  - : Ein Bild, das als Musterbild verwendet werden soll. Es kann eines der folgenden sein:

    - {{domxref("HTMLImageElement")}} ({{HTMLElement("img")}})
    - {{domxref("SVGImageElement")}} ({{SVGElement("image")}})
    - {{domxref("HTMLVideoElement")}} ({{HTMLElement("video")}}, durch Verwenden des Videostandbilds)
    - {{domxref("HTMLCanvasElement")}} ({{HTMLElement("canvas")}})
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}

- `repetition`

  - : Ein String, der angibt, wie das Musterbild wiederholt werden soll. Mögliche Werte sind:

    - `"repeat"` (in beide Richtungen)
    - `"repeat-x"` (nur horizontal)
    - `"repeat-y"` (nur vertikal)
    - `"no-repeat"` (in keiner Richtung)

    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie der leere String (`""`) behandelt: Beide sind Synonyme für `"repeat"`.

### Rückgabewert

- {{domxref("CanvasPattern")}}
  - : Ein undurchsichtiges Objekt, das ein Muster beschreibt.

Wenn das `image` nicht vollständig geladen ist ({{domxref("HTMLImageElement.complete")}} ist `false`), wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

## Beispiele

### Ein Muster aus einem Bild erstellen

Dieses Beispiel verwendet die `createPattern()`-Methode, um ein {{domxref("CanvasPattern")}} mit einem sich wiederholenden Quellbild zu erstellen. Sobald erstellt, wird das Muster auf den Fill-Stil des Canvas-Kontexts zugewiesen und auf ein Rechteck angewendet.

Das originale Bild sieht so aus:

![Ein blumiges Muster](canvas_createpattern.png)

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_createpattern.png";
// Verwenden Sie das Bild erst, nachdem es geladen wurde
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('Creating_a_pattern_from_an_image', 700, 310) }}

### Ein Muster aus einem Canvas erstellen

In diesem Beispiel erstellen wir ein Muster aus dem Inhalt eines Offscreen-Canvas. Wir wenden es dann auf den Fill-Stil unseres Haupt-Canvas an und füllen diesen Canvas mit dem Muster.

#### JavaScript

```js
// Ein Muster erstellen, Offscreen
const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

// Dem Muster eine Breite und Höhe von 50 geben
patternCanvas.width = 50;
patternCanvas.height = 50;

// Dem Muster eine Hintergrundfarbe geben und einen Bogen zeichnen
patternContext.fillStyle = "#fec";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
patternContext.stroke();

// Unseren Haupt-Canvas erstellen und mit dem Muster füllen
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Unseren Haupt-Canvas zur Webseite hinzufügen
document.body.appendChild(canvas);
```

#### Ergebnis

{{ EmbedLiveSample('Creating_a_pattern_from_a_canvas', 700, 160) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
