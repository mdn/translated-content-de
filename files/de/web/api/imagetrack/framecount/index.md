---
title: "ImageTrack: frameCount-Eigenschaft"
short-title: frameCount
slug: Web/API/ImageTrack/frameCount
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`frameCount`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt die Anzahl der Frames im Track zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Das folgende Beispiel gibt den Wert von `frameCount` in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.frameCount);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
