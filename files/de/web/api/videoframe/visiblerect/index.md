---
title: "VideoFrame: visibleRect-Eigenschaft"
short-title: visibleRect
slug: Web/API/VideoFrame/visibleRect
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`visibleRect`**-Eigenschaft des {{domxref("VideoFrame")}}-Interfaces gibt ein {{domxref("DOMRectReadOnly")}} zurück, das das sichtbare Rechteck der Pixel für diesen `VideoFrame` beschreibt.

## Wert

Ein {{domxref("DOMRectReadOnly")}}.

## Beispiele

Das folgende Beispiel gibt `visibleRect` in der Konsole aus.

```js
console.log(VideoFrame.visibleRect);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
