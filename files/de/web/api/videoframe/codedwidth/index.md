---
title: "VideoFrame: codedWidth-Eigenschaft"
short-title: codedWidth
slug: Web/API/VideoFrame/codedWidth
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`codedWidth`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt die Breite des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich nicht sichtbarer Auffüllung und vor der Berücksichtigung potenzieller Verhältnisänderungen.

## Wert

Eine ganze Zahl.

## Beispiele

Das folgende Beispiel gibt die `codedWidth` in der Konsole aus.

```js
console.log(VideoFrame.codedWidth);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
