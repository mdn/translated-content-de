---
title: createImageBitmap() globale Funktion
short-title: createImageBitmap()
slug: Web/API/createImageBitmap
l10n:
  sourceCommit: 58e2387229cf437a087486ac683c3485a015623c
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die globale Methode **`createImageBitmap()`** erstellt ein Bitmap aus einer gegebenen Quelle, optional zugeschnitten, um nur einen Teil dieser Quelle zu enthalten. Die Methode existiert im globalen Bereich sowohl in Fenstern als auch in Workern. Sie akzeptiert eine Vielzahl unterschiedlicher Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das in einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird.

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

  - : Ein Objekt, das Optionen für die Extraktion des Bildes festlegt. Die verfügbaren Optionen sind:

    - `imageOrientation`

      - : Gibt an, wie das Bitmap-Bild ausgerichtet werden soll.

        - `from-image`
          - : Bild gemäß EXIF-Ausrichtungs-Metadaten ausgerichtet, falls vorhanden (Standard).
        - `flipY`
          - : Bild gemäß EXIF-Ausrichtungs-Metadaten ausgerichtet, falls vorhanden, und dann vertikal gespiegelt.
        - `none`
          - : Bild gemäß Bildcodierung ausgerichtet, unter Ignorierung aller Metadaten zur Ausrichtung (wie EXIF-Metadaten, die möglicherweise zu einem Bild hinzugefügt wurden, um anzugeben, dass die Kamera gedreht wurde, um das Bild im Hochformat aufzunehmen).

    - `premultiplyAlpha`
      - : Gibt an, ob die Farbkanäle des Bitmaps durch den Alphakanal vor multipliziert werden sollen. Einer von `none`, `premultiply` oder `default` (Standard).
    - `colorSpaceConversion`
      - : Gibt an, ob das Bild unter Verwendung der Farbraumkonvertierung dekodiert werden soll. Entweder `none` oder `default` (Standard). Der Wert `default` bedeutet, dass implementierungsspezifisches Verhalten verwendet wird.
    - `resizeWidth`
      - : Ein langer Integer, der die Ausgabebreite angibt.
    - `resizeHeight`
      - : Ein langer Integer, der die Ausgabehöhe angibt.
    - `resizeQuality`
      - : Gibt den Algorithmus an, der zum Ändern der Größe der Eingabe verwendet werden soll, um die Ausgabedimensionen anzupassen. Einer von `pixelated`, `low` (Standard), `medium` oder `high`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aufgelöst wird, welches Bitmap-Daten aus dem gegebenen Rechteck enthält.

## Beispiele

### Erstellen von Sprites aus einem Sprite-Sheet

Dieses Beispiel lädt ein Sprite-Sheet, extrahiert einzelne Sprites und rendert dann jedes Sprite auf die Leinwand. Ein Sprite-Sheet ist ein Bild, das mehrere kleinere Bilder enthält, von denen jedes separat gerendert werden soll.

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

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [`ImageData`](/de/docs/Web/API/ImageData)
