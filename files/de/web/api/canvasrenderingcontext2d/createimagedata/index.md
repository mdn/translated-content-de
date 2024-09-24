---
title: "CanvasRenderingContext2D: Methode createImageData()"
short-title: createImageData()
slug: Web/API/CanvasRenderingContext2D/createImageData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.createImageData()`** Methode der Canvas 2D API erstellt ein neues, leeres {{domxref("ImageData")}}-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.

## Syntax

```js-nolint
createImageData(width, height)
createImageData(width, height, settings)
createImageData(imagedata)
```

### Parameter

- `width`
  - : Die Breite, die dem neuen `ImageData`-Objekt gegeben werden soll. Ein negativer Wert dreht das Rechteck um die vertikale Achse.
- `height`
  - : Die Höhe, die dem neuen `ImageData`-Objekt gegeben werden soll. Ein negativer Wert dreht das Rechteck um die horizontale Achse.
- `settings` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace`: Gibt den Farbraum der Bilddaten an. Kann auf `"srgb"` für den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB) oder auf `"display-p3"` für den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden.
- `imagedata`
  - : Ein bestehendes `ImageData`-Objekt, von dem die Breite und Höhe übernommen werden. Das Bild selbst wird **nicht** kopiert.

### Rückgabewert

Ein neues {{domxref("ImageData")}}-Objekt mit der angegebenen Breite und Höhe. Das neue Objekt ist mit transparent schwarzen Pixeln gefüllt.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eines der `width`- oder `height`-Argumente null ist.

## Beispiele

### Erstellen eines leeren ImageData-Objekts

Dieses Beispiel erzeugt ein leeres `ImageData`-Objekt mit der `createImageData()`-Methode.

```html
<canvas id="canvas"></canvas>
```

Das erzeugte Objekt ist 100 Pixel breit und 50 Pixel hoch, was insgesamt 5.000 Pixel macht. Jedes Pixel innerhalb eines `ImageData`-Objekts besteht aus vier Array-Werten, sodass die {{domxref("ImageData.data", "data")}}-Eigenschaft des Objekts eine Länge von 4 × 5.000 oder 20.000 hat.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imageData = ctx.createImageData(100, 50);
console.log(imageData);
// ImageData { width: 100, height: 50, data: Uint8ClampedArray[20000] }
```

### Füllen eines leeren ImageData-Objekts

Dieses Beispiel erstellt und füllt ein neues `ImageData`-Objekt mit lila Pixeln.

```html
<canvas id="canvas"></canvas>
```

Da jedes Pixel aus vier Werten besteht, iteriert die `for`-Schleife in Vierer-Schritten. Die Array-Werte, die jedem Pixel zugeordnet sind, sind R (Rot), G (Grün), B (Blau) und A (Alpha) in dieser Reihenfolge.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// Gehe durch jedes Pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Ändere die Pixel-Daten
  imageData.data[i + 0] = 190; // R-Wert
  imageData.data[i + 1] = 0; // G-Wert
  imageData.data[i + 2] = 210; // B-Wert
  imageData.data[i + 3] = 255; // A-Wert
}

// Zeichne die Bilddaten auf das Canvas
ctx.putImageData(imageData, 20, 20);
```

#### Ergebnis

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### Weitere Beispiele

Für weitere Beispiele, wie `createImageData()` und das `ImageData`-Objekt verwendet werden, siehe [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) und {{domxref("ImageData.data")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}}
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
