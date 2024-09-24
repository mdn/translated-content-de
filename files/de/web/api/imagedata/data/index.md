---
title: "ImageData: Daten-Eigenschaft"
short-title: daten
slug: Web/API/ImageData/data
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ImageData.data`**-Eigenschaft gibt ein
{{jsxref("Uint8ClampedArray")}} zurück, das die Pixeldaten des {{domxref("ImageData")}}-Objekts enthält. Die Daten werden als eindimensionales Array im RGBA-Format gespeichert, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich).

## Wert

Ein {{jsxref("Uint8ClampedArray")}}.

## Beispiele

### Abrufen der Pixeldaten eines ImageData-Objekts

Dieses Beispiel erstellt ein `ImageData`-Objekt, das 100 Pixel breit und 100
Pixel hoch ist, was insgesamt 10.000 Pixel ergibt. Das `data`-Array speichert vier Werte
für jedes Pixel, also 4 x 10.000 oder insgesamt 40.000 Werte.

```js
let imageData = new ImageData(100, 100);
console.log(imageData.data); // Uint8ClampedArray[40000]
console.log(imageData.data.length); // 40000
```

### Ausfüllen eines leeren ImageData-Objekts

Dieses Beispiel erstellt und füllt ein neues `ImageData`-Objekt mit bunten Pixeln.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Da jedes Pixel aus vier Werten innerhalb des `data`-Arrays besteht, iteriert die
`for`-Schleife in Viererschritten. Die Werte, die jedem Pixel zugeordnet sind, sind R (rot), G (grün), B (blau) und A (alpha), in dieser Reihenfolge.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// Füllen des Arrays mit RGBA-Werten
for (let i = 0; i < imageData.data.length; i += 4) {
  // Prozentsatz in x-Richtung, multipliziert mit 255
  let x = ((i % 400) / 400) * 255;
  // Prozentsatz in y-Richtung, multipliziert mit 255
  let y = (Math.ceil(i / 400) / 100) * 255;

  // Modifizieren der Pixeldaten
  imageData.data[i + 0] = x; // R-Wert
  imageData.data[i + 1] = y; // G-Wert
  imageData.data[i + 2] = 255 - x; // B-Wert
  imageData.data[i + 3] = 255; // A-Wert
}

// Zeichnen der Bilddaten auf das Canvas
ctx.putImageData(imageData, 20, 20);
```

#### Ergebnis

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### Weitere Beispiele

Für weitere Beispiele zur Verwendung von `ImageData.data`, siehe [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas),
{{domxref("CanvasRenderingContext2D.createImageData()")}}, und
{{domxref("CanvasRenderingContext2D.putImageData()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ImageData.height")}}
- {{domxref("ImageData.width")}}
- {{domxref("ImageData")}}
- {{domxref("CanvasRenderingContext2D.createImageData()")}}
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
