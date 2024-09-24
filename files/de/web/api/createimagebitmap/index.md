---
title: createImageBitmap() globale Funktion
short-title: createImageBitmap()
slug: Web/API/createImageBitmap
l10n:
  sourceCommit: 58e2387229cf437a087486ac683c3485a015623c
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`createImageBitmap()`** globale Methode erstellt ein Bitmap aus einer gegebenen Quelle, das optional beschnitten werden kann, um nur einen Teil dieser Quelle zu enthalten. Die Methode existiert im globalen Kontext sowohl in Fenstern als auch in Workern. Sie akzeptiert eine Vielzahl verschiedener Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das in ein {{domxref("ImageBitmap")}} aufgelöst wird.

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
    - {{domxref("HTMLImageElement")}}
    - {{domxref("SVGImageElement")}}
    - {{domxref("HTMLVideoElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("Blob")}}
    - {{domxref("ImageData")}}
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}
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
          - : Bild ausgerichtet gemäß EXIF-Orientierungs-Metadaten, falls vorhanden (Standard).
        - `flipY`
          - : Bild ausgerichtet gemäß EXIF-Orientierungs-Metadaten, falls vorhanden, und dann vertikal gespiegelt.
        - `none`
          - : Bild ausgerichtet gemäß Bildkodierung, ignoriert alle Metadaten zur Orientierung (wie EXIF-Metadaten, die einem Bild hinzugefügt werden könnten, um anzugeben, dass die Kamera gedreht wurde, um das Bild im Hochformat aufzunehmen).

    - `premultiplyAlpha`
      - : Gibt an, ob die Farbkanäle des Bitmaps vom Alphakanal vorvervielfacht werden sollen. Eine von `none`, `premultiply` oder `default` (Standard).
    - `colorSpaceConversion`
      - : Gibt an, ob das Bild unter Verwendung der Farbkonvertierung dekodiert werden soll. Entweder `none` oder `default` (Standard). Der Wert `default` gibt an, dass implementationsspezifisches Verhalten verwendet wird.
    - `resizeWidth`
      - : Ein Lang-Integer, das die Ausgabe-Breite angibt.
    - `resizeHeight`
      - : Ein Lang-Integer, das die Ausgabe-Höhe angibt.
    - `resizeQuality`
      - : Gibt den Algorithmus an, der zum Ändern der Größe der Eingabe verwendet werden soll, um den Ausgabedimensionen zu entsprechen. Eine von `pixelated`, `low` (Standard), `medium` oder `high`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein {{domxref("ImageBitmap")}}-Objekt aufgelöst wird, das Bitmap-Daten aus dem gegebenen Rechteck enthält.

## Beispiele

### Sprites aus einem Sprite Sheet erstellen

Dieses Beispiel lädt ein Sprite Sheet, extrahiert einzelne Sprites und rendert dann jedes Sprite auf die Leinwand. Ein Sprite Sheet ist ein Bild, das mehrere kleinere Bilder enthält, von denen jedes separat gerendert werden soll.

```html hidden
Ursprüngliches Bild:
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

// Warten, bis das Sprite Sheet geladen ist
image.onload = () => {
  Promise.all([
    // Zwei Sprites aus dem Sprite Sheet ausschneiden
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32),
    createImageBitmap(image, 0, 0, 50, 50, { imageOrientation: "flipY" }),
  ]).then((sprites) => {
    // Jedes Sprite auf die Leinwand zeichnen
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
    ctx.drawImage(sprites[2], 64, 64);
  });
};

// Das Sprite Sheet aus einer Bilddatei laden
image.src = "50x50.jpg";
```

{{EmbedLiveSample("Sprites aus einem Sprite Sheet erstellen", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
