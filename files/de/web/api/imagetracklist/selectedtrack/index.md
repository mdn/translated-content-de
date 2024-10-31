---
title: "ImageTrackList: selectedTrack-Eigenschaft"
short-title: selectedTrack
slug: Web/API/ImageTrackList/selectedTrack
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selectedTrack`**-Eigenschaft der [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Schnittstelle gibt ein [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Objekt zurück, das den aktuell ausgewählten Track darstellt.

## Wert

Ein [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Objekt.

## Beispiele

Das folgende Beispiel gibt den `selectedTrack` zurück und gibt ihn dann in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
