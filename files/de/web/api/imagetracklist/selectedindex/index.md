---
title: "ImageTrackList: Eigenschaft selectedIndex"
short-title: selectedIndex
slug: Web/API/ImageTrackList/selectedIndex
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selectedIndex`**-Eigenschaft des {{domxref("ImageTrackList")}}-Interfaces gibt den `index` des ausgewählten Tracks zurück.

## Wert

Ein Ganzzahlwert.

## Beispiele

Das folgende Beispiel gibt den Wert von `selectedIndex` in der Konsole aus.

```js
let tracks = imageDecoder.tracks;
console.log(tracks.selectedIndex);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}