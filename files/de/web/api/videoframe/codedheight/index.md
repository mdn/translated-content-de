---
title: "VideoFrame: codedHeight Eigenschaft"
short-title: codedHeight
slug: Web/API/VideoFrame/codedHeight
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`codedHeight`** Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame) Interfaces gibt die Höhe des `VideoFrame` in Pixeln zurück. Diese kann möglicherweise nicht sichtbares Padding beinhalten und berücksichtigt potenzielle Verhältnis-Anpassungen noch nicht.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Das folgende Beispiel gibt die `codedHeight` in der Konsole aus.

```js
console.log(VideoFrame.codedHeight);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
