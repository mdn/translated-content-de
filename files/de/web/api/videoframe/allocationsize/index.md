---
title: "VideoFrame: allocationSize() Methode"
short-title: allocationSize()
slug: Web/API/VideoFrame/allocationSize
l10n:
  sourceCommit: 05d649713c24ee889b90f00097c5c09a1c81ecaa
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`allocationSize()`**-Methode der [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Schnittstelle gibt die Anzahl der Bytes zurück, die erforderlich sind, um das Video zu speichern, gefiltert durch die in die Methode übergebenen Optionen.

## Syntax

```js-nolint
allocationSize()
allocationSize(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `rect` {{optional_inline}}
      - : Das Rechteck von Pixeln, das aus dem `VideoFrame` kopiert werden soll. Falls nicht angegeben, wird das [`visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) verwendet. Dies erfolgt im Format eines Wörterbuchobjekts, das enthält:
        - `x`: Die x-Koordinate.
        - `y`: Die y-Koordinate.
        - `width`: Die Breite des Rahmens.
        - `height`: Die Höhe des Rahmens.
    - `layout` {{optional_inline}}
      - : Eine Liste, die folgende Werte für jede Ebene im `VideoFrame` enthält. Ebenen dürfen sich nicht überlappen. Falls nicht angegeben, werden die Ebenen dicht gepackt:
        - `offset`
          - : Ein ganzzahliger Wert, der das Offset in Bytes angibt, ab dem die gegebene Ebene beginnt.
        - `stride`
          - : Ein ganzzahliger Wert, der die Anzahl der Bytes, einschließlich Padding, angibt, die von jeder Zeile der Ebene verwendet werden.
    - `format` {{Optional_Inline}}
      - : Ein Pixelformat für die Pixel-Daten im `destination`. Kann auf `"RGBA"`, `"RGBX"`, `"BGRA"`, `"BGRX"` gesetzt werden. Falls nicht angegeben, wird das [`format`](/de/docs/Web/API/VideoFrame/format) verwendet.
    - `colorSpace` {{Optional_Inline}}
      - : Gibt den Farbraum der Pixel-Daten im `destination` an. Kann auf `"srgb"` für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) oder `"display-p3"` für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3) gesetzt werden. Nur anwendbar für RGB-Pixelformate. Falls nicht angegeben, wird `"srgb"` verwendet.

### Rückgabewert

Ein ganzzahliger Wert, der die Anzahl der Bytes enthält, die benötigt werden, um den Rahmen gemäß den `options` zu speichern.

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
