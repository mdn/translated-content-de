---
title: "CanvasRenderingContext2D: createImageData() Methode"
short-title: createImageData()
slug: Web/API/CanvasRenderingContext2D/createImageData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.createImageData()`** Methode der Canvas 2D API erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.

## Syntax

```js-nolint
createImageData(width, height)
createImageData(width, height, settings)
createImageData(imagedata)
```

### Parameter

- `width`
  - : Die Breite, die dem neuen `ImageData`-Objekt gegeben werden soll. Ein negativer Wert dreht das Rechteck entlang der vertikalen Achse.
- `height`
  - : Die Höhe, die dem neuen `ImageData`-Objekt gegeben werden soll. Ein negativer Wert dreht das Rechteck entlang der horizontalen Achse.
- `settings` {{optional_inline}}
  - : Ein Objekt mit folgenden Eigenschaften:
    - `colorSpace`: Gibt den Farbraum der Bilddaten an. Kann auf `"srgb"` für den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden.
- `imagedata`
  - : Ein bestehendes `ImageData`-Objekt, von dem die Breite und Höhe kopiert werden. Das Bild selbst wird **nicht** kopiert.

### Rückgabewert

Ein neues [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit der angegebenen Breite und Höhe. Das neue Objekt ist mit transparenten schwarzen Pixeln gefüllt.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der Argumente `width` oder `height` null ist.

## Beispiele

### Erstellen eines leeren ImageData-Objekts

Dieses Snippet erstellt ein leeres `ImageData`-Objekt mit der `createImageData()`-Methode.

```html
<canvas id="canvas"></canvas>
```

Das erzeugte Objekt ist 100 Pixel breit und 50 Pixel hoch, also insgesamt 5.000 Pixel. Jedes Pixel innerhalb eines `ImageData`-Objekts besteht aus vier Array-Werten, sodass die [`data`](/de/docs/Web/API/ImageData/data)-Eigenschaft des Objekts eine Länge von 4 × 5.000 oder 20.000 hat.

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

Da jedes Pixel aus vier Werten besteht, iteriert die `for`-Schleife in Vielfachen von vier. Die Array-Werte, die jedem Pixel zugeordnet sind, sind R (rot), G (grün), B (blau) und A (alpha) in dieser Reihenfolge.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] = 190; // R value
  imageData.data[i + 1] = 0; // G value
  imageData.data[i + 2] = 210; // B value
  imageData.data[i + 3] = 255; // A value
}

// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);
```

#### Ergebnis

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### Weitere Beispiele

Für weitere Beispiele zur Verwendung von `createImageData()` und dem `ImageData`-Objekt siehe [Pixelmanipulation mit canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) und [`ImageData.data`](/de/docs/Web/API/ImageData/data).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [Pixelmanipulation mit canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
