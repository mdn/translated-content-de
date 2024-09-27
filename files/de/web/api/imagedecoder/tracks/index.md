---
title: "ImageDecoder: Eigenschaft tracks"
short-title: tracks
slug: Web/API/ImageDecoder/tracks
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`tracks`** schreibgeschützte Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces gibt eine Liste der Tracks in den codierten Bilddaten zurück.

## Wert

Ein [`ImageTrackList`](/de/docs/Web/API/ImageTrackList).

## Beispiele

Das folgende Beispiel gibt den Wert von `tracks` in der Konsole aus. Dies wird ein [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Objekt sein.

```js
console.log(imageDecoder.tracks);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
