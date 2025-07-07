---
title: "ImageData: pixelFormat-Eigenschaft"
short-title: pixelFormat
slug: Web/API/ImageData/pixelFormat
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte **`ImageData.pixelFormat`**-Eigenschaft ist ein String, der das Pixelformat der Bilddaten angibt.

Das Pixelformat kann während der `ImageData`-Initialisierung entweder mit dem [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)-Konstruktor oder der [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)-Methode festgelegt werden.

## Wert

Diese Eigenschaft kann die folgenden Werte haben:

- `"rgba-unorm8"` repräsentiert RGBA mit 8 Bit pro Komponente im unsignierten, normalisierten Format, unter Verwendung eines {{jsxref("Uint8ClampedArray")}}.
- `"rgba-float16"` repräsentiert RGBA mit 16 Bits pro Komponente, unter Verwendung eines {{jsxref("Float16Array")}}. Gleitkommapixel-Werte ermöglichen die Darstellung von Farben in beliebig breiten Farbumfängen und im Hochdynamikbereich (HDR).

## Beispiele

### Gleitkomma-Pixeldaten für breite Farbumfänge und hohen Dynamikbereich (HDR)

Gleitkommapixel-Werte ermöglichen die Darstellung von Farben in beliebig breiten Farbumfängen und im hohen Dynamikbereich (HDR). Sie können die `pixelFormat`-Einstellung auf `"rgba-float16"` setzen, um RGBA-Werte mit 16 Bits pro Komponente zu verwenden. Dies erfordert, dass das `dataArray` ein {{jsxref("Float16Array")}} ist.

```js
let floatArray = new Float16Array(4 * 200 * 200);
let imageData = new ImageData(floatArray, 200, 200, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.pixelFormat); // "rgba-float16"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ImageData`](/de/docs/Web/API/ImageData)
- {{jsxref("Float16Array")}}
- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
