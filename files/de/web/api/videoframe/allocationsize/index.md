---
title: "VideoFrame: allocationSize()-Methode"
short-title: allocationSize()
slug: Web/API/VideoFrame/allocationSize
l10n:
  sourceCommit: 05d649713c24ee889b90f00097c5c09a1c81ecaa
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`allocationSize()`**-Methode der {{domxref("VideoFrame")}}-Schnittstelle gibt die Anzahl der Bytes zurück, die benötigt werden, um das Video zu speichern, wie es durch die in die Methode übergebenen Optionen gefiltert wird.

## Syntax

```js-nolint
allocationSize()
allocationSize(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `rect` {{optional_inline}}
      - : Das Rechteck der Pixel, die aus dem `VideoFrame` kopiert werden sollen. Falls nicht angegeben, wird das {{domxref("VideoFrame.visibleRect","visibleRect")}} verwendet. Dies ist im Format eines Wörterbuchobjekts mit folgenden Angaben:
        - `x`: Die x-Koordinate.
        - `y`: Die y-Koordinate.
        - `width`: Die Breite des Rahmens.
        - `height`: Die Höhe des Rahmens.
    - `layout` {{optional_inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält. Ebenen dürfen sich nicht überlappen. Falls nicht angegeben, werden die Ebenen eng gepackt sein:
        - `offset`
          - : Ein Ganzzahlwert, der den Versatz in Bytes angibt, an dem die gegebene Ebene beginnt.
        - `stride`
          - : Ein Ganzzahlwert, der die Anzahl der Bytes, einschließlich Padding, repräsentiert, die von jeder Zeile der Ebene verwendet werden.
    - `format` {{Optional_Inline}}
      - : Ein Pixelformat für die Pixeldaten im `destination`. Kann auf `"RGBA"`, `"RGBX"`, `"BGRA"`, `"BGRX"` gesetzt werden. Falls nicht angegeben, wird das {{domxref("VideoFrame.format","format")}} verwendet.
    - `colorSpace` {{Optional_Inline}}
      - : Gibt den Farbraum der Pixeldaten im `destination` an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden. Nur anwendbar für RGB-Pixelformate. Falls nicht angegeben, wird `"srgb"` verwendet.

### Rückgabewert

Ein Ganzzahlwert, der die Anzahl der Bytes enthält, die benötigt werden, um den Rahmen wie durch `options` spezifiziert zu halten.

## Beispiele

Im folgenden Beispiel wird `allocationSize` für das Rechteck oben links mit den Abmessungen 800 x 600 zurückgegeben.

```js
const videoRect = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};
let size = VideoFrame.allocationSize({ rect: videoRect });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
