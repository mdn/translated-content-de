---
title: "WorkerGlobalScope: createImageBitmap() Methode"
short-title: createImageBitmap()
slug: Web/API/WorkerGlobalScope/createImageBitmap
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Canvas API")}}{{AvailableInWorkers("worker")}}

Die **`createImageBitmap()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle erstellt ein Bitmap aus einer gegebenen Quelle, das optional zugeschnitten werden kann, um nur einen Teil dieser Quelle zu enthalten. Es akzeptiert eine Vielzahl von unterschiedlichen Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst.

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
  - : Die Breite des Rechtecks, aus dem das `ImageBitmap` extrahiert wird.
    Dieser Wert kann negativ sein.
- `sh`
  - : Die Höhe des Rechtecks, aus dem das `ImageBitmap` extrahiert wird. Dieser Wert kann negativ sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Extraktion des Bildes festlegt.
    Die verfügbaren Optionen sind:

    - `imageOrientation`

      - : Gibt an, wie das Bitmap-Bild ausgerichtet werden soll.
        - `from-image`
          - : Bild gemäß EXIF-Ausrichtungsmetadaten ausgerichtet, falls vorhanden (Standard).
        - `flipY`
          - : Bild gemäß EXIF-Ausrichtungsmetadaten ausgerichtet, falls vorhanden, und dann vertikal gespiegelt.
        - `none`
          - : Bild anhand der Bildkodierung ausgerichtet, unter Ignorierung von Metadaten zur Ausrichtung (z. B. EXIF-Metadaten, die einem Bild hinzugefügt sein könnten, um anzugeben, dass die Kamera zur Aufnahme im Hochformat gedreht wurde).

    - `premultiplyAlpha`
      - : Gibt an, ob die Farbkanäle des Bitmaps mit dem Alphakanal vorvervielfacht werden sollen.
        Eine der Optionen `none`, `premultiply` oder `default` (Standard).
    - `colorSpaceConversion`
      - : Gibt an, ob das Bild mithilfe einer Farbkonvertierung dekodiert werden soll.
        Entweder `none` oder `default` (Standard).
        Der Wert `default` gibt an, dass eine implementierungsspezifische Vorgehensweise verwendet wird.
    - `resizeWidth`
      - : Eine ganze Zahl, die die Ausgabebreite angibt.
    - `resizeHeight`
      - : Eine ganze Zahl, die die Ausgabebreite angibt.
    - `resizeQuality`
      - : Gibt den Algorithmus an, der zum Anpassen der Eingabedaten an die Ausgabedimensionen verwendet wird.
        Eine der Optionen `pixelated`, `low` (Standard), `medium` oder `high`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt auflöst, das Bitmap-Daten aus dem angegebenen Rechteck enthält.

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
