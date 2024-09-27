---
title: "ImageTrack: repetitionCount-Eigenschaft"
short-title: repetitionCount
slug: Web/API/ImageTrack/repetitionCount
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`repetitionCount`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt die Anzahl der Wiederholungen dieses Tracks zurück.

## Wert

Eine ganze Zahl.

## Beispiele

Das folgende Beispiel gibt den Wert von `repetitionCount` in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.repetitionCount);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
