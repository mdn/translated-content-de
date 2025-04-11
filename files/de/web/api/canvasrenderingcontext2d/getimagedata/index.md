---
title: "CanvasRenderingContext2D: getImageData() Methode"
short-title: getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

Die Methode **`getImageData()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) der Canvas 2D API gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixel-Daten für einen angegebenen Teilbereich des Canvas darstellt.

Diese Methode wird nicht von der Transformationsmatrix des Canvas beeinflusst. Wenn das angegebene Rechteck die Grenzen des Canvas überschreitet, sind die Pixel außerhalb des Canvas im zurückgegebenen `ImageData`-Objekt transparent schwarz.

> [!NOTE]
> Bilddaten können mit der Methode [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) auf ein Canvas gemalt werden.

Sie können weitere Informationen über `getImageData()` und die allgemeine Manipulation von Canvas-Inhalten in [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) finden.

## Syntax

```js-nolint
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
```

### Parameter

- `sx`
  - : Die x-Achsen-Koordinate der oberen linken Ecke des Rechtecks, aus dem die `ImageData` extrahiert werden.
- `sy`
  - : Die y-Achsen-Koordinate der oberen linken Ecke des Rechtecks, aus dem die `ImageData` extrahiert werden.
- `sw`
  - : Die Breite des Rechtecks, aus dem die `ImageData` extrahiert werden. Positive Werte nach rechts, negative nach links.
- `sh`
  - : Die Höhe des Rechtecks, aus dem die `ImageData` extrahiert werden. Positive Werte nach unten, negative nach oben.
- `settings` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace`: Gibt den Farbraum der Bilddaten an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden.

### Rückgabewert

Ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt, das die Bilddaten für das angegebene Rechteck des Canvas enthält. Die Koordinaten der oberen linken Ecke des Rechtecks sind `(sx, sy)`, während die Koordinaten der unteren Ecke `(sx + sw - 1, sy + sh - 1)` sind.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder `sw` oder `sh` null sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Canvas enthält oder könnte Pixel enthalten, die von einem anderen Ursprung geladen wurden als der, von dem das Dokument selbst geladen wurde. Um das Auslösen einer `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) in dieser Situation zu vermeiden, konfigurieren Sie CORS, um zuzulassen, dass das Quellbild auf diese Weise verwendet werden darf. Siehe [Erlauben der Cross-Origin-Verwendung von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image).

## Beispiele

### Abrufen von Bilddaten aus einem Canvas

Dieses Beispiel zeichnet ein Bild und verwendet dann `getImageData()`, um einen Teil des Canvas zu erfassen.

Wir verwenden `getImageData()`, um einen Abschnitt des Bildes zu extrahieren, beginnend bei `(10, 20)`, mit einer Breite von `80` und einer Höhe von `230`. Wir zeichnen dann diesen Abschnitt dreimal und positionieren die Abschnitte jeweils unterhalb und rechts von dem vorherigen Abschnitt.

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

Die optionale Einstellung `colorSpace` ermöglicht es Ihnen, Bilddaten im gewünschten Format zu erhalten.

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// Get ImageData converted to sRGB
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`ImageData`](/de/docs/Web/API/ImageData)-Objekt
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
