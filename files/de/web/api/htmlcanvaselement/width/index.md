---
title: "HTMLCanvasElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: d971fee0fa6a1a59e0bcf998c75bf9a6cdb746bc
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.width`**-Eigenschaft ist eine positive `Ganzzahl`, die das [`width`](/de/docs/Web/HTML/Element/canvas#width) HTML-Attribut des {{HTMLElement("canvas")}}-Elements in CSS-Pixeln darstellt. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert gesetzt wird, wie z.B. eine negative Zahl, wird der Standardwert `300` verwendet.

Das Setzen der `width`-Eigenschaft setzt den gesamten Rendering-Kontext in seinen Standardzustand zurück. Dies umfasst das Löschen des Canvas-Rückpuffers, das Zurücksetzen des aktuellen Pfads und das Zurücksetzen _aller_ Eigenschaften wie `fillStyle` und `globalCompositeOperation`. Dieser Reset erfolgt für alle Kontexttypen, selbst wenn `width` auf seinen aktuellen Wert gesetzt wird. Um den vorherigen Inhalt nach einer Änderung der Breite wiederherzustellen, verwenden Sie [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) und [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData). Kontext-Eigenschaften müssen separat verfolgt und wiederhergestellt werden.

Dies ist eine von zwei Eigenschaften, die andere ist [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height), die die Größe des Canvas steuern.

## Wert

Eine Zahl.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Breite des Canvas mit dem folgenden Code ermitteln:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle, die zur Definition der `HTMLCanvasElement.width`-Eigenschaft verwendet wird
- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height): Weitere Eigenschaft zur Steuerung der Canvas-Größe
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
