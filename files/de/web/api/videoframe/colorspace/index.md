---
title: "VideoFrame: colorSpace-Eigenschaft"
short-title: colorSpace
slug: Web/API/VideoFrame/colorSpace
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`colorSpace`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Objekt zurück, das den Farbraum des Videos repräsentiert.

## Wert

Ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Objekt.

## Beispiele

Das folgende Beispiel gibt den `colorSpace` in der Konsole aus.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// …
const videoFrame = new VideoFrame(cnv, { timestamp: 0 });
console.log(videoFrame.colorSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
