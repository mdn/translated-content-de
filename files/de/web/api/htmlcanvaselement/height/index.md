---
title: "HTMLCanvasElement: height Eigenschaft"
short-title: height
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: c16ab7959173ec929df57d3916f8f4dbce485709
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.height`**-Eigenschaft ist eine positive `integer`, die das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{HTMLElement("canvas")}} Elements widerspiegelt und in CSS-Pixeln interpretiert wird. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert gesetzt ist, wie zum Beispiel einen negativen, wird der Standardwert von `150` verwendet.

Wenn die `height`-Eigenschaft gesetzt wird, wird der Zeichenpuffer immer auf leer zurückgesetzt - dies gilt für alle Kontexttypen, sogar wenn die Höhe auf denselben Wert gesetzt wird. Falls Sie den vorherigen Inhalt wiederherstellen müssen, können Sie ihn mittels [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) speichern und mittels [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) wiederherstellen.

Dies ist eine der zwei Eigenschaften, wobei die andere [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width) ist, die die Größe des Canvas steuert.

## Wert

Eine Zahl.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Höhe des Canvas mit dem folgenden Code ermitteln:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle zur Definition der `HTMLCanvasElement.height`-Eigenschaft
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width): Andere Eigenschaft, um die Größe des Canvas zu steuern
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
