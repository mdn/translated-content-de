---
title: "ImageTrack: animated-Eigenschaft"
short-title: animated
slug: Web/API/ImageTrack/animated
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`animated`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt `true` zurück, wenn die Spur animiert ist und daher mehrere Frames hat.

## Wert

Ein {{jsxref("boolean")}}, wenn `true`, handelt es sich um eine animierte Spur.

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
