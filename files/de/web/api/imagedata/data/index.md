---
title: "ImageData: data-Eigenschaft"
short-title: data
slug: Web/API/ImageData/data
l10n:
  sourceCommit: eba7ce08cf50c5d9e344652748f6bcfb19f3a396
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ImageData.data`**-Eigenschaft gibt ein
{{jsxref("Uint8ClampedArray")}} oder {{jsxref("Float16Array")}} zurück, das die Pixel-Daten des [`ImageData`](/de/docs/Web/API/ImageData)-Objekts enthält. Die Daten werden als eindimensionales Array im RGBA-Format gespeichert.

## Wert

Der Typ hängt vom verwendeten [`ImageData.pixelFormat`](/de/docs/Web/API/ImageData/pixelFormat) ab:

- Ein {{jsxref("Uint8ClampedArray")}}, wenn das `pixelFormat` `"rgba-unorm8"` ist.
- Ein {{jsxref("Float16Array")}}, wenn das `pixelFormat` `"rgba-float16"` ist.

## Beispiele

### Pixel-Daten eines ImageData-Objekts abrufen

Dieses Beispiel erstellt ein `ImageData`-Objekt, das 100 Pixel breit und 100
Pixel hoch ist, insgesamt also 10.000 Pixel enthält. Das `data`-Array speichert vier Werte für jedes Pixel, insgesamt also 4 x 10.000 oder 40.000 Werte.

```js
let imageData = new ImageData(100, 100);
console.log(imageData.data); // Uint8ClampedArray[40000]
console.log(imageData.data.length); // 40000
```

Wenn das `ImageData`-Objekt für Floating-Point-Pixel eingerichtet ist – zum Beispiel für High Dynamic Range (HDR)-Bilder – wird `data` stattdessen ein {{jsxref("Float16Array")}} sein.

```js
let floatArray = new Float16Array(4 * 200 * 200);
let imageData = new ImageData(floatArray, 200, 200, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.data); // Float16Array
```

### Ein leeres ImageData-Objekt füllen

Dieses Beispiel erstellt und füllt ein neues `ImageData`-Objekt mit bunten Pixeln.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Da jedes Pixel aus vier Werten im `data`-Array besteht, iteriert die
`for`-Schleife in Vielfachen von vier. Die Werte, die mit jedem
Pixel assoziiert sind, sind R (rot), G (grün), B (blau) und A (alpha), in dieser Reihenfolge.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// Fill the array with RGBA values
for (let i = 0; i < imageData.data.length; i += 4) {
  // Percentage in the x direction, times 255
  let x = ((i % 400) / 400) * 255;
  // Percentage in the y direction, times 255
  let y = (Math.ceil(i / 400) / 100) * 255;

  // Modify pixel data
  imageData.data[i + 0] = x; // R value
  imageData.data[i + 1] = y; // G value
  imageData.data[i + 2] = 255 - x; // B value
  imageData.data[i + 3] = 255; // A value
}

// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);
```

#### Ergebnis

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### Weitere Beispiele

Für weitere Beispiele zur Verwendung von `ImageData.data` siehe [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas),
[`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und
[`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ImageData.height`](/de/docs/Web/API/ImageData/height)
- [`ImageData.width`](/de/docs/Web/API/ImageData/width)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
