---
title: "CanvasRenderingContext2D: getImageData() Methode"
short-title: getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
l10n:
  sourceCommit: 3fbc8b2ba17c1cf331fb67ce2e6561b15bf4f197
---

{{APIRef("Canvas API")}}

Die Methode **`getImageData()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle des Canvas 2D APIs gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrundeliegenden Pixeldaten für einen bestimmten Bereich der Leinwand repräsentiert.

Diese Methode wird nicht von der Transformationsmatrix der Leinwand beeinflusst. Wenn das angegebene Rechteck außerhalb der Grenzen der Leinwand liegt, sind die Pixel außerhalb der Leinwand im zurückgegebenen `ImageData`-Objekt transparent schwarz.

> [!NOTE]
> Bilddaten können mit der [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) Methode auf eine Leinwand gemalt werden.

Weitere Informationen über `getImageData()` und die allgemeine Manipulation von Leinwänden finden Sie in [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

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
  - : Die Breite des Rechtecks, aus dem die `ImageData` extrahiert wird. Positive Werte gehen nach rechts, negative nach links.
- `sh`
  - : Die Höhe des Rechtecks, aus dem die `ImageData` extrahiert wird. Positive Werte gehen nach unten, negative nach oben.
- `settings` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `colorSpace`
      - : Gibt den Farbraum der Bilddaten an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden.
    - `pixelFormat`
      - : Gibt das Pixelformat an. Mögliche Werte:
        - `"rgba-unorm8"`, für RGBA mit 8 Bit pro Komponente im nicht-signierten normierten Format, wobei ein {{jsxref("Uint8ClampedArray")}} verwendet wird.
        - `"rgba-float16"`, für RGBA mit 16 Bit pro Komponente, wobei ein {{jsxref("Float16Array")}} verwendet wird. Gleitkomma-Pixelwerte ermöglichen die Darstellung von Farben in beliebig breiten Farbräumen und hohem Dynamikumfang (HDR).

### Rückgabewert

Ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt, das die Bilddaten für das angegebene Rechteck der Leinwand enthält. Die Koordinaten der oberen linken Ecke des Rechtecks sind `(sx, sy)`, während die Koordinaten der unteren Ecke `(sx + sw - 1, sy + sh - 1)` sind.

> [!NOTE]
> Mit bestimmten Datenschutzeinstellungen (wie Fingerabdruckschutz) wird dem `getImageData()`-Ergebnis ein zufälliges, subtileres Rauschen hinzugefügt, um zu verhindern, dass die Website das Rendering-Gerät des Nutzers ableitet. Daher können `putImageData()` und `getImageData()` möglicherweise nicht verlustfrei sein.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `sw` oder `sh` null ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Leinwand enthält oder kann Pixel enthalten, die aus einem Ursprung geladen wurden, der nicht jener ist, von dem das Dokument selbst geladen wurde. Um zu vermeiden, dass in diesem Fall eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst wird, konfigurieren Sie CORS so, dass das Quellbild in dieser Weise verwendet werden darf. Siehe [Freigabe von Bildern und Canvas für die Verwendung zwischen verschiedenen Ursprüngen](/de/docs/Web/HTML/How_to/CORS_enabled_image).

## Beispiele

### Bilddaten aus einem Canvas abrufen

Dieses Beispiel zeichnet ein Bild und verwendet dann `getImageData()`, um einen Abschnitt der Leinwand zu erfassen.

Wir verwenden `getImageData()`, um einen Teil des Bildes zu extrahieren, der bei `(10, 20)` beginnt und eine Breite von `80` und eine Höhe von `230` hat. Wir zeichnen diesen Abschnitt dann dreimal und positionieren die Abschnitte progressiv unterhalb und rechts vom letzten Abschnitt.

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

### Daten in verschiedenen Pixelformaten abrufen

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
- [`ImageData`](/de/docs/Web/API/ImageData)-Objekt
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
- [Pixelmanipulation mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
