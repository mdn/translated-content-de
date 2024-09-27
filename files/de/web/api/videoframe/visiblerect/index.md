---
title: "VideoFrame: visibleRect-Eigenschaft"
short-title: visibleRect
slug: Web/API/VideoFrame/visibleRect
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`visibleRect`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt eine [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, die das sichtbare Rechteck der Pixel für dieses `VideoFrame` beschreibt.

## Wert

Eine [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

## Beispiele

Das folgende Beispiel druckt das `visibleRect` in die Konsole.

```js
console.log(VideoFrame.visibleRect);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
