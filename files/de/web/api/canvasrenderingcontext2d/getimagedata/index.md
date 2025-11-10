---
title: "CanvasRenderingContext2D: getImageData() Methode"
short-title: getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
l10n:
  sourceCommit: eba7ce08cf50c5d9e344652748f6bcfb19f3a396
---

{{APIRef("Canvas API")}}

Die **`getImageData()`**-Methode der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) im Canvas 2D API gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten für einen angegebenen Bereich des Canvas darstellt.

Diese Methode wird nicht von der Transformationsmatrix des Canvas beeinflusst. Wenn das angegebene Rechteck über die Grenzen des Canvas hinausgeht, sind die Pixel außerhalb des Canvas im zurückgegebenen `ImageData`-Objekt transparent schwarz.

> [!NOTE]
> Bilddaten können mithilfe der [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)-Methode auf ein Canvas gemalt werden.

Weitere Informationen über `getImageData()` und die allgemeine Manipulation von Canvas-Inhalten finden Sie unter [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
```

### Parameter

- `sx`
  - : Die x-Koordinate der oberen linken Ecke des Rechtecks, aus dem die `ImageData` extrahiert werden.
- `sy`
  - : Die y-Koordinate der oberen linken Ecke des Rechtecks, aus dem die `ImageData` extrahiert werden.
- `sw`
  - : Die Breite des Rechtecks, aus dem die `ImageData` extrahiert werden. Positive Werte gehen nach rechts, negative nach links.
- `sh`
  - : Die Höhe des Rechtecks, aus dem die `ImageData` extrahiert werden. Positive Werte zeigen nach unten, und negative nach oben.
- `settings` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace`
      - : Gibt den Farbraum der Bilddaten an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden.
    - `pixelFormat`
      - : Gibt das Pixelformat an. Mögliche Werte:
        - `"rgba-unorm8"` für RGBA mit 8 Bit pro Komponente im unsignierten normalisierten Format, verwendet ein {{jsxref("Uint8ClampedArray")}}.
        - `"rgba-float16"` für RGBA mit 16 Bit pro Komponente, verwendet ein {{jsxref("Float16Array")}}. Gleitkomma-Pixelwerte ermöglichen die Darstellung von Farben in beliebig breiten Gamut-Bereichen und hohem dynamischen Bereich (HDR).

### Rückgabewert

Ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt, das die Bilddaten für das angegebene Rechteck des Canvas enthält. Die Koordinaten der oberen linken Ecke des Rechtecks sind `(sx, sy)`, während die Koordinaten der unteren Ecke `(sx + sw - 1, sy + sh - 1)` sind.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder `sw` oder `sh` gleich null sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Canvas enthält oder könnte Pixel enthalten, die von einer anderen Ursprungsadresse geladen wurden als die, von der das Dokument selbst geladen wurde. Um zu verhindern, dass in diesem Fall eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst wird, konfigurieren Sie CORS so, dass die Quellbilder auf diese Weise verwendet werden können.
    Siehe [Erlauben der plattformübergreifenden Verwendung von Bildern und Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image).

## Beispiele

### Bilddaten von einem Canvas abrufen

Dieses Beispiel zeichnet ein Bild und verwendet dann `getImageData()`, um einen Teil des Canvas zu erfassen.

Wir verwenden `getImageData()`, um einen Abschnitt des Bildes, beginnend bei `(10, 20)`, mit einer Breite von `80` und einer Höhe von `230`, zu extrahieren. Wir zeichnen dann diesen Abschnitt dreimal und positionieren die Abschnitte jeweils unterhalb und rechts vom vorherigen.

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

### Farbkonvertierung

Die optionale `colorSpace`-Einstellung erlaubt es, Bilddaten im gewünschten Format zu erhalten.

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// Get ImageData converted to sRGB
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
```

### Daten in verschiedenen Pixelformaten abrufen

Die optionale `pixelFormat`-Einstellung ermöglicht es, Bilddaten im gewünschten Pixelformat zu erhalten.

```js
const context = canvas.getContext("2d");

const imageData = context.getImageData(0, 0, 1, 1);
console.log(imageData.pixelFormat); // "rgba-unorm8"

const imageData = context.getImageData(0, 0, 1, 1, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.pixelFormat); // "rgba-float16"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`ImageData`](/de/docs/Web/API/ImageData)-Objekt
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
