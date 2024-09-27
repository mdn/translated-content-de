---
title: "VideoFrame: codedRect Eigenschaft"
short-title: codedRect
slug: Web/API/VideoFrame/codedRect
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`codedRect`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) mit der Breite und Höhe zurück, die [`VideoFrame.codedWidth`](/de/docs/Web/API/VideoFrame/codedWidth) und [`VideoFrame.codedHeight`](/de/docs/Web/API/VideoFrame/codedHeight) entsprechen.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

## Beispiele

Das folgende Beispiel gibt das `codedRect` in der Konsole aus.

```js
console.log(VideoFrame.codedRect);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
