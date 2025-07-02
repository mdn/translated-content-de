---
title: "ImageData: pixelFormat-Eigenschaft"
short-title: pixelFormat
slug: Web/API/ImageData/pixelFormat
l10n:
  sourceCommit: 7ed95bd9e3e72ec095fd2dc9bc0deab0801b2e6e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ImageData.pixelFormat`**-Eigenschaft ist ein String, der das Pixelformat der Bilddaten angibt.

Das Pixelformat kann während der Initialisierung von `ImageData` entweder mit dem [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) Konstruktor oder der [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) Methode festgelegt werden.

## Wert

Diese Eigenschaft kann die folgenden Werte haben:

- `"rgba-unorm8"` steht für RGBA mit 8 Bit pro Komponente im unsigned normalized Format, unter Verwendung eines {{jsxref("Uint8ClampedArray")}}.
- `"rgba-float16"` steht für RGBA mit 16 Bit pro Komponente, unter Verwendung eines {{jsxref("Float16Array")}}. Gleitkomma-Pixelwerte ermöglichen die Darstellung von Farben in beliebig breiten Farbräumen und hohen Dynamikumfang (HDR).

## Beispiele

### Gleitkomma-Pixeldaten für breite Farbräume und hohen Dynamikumfang (HDR)

Gleitkomma-Pixelwerte ermöglichen die Darstellung von Farben in beliebig breiten Farbräumen und hohem Dynamikumfang (HDR). Sie können die `pixelFormat`-Einstellung auf `"rgba-float16"` setzen, um RGBA-Werte mit 16 Bit pro Komponente zu verwenden. Dies erfordert, dass das `dataArray` ein {{jsxref("Float16Array")}} ist.

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
