---
title: "ImageTrack: animated-Eigenschaft"
short-title: animated
slug: Web/API/ImageTrack/animated
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`animated`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt `true` zurück, wenn der Track animiert ist und daher mehrere Frames enthält.

## Wert

Ein {{jsxref("Boolean")}}, wenn `true`, dann ist dies ein animierter Track.

## Beispiele

Das folgende Beispiel gibt den Wert von `animated` in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.animated);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
