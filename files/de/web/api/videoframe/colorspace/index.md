---
title: "VideoFrame: colorSpace-Eigenschaft"
short-title: colorSpace
slug: Web/API/VideoFrame/colorSpace
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`colorSpace`**-Eigenschaft des {{domxref("VideoFrame")}}-Interfaces gibt ein {{domxref("VideoColorSpace")}}-Objekt zurück, das den Farbraum des Videos repräsentiert.

## Wert

Ein {{domxref("VideoColorSpace")}}-Objekt.

## Beispiele

Das folgende Beispiel gibt den `colorSpace` in der Konsole aus.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// ...
const videoFrame = new VideoFrame(cnv, { timestamp: 0 });
console.log(videoFrame.colorSpace);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
