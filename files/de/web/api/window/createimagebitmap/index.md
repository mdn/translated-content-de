---
title: "Window: createImageBitmap() Methode"
short-title: createImageBitmap()
slug: Web/API/Window/createImageBitmap
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("Canvas API")}}

Die **`createImageBitmap()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle erstellt ein Bitmap aus einer angegebenen Quelle, das optional zugeschnitten werden kann, um nur einen Teil dieser Quelle zu enthalten. Sie akzeptiert eine Vielzahl von unterschiedlichen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird.

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
  - : Die x-Koordinate des Bezugspunkts des Rechtecks, aus dem das `ImageBitmap` extrahiert wird.
- `sy`
  - : Die y-Koordinate des Bezugspunkts des Rechtecks, aus dem das `ImageBitmap` extrahiert wird.
- `sw`
  - : Die Breite des Rechtecks, aus dem das `ImageBitmap` extrahiert wird. Dieser Wert kann negativ sein.
- `sh`
  - : Die Höhe des Rechtecks, aus dem das `ImageBitmap` extrahiert wird. Dieser Wert kann negativ sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Extraktion des Bildes festlegt. Die verfügbaren Optionen sind:

    - `imageOrientation`

      - : Gibt an, wie das Bitmap-Bild ausgerichtet werden soll.

        - `from-image`
          - : Bild gemäß der EXIF-Ausrichtungsmetadaten ausgerichtet, sofern vorhanden (Standard).
        - `flipY`
          - : Bild gemäß der EXIF-Ausrichtungsmetadaten ausgerichtet, sofern vorhanden, und dann vertikal gespiegelt.
        - `none`
          - : Bild gemäß der Bildcodierung ausgerichtet, wobei alle Metadaten zur Ausrichtung (wie EXIF-Metadaten, die zu einem Bild hinzugefügt werden könnten, um anzuzeigen, dass die Kamera gedreht wurde, um das Bild im Hochformat aufzunehmen) ignoriert werden.

    - `premultiplyAlpha`
      - : Gibt an, ob die Farbkanäle des Bitmaps durch den Alphakanal vorvervielfacht werden sollen. Eine von `none`, `premultiply` oder `default` (Standard).
    - `colorSpaceConversion`
      - : Gibt an, ob das Bild mit einer Farbkonvertierung dekodiert werden soll. Entweder `none` oder `default` (Standard). Der Wert `default` zeigt an, dass implementierungsspezifisches Verhalten verwendet wird.
    - `resizeWidth`
      - : Eine lange Ganzzahl, die die Ausgabeweite angibt.
    - `resizeHeight`
      - : Eine lange Ganzzahl, die die Ausgabhöhe angibt.
    - `resizeQuality`
      - : Gibt den Algorithmus an, der zum Ändern der Größe des Eingangs verwendet werden soll, um die Ausgabedimensionen anzupassen. Eine von `pixelated`, `low` (Standard), `medium` oder `high`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aufgelöst wird, das Bitmap-Daten aus dem angegebenen Rechteck enthält.

## Beispiele

### Erstellen von Sprites aus einem Sprite-Sheet

Dieses Beispiel lädt ein Sprite-Sheet, extrahiert einzelne Sprites und rendert dann jedes Sprite auf das Canvas. Ein Sprite-Sheet ist ein Bild, das mehrere kleinere Bilder enthält, von denen jedes separat gerendert werden soll.

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

{{EmbedLiveSample("Erstellen von Sprites aus einem Sprite-Sheet", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [`ImageData`](/de/docs/Web/API/ImageData)
