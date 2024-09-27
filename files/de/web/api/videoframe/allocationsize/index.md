---
title: "VideoFrame: allocationSize()-Methode"
short-title: allocationSize()
slug: Web/API/VideoFrame/allocationSize
l10n:
  sourceCommit: 05d649713c24ee889b90f00097c5c09a1c81ecaa
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`allocationSize()`**-Methode des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt die Anzahl der Bytes zurück, die erforderlich sind, um das Video so zu halten, wie es durch Optionen gefiltert wird, die in die Methode übergeben werden.

## Syntax

```js-nolint
allocationSize()
allocationSize(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `rect` {{optional_inline}}
      - : Das Rechteck der Pixel, die aus dem `VideoFrame` kopiert werden sollen. Wenn nicht angegeben, wird das [`visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) verwendet. Dies ist im Format eines Wörterbuchobjekts, das Folgendes enthält:
        - `x`: Die x-Koordinate.
        - `y`: Die y-Koordinate.
        - `width`: Die Breite des Rahmens.
        - `height`: Die Höhe des Rahmens.
    - `layout` {{optional_inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält. Ebenen dürfen sich nicht überlappen. Wenn nicht angegeben, werden die Ebenen eng gepackt:
        - `offset`
          - : Eine ganze Zahl, die den Versatz in Bytes darstellt, an dem die gegebene Ebene beginnt.
        - `stride`
          - : Eine ganze Zahl, die die Anzahl der Bytes darstellt, einschließlich Auffüllung, die von jeder Zeile der Ebene verwendet werden.
    - `format` {{Optional_Inline}}
      - : Ein Pixelformat für die Pixeldaten in der `destination`. Kann auf `"RGBA"`, `"RGBX"`, `"BGRA"`, `"BGRX"` gesetzt werden. Wenn nicht angegeben, wird das [`format`](/de/docs/Web/API/VideoFrame/format) verwendet.
    - `colorSpace` {{Optional_Inline}}
      - : Gibt den Farbraum der Pixeldaten in der `destination` an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden. Nur anwendbar für RGB-Pixelformate. Wenn nicht angegeben, wird `"srgb"` verwendet.

### Rückgabewert

Eine ganze Zahl, die die Anzahl der Bytes enthält, die benötigt werden, um den Rahmen gemäß `options` zu halten.

## Beispiele

Im folgenden Beispiel wird die `allocationSize` für das Rechteck oben links mit den Abmessungen 800 mal 600 zurückgegeben.

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
