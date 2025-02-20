---
title: "HTMLCanvasElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: 4aa077d26c6b1f7168af634082b6e6f71e11bb99
---

{{APIRef("Canvas API")}}

Die Eigenschaft **`HTMLCanvasElement.height`** ist eine positive `integer`, die das [`height`](/de/docs/Web/HTML/Element/canvas#height)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements in CSS-Pixeln interpretiert. Wenn das Attribut nicht angegeben ist oder einen ungültigen Wert, wie etwa einen negativen, enthält, wird der Standardwert `150` verwendet.

Wenn die `height`-Eigenschaft gesetzt wird, wird der Zeichenpuffer immer auf leer zurückgesetzt – dies gilt für alle Kontexttypen, auch wenn die Höhe auf denselben Wert gesetzt wird. Möchten Sie den vorherigen Inhalt wiederherstellen, können Sie ihn über [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) speichern und über [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) wiederherstellen.

Dies ist eine von zwei Eigenschaften, die andere ist [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width), welche die Größe des Canvas steuern.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Höhe des Canvas mit dem folgenden Code abrufen:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle, die verwendet wird, um die `HTMLCanvasElement.height`-Eigenschaft zu definieren
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width): Andere Eigenschaft zur Steuerung der Canvas-Größe
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
