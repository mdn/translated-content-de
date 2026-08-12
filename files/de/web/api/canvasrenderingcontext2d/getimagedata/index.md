---
title: "CanvasRenderingContext2D: getImageData() Methode"
short-title: getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
l10n:
  sourceCommit: 6397f5a304fc4f2a470d73dba9937ea1aabc1229
---

{{APIRef("Canvas API")}}

Die Methode **`getImageData()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) des Canvas 2D API gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten für einen bestimmten Bereich des Canvas darstellt.

Diese Methode wird nicht von der Transformationsmatrix des Canvas beeinflusst. Falls das angegebene Rechteck über die Grenzen des Canvas hinausgeht, sind die Pixel außerhalb des Canvas im zurückgegebenen `ImageData`-Objekt transparent schwarz.

> [!NOTE]
> Bilddaten können mit der Methode [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) auf ein Canvas gemalt werden.

Weitere Informationen über `getImageData()` und allgemeine Manipulationen von Canvas-Inhalten finden Sie unter [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
```

### Parameter

- `sx`
  - : Die x-Achsen-Koordinate der oberen linken Ecke des Rechtecks, aus dem die `ImageData` extrahiert wird.
- `sy`
  - : Die y-Achsen-Koordinate der oberen linken Ecke des Rechtecks, aus dem die `ImageData` extrahiert wird.
- `sw`
  - : Die Breite des Rechtecks, aus dem die `ImageData` extrahiert wird. Positive Werte sind nach rechts, negative nach links.
- `sh`
  - : Die Höhe des Rechtecks, aus dem die `ImageData` extrahiert wird. Positive Werte sind nach unten, negative nach oben.
- `settings` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace`
      - : Bestimmt den Farbraum der Bilddaten. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden.
    - `pixelFormat`
      - : Bestimmt das Pixelformat. Mögliche Werte:
        - `"rgba-unorm8"`, für RGBA mit 8 Bit pro Komponente in einem unbegrenzten normalisierten Format, unter Verwendung eines {{jsxref("Uint8ClampedArray")}}.
        - `"rgba-float16"`, für RGBA mit 16 Bit pro Komponente, unter Verwendung eines {{jsxref("Float16Array")}}. Gleitkomma-Pixelwerte ermöglichen die Darstellung von Farben in beliebig breiten Farbräumen und mit hohem Dynamikbereich (HDR).

### Rückgabewert

Ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt, das die Bilddaten für das spezifizierte Rechteck des Canvas enthält. Die Koordinaten der oberen linken Ecke des Rechtecks sind `(sx, sy)`, während die Koordinaten der unteren Ecke `(sx + sw - 1, sy + sh - 1)` sind.

> [!NOTE]
> Mit bestimmten Datenschutzeinstellungen (wie Fingerprinting-Schutz) wird dem Ergebnis von `getImageData()` ein zufälliges, subtil eingefügtes Rauschen hinzugefügt, um zu verhindern, dass die Website das Rendering-Gerät des Benutzers ermitteln kann. Daher können `putImageData()` und `getImageData()` möglicherweise nicht verlustfrei hin- und hergehen.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder `sw` oder `sh` null sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Canvas enthält oder könnte Pixel enthalten, die von einem anderen Ursprung als dem, von dem das Dokument selbst geladen wurde, geladen wurden. Um zu vermeiden, dass in diesem Fall ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst wird, konfigurieren Sie CORS so, dass die Quellbildnutzung auf diese Weise erlaubt ist. Siehe [Erlauben der Nutzung von Bildern und Canvas über Ursprungsgrenzen hinweg](/de/docs/Web/HTML/How_to/CORS_enabled_image).

## Beispiele

### Bilddaten von einem Canvas holen

In diesem Beispiel wird ein Bild gezeichnet und dann `getImageData()` verwendet, um einen Teil des Canvas zu erfassen.

Wir verwenden `getImageData()`, um einen Abschnitt des Bildes zu extrahieren, beginnend bei `(10, 20)`, mit einer Breite von `80` und einer Höhe von `230`. Wir zeichnen dann diesen Abschnitt dreimal, und platzieren die Abschnitte progressiv unterhalb und rechts vom letzten Abschnitt.

#### HTML

```html
<canvas id="canvas" width="700" height="400"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "plumeria.jpg";
image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, 233, 320);

  const imageData = ctx.getImageData(10, 20, 80, 230);
  ctx.putImageData(imageData, 260, 0);
  ctx.putImageData(imageData, 380, 50);
  ctx.putImageData(imageData, 500, 100);
});
```

#### Ergebnis

{{EmbedLiveSample("Getting_image_data_from_a_canvas", "", 420)}}

### Farbraumkonvertierung

Die optionale `colorSpace`-Einstellung ermöglicht es Ihnen, Bilddaten im gewünschten Format zu erhalten.

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// Get ImageData converted to sRGB
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
```

### Daten in unterschiedlichen Pixelformaten erhalten

Die optionale `pixelFormat`-Einstellung ermöglicht es Ihnen, Bilddaten im gewünschten Pixelformat zu erhalten.

```js
const context = canvas.getContext("2d");

const defaultImageData = context.getImageData(0, 0, 1, 1);
console.log(defaultImageData.pixelFormat); // "rgba-unorm8"

const float16ImageData = context.getImageData(0, 0, 1, 1, {
  pixelFormat: "rgba-float16",
});
console.log(float16ImageData.pixelFormat); // "rgba-float16"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`ImageData`](/de/docs/Web/API/ImageData) Objekt
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
