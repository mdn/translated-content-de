---
title: "ImageData: ImageData() Konstruktor"
short-title: ImageData()
slug: Web/API/ImageData/ImageData
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`ImageData()`** Konstruktor gibt ein neu instanziiertes
[`ImageData`](/de/docs/Web/API/ImageData) Objekt zurück, das aus dem angegebenen typisierten Array erstellt wurde und die angegebene Breite und Höhe hat.

Dieser Konstruktor ist der bevorzugte Weg, um ein solches Objekt in einem
[`Worker`](/de/docs/Web/API/Worker) zu erstellen.

## Syntax

```js-nolint
new ImageData(width, height)
new ImageData(width, height, settings)

new ImageData(dataArray, width)
new ImageData(dataArray, width, height)
new ImageData(dataArray, width, height, settings)
```

### Parameter

- `width`
  - : Ein nicht vorzeichenbehafteter langer Wert, der die Breite des Bildes darstellt.
- `height`
  - : Ein nicht vorzeichenbehafteter langer Wert, der die Höhe des Bildes darstellt. Dieser Wert ist optional, wenn ein Array angegeben ist: die Höhe wird aus der Größe des Arrays und der angegebenen Breite abgeleitet.
- `settings` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace`: Gibt den Farbraum der Bilddaten an. Kann auf `"srgb"` für den [sRGB Farb-Raum](https://de.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3 Farb-Raum](https://de.wikipedia.org/wiki/DCI-P3) gesetzt werden.
- `dataArray`
  - : Ein {{jsxref("Uint8ClampedArray")}}, das die zugrunde liegende Pixel-Darstellung des Bildes enthält. Wenn kein solches Array angegeben ist, wird ein Bild mit einem transparenten schwarzen Rechteck der angegebenen `width` und `height` erstellt.

### Rückgabewert

Ein neues [`ImageData`](/de/docs/Web/API/ImageData) Objekt.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `array` angegeben ist, aber seine Länge kein Vielfaches von `(4 * width)` oder `(4 * width * height)` ist.

## Beispiele

### Erstellen eines leeren ImageData-Objekts

Dieses Beispiel erstellt ein `ImageData` Objekt, das 200 Pixel breit und 100 Pixel hoch ist und insgesamt 20.000 Pixel enthält.

```js
let imageData = new ImageData(200, 100);
// ImageData { width: 200, height: 100, data: Uint8ClampedArray[80000] }
```

### ImageData unter Verwendung des display-p3 Farbraums

Dieses Beispiel erstellt ein `ImageData` Objekt mit dem [display-p3 Farbraum](https://de.wikipedia.org/wiki/DCI-P3).

```js
let imageData = new ImageData(200, 100, { colorSpace: "display-p3" });
```

### Initialisieren von ImageData mit einem Array

Dieses Beispiel instanziiert ein `ImageData` Objekt mit Pixel-Farben, die durch ein Array definiert werden.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Das Array (`arr`) hat eine Länge von `40000`: es besteht aus 10.000 Pixeln, von denen jedes durch 4 Werte definiert ist. Der `ImageData` Konstruktor gibt eine `width` von `200` für das neue Objekt an, sodass seine `height` standardmäßig 10.000 geteilt durch 200, also `50`, ist.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const arr = new Uint8ClampedArray(40_000);

// Fill the array with the same RGBA values
for (let i = 0; i < arr.length; i += 4) {
  arr[i + 0] = 0; // R value
  arr[i + 1] = 190; // G value
  arr[i + 2] = 0; // B value
  arr[i + 3] = 255; // A value
}

// Initialize a new ImageData object
let imageData = new ImageData(arr, 200);

// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);
```

#### Ergebnis

{{EmbedLiveSample('Initializing_ImageData_with_an_array', 700, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData), die Erstellermethode, die außerhalb von Workern verwendet werden kann.
