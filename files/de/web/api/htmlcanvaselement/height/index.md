---
title: "HTMLCanvasElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: d971fee0fa6a1a59e0bcf998c75bf9a6cdb746bc
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.height`**-Eigenschaft ist ein positiver `integer`, der das [`height`](/de/docs/Web/HTML/Element/canvas#height) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt und in CSS-Pixeln interpretiert wird. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie z. B. ein negativer, gesetzt ist, wird der Standardwert `150` verwendet.

Das Setzen der `height`-Eigenschaft setzt den gesamten Rendering-Kontext in seinen Standardzustand zurück. Dies beinhaltet das Löschen des Canvas (Backpuffer), das Zurücksetzen des aktuellen Pfades und das Zurücksetzen _aller_ Eigenschaften wie `fillStyle` und `globalCompositeOperation`. Dieser Reset erfolgt für alle Kontexttypen und tritt sogar auf, wenn die `height` auf ihren aktuellen Wert gesetzt wird. Um den vorherigen Inhalt nach dem Ändern der Höhe wiederherzustellen, verwenden Sie [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) und [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData). Kontexteigenschaften müssen separat verfolgt und wiederhergestellt werden.

Dies ist eine von zwei Eigenschaften, die andere ist [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width), die die Größe des Canvas steuert.

## Wert

Eine Zahl.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Höhe des Canvas mit folgendem Code abrufen:

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
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width): Andere Eigenschaft zur Steuerung der Größe des Canvas
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
