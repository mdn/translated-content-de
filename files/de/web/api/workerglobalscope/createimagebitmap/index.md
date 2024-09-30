---
title: "WorkerGlobalScope: createImageBitmap()-Methode"
short-title: createImageBitmap()
slug: Web/API/WorkerGlobalScope/createImageBitmap
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("Canvas API")}}{{AvailableInWorkers("worker")}}

Die **`createImageBitmap()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle erstellt ein Bitmap aus einer gegebenen Quelle, das optional zugeschnitten werden kann, um nur einen Teil dieser Quelle zu enthalten. Sie akzeptiert eine Vielzahl verschiedener Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird.

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
          - : Bild wird entsprechend der EXIF-Orientierungsmetadaten ausgerichtet, falls vorhanden (Standard).
        - `flipY`
          - : Bild wird entsprechend der EXIF-Orientierungsmetadaten ausgerichtet, falls vorhanden, und dann vertikal gespiegelt.
        - `none`
          - : Bild wird entsprechend der Bildkodierung ausgerichtet, wobei alle Metadaten zur Ausrichtung ignoriert werden (wie EXIF-Metadaten, die einem Bild hinzugefügt werden könnten, um anzuzeigen, dass die Kamera gedreht wurde, um das Bild im Hochformat aufzunehmen).

    - `premultiplyAlpha`
      - : Gibt an, ob die Farbkanäle des Bitmaps durch den Alphakanal vorgemischt werden sollen. Einer von `none`, `premultiply` oder `default` (Standard).
    - `colorSpaceConversion`
      - : Gibt an, ob das Bild mithilfe der Farbraumkonvertierung dekodiert werden soll. Entweder `none` oder `default` (Standard). Der Wert `default` gibt an, dass ein implementierungsspezifisches Verhalten verwendet wird.
    - `resizeWidth`
      - : Ein langer Integer, der die Ausgangsbreite angibt.
    - `resizeHeight`
      - : Ein langer Integer, der die Ausgangshöhe angibt.
    - `resizeQuality`
      - : Gibt den Algorithmus an, der verwendet werden soll, um die Eingabe so zu skalieren, dass sie den Ausgabedimensionen entspricht. Einer von `pixelated`, `low` (Standard), `medium` oder `high`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aufgelöst wird, das Bitmap-Daten aus dem angegebenen Rechteck enthält.

## Beispiele

Siehe [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [`ImageData`](/de/docs/Web/API/ImageData)
