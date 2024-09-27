---
title: "HTMLCanvasElement: width property"
short-title: width
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: c16ab7959173ec929df57d3916f8f4dbce485709
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.width`**-Eigenschaft ist eine positive `integer`, die das [`width`](/de/docs/Web/HTML/Element/canvas#width) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt, interpretiert in CSS-Pixeln. Wenn das Attribut nicht spezifiziert ist oder auf einen ungültigen Wert wie einen negativen gesetzt ist, wird der Standardwert von `300` verwendet.

Wenn die `width`-Eigenschaft gesetzt wird, wird der Zeichenpuffer immer auf leer zurückgesetzt – dies gilt für alle Kontexttypen und sogar dann, wenn die Breite auf denselben Wert gesetzt wird. Wenn Sie den vorherigen Inhalt wiederherstellen müssen, können Sie ihn über [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) speichern und über [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) wiederherstellen.

Dies ist eine der beiden Eigenschaften, die andere ist [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height), die die Größe der Leinwand steuern.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Breite der Leinwand mit folgendem Code erhalten:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle, die verwendet wird, um die `HTMLCanvasElement.width`-Eigenschaft zu definieren
- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height): Andere Eigenschaft, die zur Steuerung der Größe der Leinwand verwendet wird
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
