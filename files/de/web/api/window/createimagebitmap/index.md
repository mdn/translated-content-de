---
title: "Window: createImageBitmap() Methode"
short-title: createImageBitmap()
slug: Web/API/Window/createImageBitmap
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Canvas API")}}

Die **`createImageBitmap()`** Methode der Schnittstelle [`Window`](/de/docs/Web/API/Window) erstellt ein Bitmap aus einer gegebenen Quelle, optional zugeschnitten, um nur einen Teil dieser Quelle zu enthalten. Sie akzeptiert eine Vielzahl unterschiedlicher Bildquellen und gibt ein {{jsxref("Promise")}} zurück, welches sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst.

## Syntax

```js-nolint
createImageBitmap(image)
createImageBitmap(image, options)
createImageBitmap(image, sx, sy, sw, sh)
createImageBitmap(image, sx, sy, sw, sh, options)
```

### Parameter

- `image`
  - : Eine Bildquelle, die eine der folgenden sein kann:
    - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
    - [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
    - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
    - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
    - [`Blob`](/de/docs/Web/API/Blob)
    - [`ImageData`](/de/docs/Web/API/ImageData)
    - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
    - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    - [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- `sx`
  - : Die x-Koordinate des Referenzpunkts des Rechtecks, aus dem das `ImageBitmap` extrahiert wird.
- `sy`
  - : Die y-Koordinate des Referenzpunkts des Rechtecks, aus dem das `ImageBitmap` extrahiert wird.
- `sw`
  - : Die Breite des Rechtecks, aus dem das `ImageBitmap` extrahiert wird. Dieser Wert kann negativ sein.
- `sh`
  - : Die Höhe des Rechtecks, aus dem das `ImageBitmap` extrahiert wird. Dieser Wert kann negativ sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Bildextraktion festlegt. Die verfügbaren Optionen sind:
    - `imageOrientation`
      - : Gibt an, wie das Bitmap-Bild ausgerichtet werden soll.
        - `from-image`
          - : Bild orientiert sich an den EXIF-Ausrichtungsmetadaten, falls vorhanden (Standard).
        - `flipY`
          - : Bild orientiert sich an den EXIF-Ausrichtungsmetadaten, falls vorhanden, und wird dann vertikal gespiegelt.
        - `none`
          - : Bild orientiert sich an der Bildkodierung, dabei werden alle Metadaten über die Ausrichtung ignoriert (wie z.B. EXIF-Metadaten, die einem Bild hinzugefügt werden könnten, um anzugeben, dass die Kamera seitlich gedreht wurde, um das Bild im Hochformat aufzunehmen).

    - `premultiplyAlpha`
      - : Gibt an, ob die Farbkanäle des Bitmaps durch den Alphakanal vormultipliziert werden sollen. Einer von `none`, `premultiply` oder `default` (Standard).
    - `colorSpaceConversion`
      - : Gibt an, ob das Bild unter Verwendung einer Farbraumkonvertierung dekodiert werden soll. Entweder `none` oder `default` (Standard). Der Wert `default` zeigt an, dass implementierungsspezifisches Verhalten verwendet wird.
    - `resizeWidth`
      - : Eine lange Ganzzahl, die die Ausgabe-Breite angibt.
    - `resizeHeight`
      - : Eine lange Ganzzahl, die die Ausgabe-Höhe angibt.
    - `resizeQuality`
      - : Gibt den Algorithmus an, der zum Anpassen der Eingabemaße an die Ausgabemaße verwendet werden soll. Einer von `pixelated`, `low` (Standard), `medium` oder `high`.

### Rückgabewert

Ein {{jsxref("Promise")}}, welches sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Objekt auflöst und Bitmap-Daten aus dem angegebenen Rechteck enthält.

## Beispiele

### Sprites aus einem Sprite Sheet erstellen

Dieses Beispiel lädt ein Sprite Sheet, extrahiert einzelne Sprites und rendert dann jedes Sprite auf die Leinwand. Ein Sprite Sheet ist ein Bild, das mehrere kleinere Bilder enthält, von denen jedes einzeln renderbar sein soll.

```html hidden
Original image:
<img src="50x50.jpg" />
<hr />
<canvas id="myCanvas"></canvas>
```

```css hidden
canvas {
  border: 2px solid green;
}
```

```js
const canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  image = new Image();

// Wait for the sprite sheet to load
image.onload = () => {
  Promise.all([
    // Cut out two sprites from the sprite sheet
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32),
    createImageBitmap(image, 0, 0, 50, 50, { imageOrientation: "flipY" }),
  ]).then((sprites) => {
    // Draw each sprite onto the canvas
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
    ctx.drawImage(sprites[2], 64, 64);
  });
};

// Load the sprite sheet from an image file
image.src = "50x50.jpg";
```

{{EmbedLiveSample("Creating sprites from a sprite sheet", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [`ImageData`](/de/docs/Web/API/ImageData)
