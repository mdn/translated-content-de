---
title: "VideoFrame: codedRect-Eigenschaft"
short-title: codedRect
slug: Web/API/VideoFrame/codedRect
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`codedRect`**-Eigenschaft der {{domxref("VideoFrame")}}-Schnittstelle gibt ein {{domxref("DOMRectReadOnly")}}-Objekt zurück, dessen Breite und Höhe der {{domxref("VideoFrame.codedWidth")}} und {{domxref("VideoFrame.codedHeight")}} entsprechen.

## Wert

Ein {{domxref("DOMRectReadOnly")}}.

## Beispiele

Das folgende Beispiel gibt das `codedRect` in der Konsole aus.

```js
console.log(VideoFrame.codedRect);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
