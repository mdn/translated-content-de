---
title: "VideoFrame: codedWidth-Eigenschaft"
short-title: codedWidth
slug: Web/API/VideoFrame/codedWidth
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`codedWidth`**-Eigenschaft des {{domxref("VideoFrame")}}-Interfaces gibt die Breite des `VideoFrame` in Pixeln zurück, und kann potenziell nicht sichtbare Auffüllung enthalten, bevor mögliche Verhältnis-Anpassungen in Betracht gezogen werden.

## Wert

Ein Ganzzahlwert.

## Beispiele

Das folgende Beispiel gibt die `codedWidth` in der Konsole aus.

```js
console.log(VideoFrame.codedWidth);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
