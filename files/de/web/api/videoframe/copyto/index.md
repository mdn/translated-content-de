---
title: "VideoFrame: copyTo()-Methode"
short-title: copyTo()
slug: Web/API/VideoFrame/copyTo
l10n:
  sourceCommit: 05d649713c24ee889b90f00097c5c09a1c81ecaa
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`**-Methode der {{domxref("VideoFrame")}}-Schnittstelle kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.

## Syntax

```js-nolint
copyTo(destination)
copyTo(destination, options)
```

### Parameter

- `destination`
  - : Ein `ArrayBuffer`, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, in den kopiert wird.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `rect` {{Optional_Inline}}
      - : Das Rechteck der Pixel, die aus dem `VideoFrame` kopiert werden sollen. Falls nicht angegeben, wird das {{domxref("VideoFrame.visibleRect","visibleRect")}} verwendet. Dies ist im Format eines Wörterbuchobjekts mit:
        - `x`: Die x-Koordinate.
        - `y`: Die y-Koordinate.
        - `width`: Die Breite des Rahmens.
        - `height`: Die Höhe des Rahmens.
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält:
        - `offset`
          - : Ein Ganzzahlwert, der den Versatz in Byte darstellt, an dem die gegebene Ebene beginnt.
        - `stride`
          - : Ein Ganzzahlwert, der die Anzahl der Bytes darstellt, einschließlich Polsterung, die von jeder Zeile der Ebene verwendet wird.
            Ebenen dürfen sich nicht überlappen. Wenn kein `layout` angegeben ist, werden die Ebenen dicht gepackt.
    - `format` {{Optional_Inline}}
      - : Ein Pixelformat für die Pixeldaten im `destination`. Kann auf `"RGBA"`, `"RGBX"`, `"BGRA"`, `"BGRX"` gesetzt werden. Falls nicht angegeben, wird das {{domxref("VideoFrame.format","format")}} verwendet.
    - `colorSpace` {{Optional_Inline}}
      - : Gibt den Farbraum der Pixeldaten im `destination` an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden. Nur anwendbar für RGB-Pixelformate. Falls nicht angegeben, wird `"srgb"` verwendet.

### Rückgabewert

Ein `Promise`, das auf das Layout der Kopie auflöst, wenn die Kopie abgeschlossen ist.

## Beispiele

Das folgende Beispiel kopiert den gesamten Inhalt von `videoFrame`.

```js
let buffer = new Uint8Array(videoFrame.allocationSize());
let layout = await videoFrame.copyTo(buffer);
```

Das folgende Beispiel konvertiert einen Teil des `videoFrame` in das RGB-Format.

```js
const videoRect = {
  x: 100,
  y: 100,
  width: 80,
  height: 60,
};
const options = {
  rect: videoRect,
  format: "RGBX",
  colorSpace: "display-p3",
};
const size = videoFrame.allocationSize(options);
const buffer = new ArrayBuffer(size);
const layout = await videoFrame.copyTo(buffer, options);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
