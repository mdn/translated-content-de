---
title: "HTMLCanvasElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.height`**-Eigenschaft ist eine positive `integer` und spiegelt das [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements wider, interpretiert in CSS-Pixeln. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert wie einen negativen gesetzt wird, wird der Standardwert `150` verwendet.

Das Setzen der `height`-Eigenschaft setzt den gesamten Rendering-Kontext auf seinen Standardzustand zurück. Dies schließt das Löschen des Canvas (Backpuffer), das Zurücksetzen des aktuellen Pfads und das Zurücksetzen _aller_ Eigenschaften wie `fillStyle` und `globalCompositeOperation` ein. Dieses Zurücksetzen erfolgt für alle Kontexttypen und tritt selbst dann auf, wenn `height` auf den aktuellen Wert gesetzt wird. Um den vorherigen Inhalt nach einer Höhenänderung wiederherzustellen, verwenden Sie [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) und [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData). Kontexteigenschaften müssen separat verfolgt und wiederhergestellt werden.

Dies ist eine von zwei Eigenschaften, die andere ist [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width), die die Größe des Canvas steuern.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

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

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle, die verwendet wird, um die `HTMLCanvasElement.height`-Eigenschaft zu definieren
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width): Andere Eigenschaft, die verwendet wird, um die Größe des Canvas zu steuern
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
