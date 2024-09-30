---
title: "ImageTrackList: Eigenschaft selectedTrack"
short-title: selectedTrack
slug: Web/API/ImageTrackList/selectedTrack
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selectedTrack`** Eigenschaft der [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) Schnittstelle gibt ein [`ImageTrack`](/de/docs/Web/API/ImageTrack) Objekt zurück, das die aktuell ausgewählte Spur darstellt.

## Wert

Ein [`ImageTrack`](/de/docs/Web/API/ImageTrack) Objekt.

## Beispiele

Das folgende Beispiel gibt die `selectedTrack` zurück und druckt sie in die Konsole.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
