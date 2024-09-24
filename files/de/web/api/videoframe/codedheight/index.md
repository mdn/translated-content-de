---
title: "VideoFrame: Eigenschaft codedHeight"
short-title: codedHeight
slug: Web/API/VideoFrame/codedHeight
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`codedHeight`**-Eigenschaft des {{domxref("VideoFrame")}}-Interfaces gibt die Höhe des VideoFrame in Pixeln zurück. Dabei kann möglicherweise nicht sichtbare Auffüllung enthalten sein, bevor mögliche Verhältnisänderungen berücksichtigt werden.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel wird die `codedHeight`-Eigenschaft in der Konsole ausgegeben.

```js
console.log(VideoFrame.codedHeight);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
