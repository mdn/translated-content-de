---
title: "ImageTrackList: Länge Eigenschaft"
short-title: Länge
slug: Web/API/ImageTrackList/length
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`length`**-Eigenschaft des {{domxref("ImageTrackList")}}-Interfaces gibt die Länge der `ImageTrackList` zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird der Wert von `length` in die Konsole ausgegeben.

```js
let tracks = imageDecoder.tracks;
console.log(tracks.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
