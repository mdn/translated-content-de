---
title: "ImageTrackList: selectedTrack-Eigenschaft"
short-title: selectedTrack
slug: Web/API/ImageTrackList/selectedTrack
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selectedTrack`**-Eigenschaft des [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Interfaces gibt ein [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Objekt zurück, das den derzeit ausgewählten Track repräsentiert.

## Wert

Ein [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Objekt.

## Beispiele

Das folgende Beispiel gibt die `selectedTrack` zurück und gibt sie dann in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
